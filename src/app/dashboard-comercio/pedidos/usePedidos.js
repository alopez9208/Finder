"use client";
import { useState, useEffect } from "react";
import { TbArrowsSort } from "react-icons/tb";

const usePedidos = () => {
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

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

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
            const res = await fetch(`/api/dashboard-comercio/pedidos/${pedidoId}`);
            const data = await res.json();
            console.log("Respuesta de la API (detalles del pedido):", data);

            if (data.success) {
                const detalles = data.detalles.map(det => ({
                    pkid: det.fkid_tbl_productos, // El ID del producto
                    nombre: det.productos ? det.productos.nombre : "Producto no encontrado",
                    precio_unitario: det.precio_venta_unitario || 0,
                    costo_unitario: det.costo_unitario || 0,
                    cantidad: det.cantidad || 1,
                    detallePkid: det.pkid
                }));
                console.log("Detalles mapeados:", detalles);
                setProductosSeleccionados(detalles);
            } else {
                setProductosSeleccionados([]);
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
                const pedidoPkid = editingPedido ? editingPedido.pkid : data.pedido.pkid; // Obtener el PKID del pedido (nuevo o existente)

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
                const deleteRes = await fetch(`/api/dashboard-comercio/pedidos/${pedidoPkid}`, {
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

    return {
        searchTelefono,
        setsearchTelefono,
        currentPage,
        setCurrentPage,
        pedidosPerPage,
        pedidos,
        clientes,
        transportadoras,
        sortConfig,
        handleSort,
        renderSortIcon,
        visiblepedidos,
        totalPages,
        handlePageChange,
        openModalForEdit,
        modalOpen,
        editingPedido,
        setValor_total,
        valor_total,
        fecha_creacion,
        setFecha_creacion,
        selectedCliente,
        setSelectedCliente,
        selectedTransportadora,
        setSelectedTransportadora,
        productosDisponibles,
        searchProducto,
        setSearchProducto,
        productosSeleccionados,
        setProductosSeleccionados,
        selectedProductToAdd,
        setSelectedProductToAdd,
        cantidadProducto,
        setCantidadProducto,
        addProductToCart,
        removeProductFromCart,
        openModalForNew,
        setModalOpen,
        handleSubmit,
        setError,
        error,
        setSuccess,
        success,
        formatFecha,
    };
}

export default usePedidos;
