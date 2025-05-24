'use client'

import usePedidos from "./usePedidos";
import { FaEdit, FaPlus } from "react-icons/fa";

export default function PedidosPage() {

  const {
    searchTelefono,
    setsearchTelefono,
    currentPage,
    clientes,
    transportadoras,    
    handleSort,
    renderSortIcon,
    visiblepedidos,
    totalPages,
    handlePageChange,
    openModalForEdit,
    modalOpen,
    modalRef,
    editingPedido,
    setValor_total,
    valor_total,
    valor_flete,
    setValor_flete,
    fecha_creacion,
    setFecha_creacion,
    selectedCliente,
    setSelectedCliente,
    selectedTransportadora,
    setSelectedTransportadora,
    selectedMunicipio,
    setSelectedMunicipio,
    municipios,
    productosDisponibles,
    searchProducto,
    setSearchProducto,
    productosSeleccionados,    
    selectedProductToAdd,
    setSelectedProductToAdd,
    cantidadProducto,
    setCantidadProducto,
    addProductToCart,
    removeProductFromCart,
    openModalForNew,
    setModalOpen,
    handleSubmit,        
    formatFecha,

  } = usePedidos();

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
                {[{ key: "pkid", label: "ID" }, { key: "clientes.telefono", label: "Telefono" }, { key: "fecha_creacion", label: "Fecha de Creación" }, { key: "transportadoras.nomenclatura", label: "Transportadora" }, { key: "municipios.nombre", label: "Municipio" }, { key: "valor_total", label: "Recaudo" }, { key: "valor_flete", label: "Valor Flete" },
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
                  <td className="p-3">{pedidos.municipios.nombre}</td>
                  <td className="p-3">{pedidos.valor_total}</td>
                  <td className="p-3">{pedidos.valor_flete}</td>
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
          <div ref={modalRef} className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-md relative text-gray-700 border">
            <h3 className="text-xl font-semibold mb-4">
              {editingPedido ? "Editar Pedido" : "Nuevo Pedido"}
            </h3>
            <input type="number"
              placeholder="Recaudo"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white read-only:bg-[#f0ebff]"
              value={valor_total}
              onChange={(e) => setValor_total(e.target.value)}
            />
            <input type="number"
              placeholder="Valor Flete"
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white read-only:bg-[#f0ebff]"
              value={valor_flete}
              onChange={(e) => setValor_flete(e.target.value)}
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

            <select
              value={selectedMunicipio}
              onChange={(e) => setSelectedMunicipio(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white disabled:bg-[#f0ebff]"
            >
              <option value="">Seleccione un Municipio</option>
              {municipios.map((municipio) => (
                <option key={municipio.pkid} value={municipio.pkid}>
                  {municipio.nombre}
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
