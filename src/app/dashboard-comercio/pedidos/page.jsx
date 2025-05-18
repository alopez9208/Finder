"use client";
import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { TbArrowsSort } from "react-icons/tb";

export default function PedidosPage() {
  const [searchTelefono, setsearchTelefono] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pedidosPerPage = 5;
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [transportadoras, setTransportadoras] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [modalOpen, setModalOpen] = useState(false);
  const [editingPedido, setEditingPedido] = useState(null);
  const [valor_total, setValor_total] = useState("");
  const [fecha_creacion, setFecha_creacion] = useState("");
  const [selectedTransportadora, setSelectedTransportadora] = useState("");
  const [selectedCliente, setSelectedCliente] = useState("");

  const [productosDisponibles, setProductosDisponibles] = useState([]);
  const [searchProducto, setSearchProducto] = useState("");
  const [productosSeleccionados, setProductosSeleccionados] = useState([]);
  const [selectedProductToAdd, setSelectedProductToAdd] = useState(null);
  const [cantidadProducto, setCantidadProducto] = useState(1);

  useEffect(() => {
    fetchPedidos();
    fetchTransporters();
    fetchClientes();
    fetchProductos();
  }, []);

  const fetchPedidos = async () => {
    try {
      const res = await fetch("/api/dashboard-comercio/pedidos");
      const data = await res.json();
      if (data.success) {
        setPedidos(data.pedidos);
      } else {
        console.error("No se encontraron pedidos");
      }
    } catch (error) {
      console.error("Error al obtener pedidos:", error);
    }
  };

  const fetchClientes = async () => {
    try {
      const res = await fetch("/api/dashboard-comercio/clientes");
      const data = await res.json();
      console.log("Respuesta del backend:", data);
      if (data.success) {
        setClientes(data.clientes || []);
      } else {
        setClientes([]);
        console.error("No se encontraron clientes");
      }
    } catch (error) {
      setClientes([]);
      console.error("Error al obtener clientes:", error);
    }
  };

  const fetchTransporters = async () => {
    try {
      const res = await fetch("/api/dashboard/transporters");
      const data = await res.json();
      if (data.success) {
        setTransportadoras(data.transportadoras || []);
      } else {
        setTransportadoras([]);
        console.error("No se encontraron transportadoras");
      }
    } catch (error) {
      setTransportadoras([]);
      console.error("Error al obtener transportadoras:", error);
    }
  };

  const fetchProductos = async () => {
    try {
      const res = await fetch("/api/dashboard/products");
      const data = await res.json();
      console.log("Respuesta de la API:", data); 
      if (data.success) {
        setProductosDisponibles(data.products || []); 
      } else {
        console.error("No se encontraron productos");
        setProductosDisponibles([]); 
      }
    } catch (error) {
      console.error("Error al obtener productos:", error);
      setProductosDisponibles([]); 
    }
  };

  const formatDateForInput = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const openModalForNew = () => {
    setEditingPedido(null);
    setValor_total("");
    setFecha_creacion("");
    setSelectedCliente("");
    setSelectedTransportadora("");
    setProductosSeleccionados([]); 
    setModalOpen(true);
  };

  const openModalForEdit = async (pedido) => {
    setEditingPedido(pedido);
    setValor_total(pedido.valor_total.toString());
    setFecha_creacion(formatDateForInput(pedido.fecha_creacion));
    setSelectedCliente(pedido.fkid_tbl_clientes);
    setSelectedTransportadora(pedido.fkid_tbl_transportadoras);    
    await loadDetalleProductosForEdit(pedido.pkid);
    setModalOpen(true);
  };

  const formatFecha = (isoString) => {
    if (!isoString) return "";
    const date = new Date(isoString);
    const year = date.getFullYear().toString().slice();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const parseDate = (dateValue, isStart = true) => {
    if (!dateValue) return null;

    if (dateValue instanceof Date) {
      return dateValue.toISOString();
    }
    // Si es string ISO completo (fecha + hora)
    if (dateValue.includes("T")) {
      return new Date(dateValue).toISOString();
    }
    // Si es string 'YYYY-MM-DD', agrega hora según sea inicio o fin del día
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateValue)) {
      return new Date(`${dateValue}T${isStart ? "00:00:00" : "23:59:59"}-05:00`).toISOString();
    }
    // Si no cumple, devuelve null o error
    return null;
  };

  const addProductToCart = () => {
    console.log("Valor de productosSeleccionados antes de addProductToCart:", productosSeleccionados);

    if (!selectedProductToAdd || cantidadProducto <= 0) {
      alert("Por favor, selecciona un producto y una cantidad válida.");
      return;
    }

    const existingProductIndex = productosSeleccionados.findIndex(
      (item) => item.pkid === selectedProductToAdd.pkid
    );

    if (existingProductIndex > -1) {
      const updatedCart = [...productosSeleccionados];
      updatedCart[existingProductIndex].cantidad += cantidadProducto;
      setProductosSeleccionados(updatedCart);
    } else {
      setProductosSeleccionados([
        ...productosSeleccionados,
        {
          pkid: selectedProductToAdd.pkid,
          nombre: selectedProductToAdd.nombre,
          precio_unitario: selectedProductToAdd.valor, 
          costo_unitario: selectedProductToAdd.costo || 0, 
          cantidad: cantidadProducto,
        },
      ]);
    }

    setSelectedProductToAdd(null);
    setCantidadProducto(1);
    setSearchProducto(""); 
  };

  const removeProductFromCart = (productId) => {
    console.log("Valor de productosSeleccionados antes de filter:", productosSeleccionados);
    setProductosSeleccionados(
      productosSeleccionados.filter((item) => item.pkid !== productId)
    );
  };

  // Función para inicializar los productosSeleccionados al editar
  const loadDetalleProductosForEdit = async (pedidoId) => {
    try {
      const res = await fetch(`/api/dashboard-comercio/pedidos/${pedidoId}/detalles`);
      const data = await res.json();
      if (data.success) {
        const detalles = data.detalles.map(det => ({
          pkid: det.fkid_tbl_productos, // El ID del producto
          nombre: det.productos.nombre,
          precio_unitario: det.precio_venta_unitario, // ¡Importante! Mapea a precio_venta_unitario de la API
          costo_unitario: det.costo_unitario, // ¡Importante! Mapea el costo_unitario de la API
          cantidad: det.cantidad,
          detallePkid: det.pkid, // Conserva este por si lo necesitas para algo más
        }));
        setProductosSeleccionados(detalles);
      } else {
        setProductosSeleccionados([]);
        console.error("No se encontraron detalles para este pedido.");
      }
    } catch (error) {
      console.error("Error al cargar detalles de pedido:", error);
      setProductosSeleccionados([]);
    }
  };

  const handleSubmit = async () => {
    const valorNumerico = parseFloat(valor_total);

    if (isNaN(valorNumerico) || valorNumerico <= 0 || !fecha_creacion.trim() || !selectedTransportadora || !selectedCliente || productosSeleccionados.length === 0) {
      alert("Por favor, completa todos los campos, asegúrate de que el Valor Total sea un número positivo y añade al menos un producto.");
      return;
    }

    const localFecha_Creacion = parseDate(fecha_creacion, false);
    if (!localFecha_Creacion) {
      alert("Formato de fecha inválido.");
      return;
    }

    const method = editingPedido ? "PUT" : "POST";
    const url = "/api/dashboard-comercio/pedidos";

    const payload = editingPedido
      ? { pkid: editingPedido.pkid, valor_total: valorNumerico, fecha_creacion: localFecha_Creacion, fkid_tbl_transportadoras: selectedTransportadora, fkid_tbl_clientes: selectedCliente }
      : { valor_total: valorNumerico, fecha_creacion: localFecha_Creacion, fkid_tbl_transportadoras: selectedTransportadora, fkid_tbl_clientes: selectedCliente };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        const pedidoPkid = editingPedido ? editingPedido.pkid : data.pkid; // Obtener el PKID del pedido (nuevo o existente)

        // Ahora, guardar los detalles de los productos
        await saveDetalleProductos(pedidoPkid);

        setModalOpen(false);
        fetchPedidos();
      } else {
        console.error("Error al guardar el pedido principal:", data.message);
        alert(`Error al guardar el pedido principal: ${data.message}`);
      }
    } catch (error) {
      console.error("Error al enviar datos del pedido principal:", error);
      alert("Error al enviar datos del pedido principal.");
    }
  };

  const saveDetalleProductos = async (pedidoPkid) => {
    if (editingPedido) {
      try {
        // Tu API DELETE de pedidos/[id] espera el ID en la URL
        const deleteRes = await fetch(`/api/dashboard-comercio/pedidos/${pedidoPkid}/detalles`, {
          method: 'DELETE',
        });
        if (!deleteRes.ok) {
          const errorData = await deleteRes.json();
          throw new Error(`Error al eliminar detalles existentes: ${errorData.message}`);
        }
      } catch (error) {
        console.error("Error al eliminar detalles de pedido existentes:", error);
        alert(`No se pudieron eliminar los detalles de productos anteriores. Error: ${error.message}`);
        return; // Detiene la ejecución si falla la eliminación para evitar inconsistencias
      }
    }

    if (productosSeleccionados.length === 0) {
      console.log("No hay productos seleccionados para guardar en el detalle.");
      // Puedes decidir si esto es un error o una operación válida (ej. un pedido sin productos)
      return;
    }

    // Mapear los productos seleccionados a la estructura esperada por la API POST de detalle-pedidos
    const detallesToSave = productosSeleccionados.map(prod => ({
      cantidad: prod.cantidad,
      precio_venta_unitario: prod.precio_unitario, // Mapea del carrito al nombre del campo de tu DB
      costo_unitario: prod.costo_unitario, // Mapea del carrito al nombre del campo de tu DB
      fkid_tbl_productos: prod.pkid.toString(), // Convertir a string para BigInt en el backend si viene como number
      fkid_tbl_pedidos: pedidoPkid.toString(), // Convertir a string para BigInt en el backend
    }));

    try {
      const res = await fetch("/api/dashboard-comercio/detalle-pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ detalles: detallesToSave }),
      });

      const data = await res.json();
      if (!data.success) {
        console.error("Error al guardar los detalles de los productos:", data.message);
        alert(`Error al guardar los detalles de los productos: ${data.message}`);
      } else {
        console.log("Detalles de productos guardados/actualizados correctamente.");
      }
    } catch (error) {
      console.error("Error al enviar detalles de productos:", error);
      alert("Error al enviar detalles de productos.");
    }
  };

  const filteredpedidos = (pedidos || [])
    .filter((pedido) => {
      const telefono = pedido.clientes?.telefono?.toLowerCase() || '';
      const matchTelefono = telefono.includes(searchTelefono.toLowerCase());
      return matchTelefono;
    })

    .sort((a, b) => {
      if (!sortConfig.key) return 0;

      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      const aNum = Number(aVal);
      const bNum = Number(bVal);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        return sortConfig.direction === "asc" ? aNum - bNum : bNum - aNum;
      }

      const aStr = aVal?.toString().toLowerCase() || '';
      const bStr = bVal?.toString().toLowerCase() || '';

      if (aStr < bStr) return sortConfig.direction === "asc" ? -1 : 1;
      if (aStr > bStr) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredpedidos.length / pedidosPerPage);
  const startIndex = (currentPage - 1) * pedidosPerPage;
  const visiblepedidos = filteredpedidos.slice(startIndex, startIndex + pedidosPerPage);

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const renderSortIcon = (key) => {
    if (sortConfig.key !== key) return <TbArrowsSort className="inline ml-1 text-gray-400" />;
    return sortConfig.direction === "asc" ? (
      <TbArrowsSort className="inline ml-1 text-blue-500 rotate-180" />
    ) : (
      <TbArrowsSort className="inline ml-1 text-blue-500 rotate-0" />
    );
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="m-12">
      <h2 className="text-2xl text-gray-800 mb-8">Lista de Pedidos</h2>

      <div className="bg-white p-6 rounded-2xl">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            className="w-full max-w-md pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none text-gray-800"
            placeholder="Buscar por Telefono"
            value={searchTelefono}
            onChange={(e) => setsearchTelefono(e.target.value)}
          />
          <button
            onClick={openModalForNew}
            className="ml-4 flex items-center space-x-2 bg-[#3E82FF] text-white px-4 py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer"
          >
            <FaPlus />
            <span>Nuevo Pedido</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[{ key: "pkid", label: "ID" }, { key: "clientes.telefono", label: "Telefono" }, { key: "fecha_creacion", label: "Fecha de Creación" }, { key: "transportadoras.nomenclatura", label: "Transportadora" }, { key: "valor_total", label: "Valor Total" },
                ]
                  .map(({ key, label }) => (
                    <th
                      key={key}
                      className="p-3 text-left cursor-pointer select-none"
                      onClick={() => handleSort(key)}
                    >
                      {label} {renderSortIcon(key)}
                    </th>
                  ))}
                <th className="p-3 text-right w-40">Acción</th>
              </tr>
            </thead>
            <tbody>
              {visiblepedidos.map((pedidos, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">{pedidos.pkid}</td>
                  <td className="p-3">{pedidos.clientes.telefono}</td>
                  <td className="p-3">{formatFecha(pedidos.fecha_creacion)}</td>
                  <td className="p-3">{pedidos.transportadoras.nomenclatura}</td>
                  <td className="p-3">{pedidos.valor_total}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => openModalForEdit(pedidos)}
                      className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <FaEdit />
                      <span>Editar</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="mt-4 flex justify-center items-center space-x-2 text-gray-400">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
              disabled={currentPage === 1}
            >
              Anterior
            </button>

            {/* Mostrar la primera página si no estamos en ella y el rango es mayor a 3 */}
            {currentPage > 3 && (
              <button
                onClick={() => handlePageChange(1)}
                className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
              >
                1
              </button>
            )}

            {/* Si hay más de 4 páginas anteriores a la actual, mostrar "..." */}
            {currentPage > 4 && <span className="px-3 py-1">...</span>}

            {/* Páginas alrededor de la página actual */}
            {Array.from({ length: 5 }, (_, i) => {
              const pageNumber = currentPage - 2 + i;
              if (pageNumber > 0 && pageNumber <= totalPages) {
                return (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white ${currentPage === pageNumber ? "bg-blue-500 text-white" : ""
                      }`}
                  >
                    {pageNumber}
                  </button>
                );
              }
              return null; // No renderizar números fuera del rango
            })}

            {/* Si hay más de 3 páginas posteriores a la actual, mostrar "..." */}
            {currentPage < totalPages - 3 && <span className="px-3 py-1">...</span>}

            {/* Mostrar la última página si no estamos en ella */}
            {currentPage < totalPages - 2 && (
              <button
                onClick={() => handlePageChange(totalPages)}
                className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
              >
                {totalPages}
              </button>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-md relative text-gray-700 border">
            <h3 className="text-xl font-semibold mb-4">
              {editingPedido ? "Editar Pedido" : "Nuevo Pedido"}
            </h3>
            <input type="number"
              placeholder="Valor Total"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white read-only:bg-[#f0ebff]"
              value={valor_total}
              onChange={(e) => setValor_total(e.target.value)}
            />
            <input
              type="date"
              placeholder="Fecha de Creación"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white read-only:bg-[#f0ebff]"
              value={fecha_creacion ? fecha_creacion.substring(0, 10) : ""}
              onChange={(e) => setFecha_creacion(e.target.value)}
            />
            <select
              value={selectedCliente}
              onChange={(e) => setSelectedCliente(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white disabled:bg-[#f0ebff]"

            >
              <option value="">Seleccione un Cliente</option>
              {clientes.map((cliente) => (
                <option key={cliente.pkid} value={cliente.pkid}>
                  {cliente.telefono}
                </option>
              ))}
            </select>
            <select
              value={selectedTransportadora}
              onChange={(e) => setSelectedTransportadora(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white disabled:bg-[#f0ebff]"

            >
              <option value="">Seleccione una Transportadora</option>
              {transportadoras.map((transportadoras) => (
                <option key={transportadoras.pkid} value={transportadoras.pkid}>
                  {transportadoras.nomenclatura}
                </option>
              ))}
            </select>

            <hr className="my-4" />
            <h4 className="text-lg font-semibold mb-3">Productos del Pedido</h4>

            {/* Búsqueda y adición de productos */}
            <div className="mb-4">
              <label htmlFor="searchProduct" className="block text-sm font-medium text-gray-700 mb-1">
                Buscar Producto:
              </label>
              <div className="flex space-x-2 mb-2">
                <select
                  id="searchProduct"
                  value={selectedProductToAdd ? selectedProductToAdd.pkid : ""}
                  onChange={(e) => {
                    const product = productosDisponibles.find(p => p.pkid.toString() === e.target.value);
                    setSelectedProductToAdd(product);
                  }}
                  className="flex-grow px-4 py-2 border rounded focus:outline-none bg-white"
                >
                  <option value="">Seleccione un Producto</option>
                  {productosDisponibles && Array.isArray(productosDisponibles) ? (
                    productosDisponibles
                      .filter(p => p.nombre.toLowerCase().includes(searchProducto.toLowerCase()))
                      .map((prod) => (
                        <option key={prod.pkid} value={prod.pkid}>
                          {prod.nombre} - ${prod.precio_base}
                        </option>
                      ))
                  ) : (
                    <option value="">Cargando productos...</option> // O un mensaje más apropiado
                  )}
                </select>
                <input
                  type="number"
                  min="1"
                  value={cantidadProducto}
                  onChange={(e) => setCantidadProducto(parseInt(e.target.value) || 1)}
                  className="w-20 px-4 py-2 border rounded focus:outline-none bg-white"
                />
                <button
                  onClick={addProductToCart}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Añadir
                </button>
              </div>
              <input
                type="text"
                placeholder="Filtrar por nombre de producto"
                value={searchProducto}
                onChange={(e) => setSearchProducto(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none bg-white"
              />
            </div>

            {/* Lista de productos en el carrito */}
            {productosSeleccionados.length > 0 ? (
              <div className="mb-4 border rounded p-3 bg-white">
                <h5 className="font-medium mb-2">Detalles del Pedido:</h5>
                {productosSeleccionados.map((item) => (
                  <div key={item.pkid} className="flex justify-between items-center mb-2 last:mb-0">
                    <span>
                      {item.cantidad} x {item.nombre} ( ${item.precio_unitario} c/u)
                    </span>
                    <button
                      onClick={() => removeProductFromCart(item.pkid)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 mb-4">No hay productos añadidos a este pedido.</p>
            )}

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer"
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
