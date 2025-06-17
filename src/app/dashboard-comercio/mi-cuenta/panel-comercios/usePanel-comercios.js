'use client'

import { useState, useEffect, useRef } from "react";
import { useRelacionSeleccionada } from "@/app/hooks/useRelacionSeleccionada";
import { TbArrowsSort } from "react-icons/tb";
import { formatFecha } from "@/app/utils/dateUtils";
import { formatearNumero } from "@/app/utils/numberUtils";

const usePanelComercios = () => {
    const [searchTelefono, setsearchTelefono] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const pedidosPerPage = 20;
    const [pedidos, setPedidos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const relacionSeleccionada = useRelacionSeleccionada();
    const hasFetchedRef = useRef(false);
    const [valor_total, setValor_total] = useState("");
    const [cantidadPedidos, setCantidadPedidos] = useState(0);
    const [costoTotal, setCostoTotal] = useState(0);
    const [valor_flete, setValor_flete] = useState("");
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState("");
    const [pedidosFiltrados, setPedidosFiltrados] = useState([]);
    const [diasFiltro, setDiasFiltro] = useState("");

    useEffect(() => {
        if (relacionSeleccionada && !hasFetchedRef.current) {
            fetchPedidos();
            fetchClientes();
            fetchCostoTotal();
            hasFetchedRef.current = true;
        }
    }, [relacionSeleccionada]);

    const handleLimpiar = () => {
        setPedidosFiltrados([]);
        setUsuarioSeleccionado("");
        fetchPedidos();
        fetchCostoTotal();
    };

    const handleFiltrarPorDias = async () => {
        if (!diasFiltro) return;
      
        const hoy = new Date();
        const fechaLimite = new Date();
        fechaLimite.setDate(hoy.getDate() - parseInt(diasFiltro));
      
        const filtrados = pedidos.filter((pedido) => {
          const fechaPedido = new Date(pedido.fecha_creacion);
          const coincideUsuario = usuarioSeleccionado ? pedido.fkid_tbl_usuarios === usuarioSeleccionado : true;
          return fechaPedido >= fechaLimite && fechaPedido <= hoy && coincideUsuario;
        });
      
        setPedidosFiltrados(filtrados);
        setCantidadPedidos(filtrados.length);
        setValor_total(filtrados.reduce((acc, p) => acc + (p.valor_total || 0), 0));
        setValor_flete(filtrados.reduce((acc, p) => acc + (p.valor_flete || 0), 0));
      
        const pedidoIds = filtrados.map((p) => p.pkid);
        await fetchCostoTotal(pedidoIds);
      };

    const handleFiltrarPorUsuario = async () => {
        if (!usuarioSeleccionado) return;

        const filtrados = pedidos.filter(
            (pedido) => pedido.fkid_tbl_usuarios === usuarioSeleccionado
        );

        setPedidosFiltrados(filtrados);
        setCantidadPedidos(filtrados.length);
        setValor_total(filtrados.reduce((acc, p) => acc + (p.valor_total || 0), 0));
        setValor_flete(filtrados.reduce((acc, p) => acc + (p.valor_flete || 0), 0));

        const pedidoIds = filtrados.map((p) => p.pkid); // o el ID que uses
        await fetchCostoTotal(pedidoIds);
    };


    const fetchPedidos = async (fecha_inicio = null, fecha_fin = null) => {
        try {
            const comercioId = relacionSeleccionada.pkidRelacion.toString();
            let url = `/api/dashboard-comercio/pedidos`;

            if (fecha_inicio && fecha_fin) {
                url += `?fecha_inicio=${fecha_inicio}&fecha_fin=${fecha_fin}`;
            }

            const res = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-comercio-id": comercioId,
                },
            });

            if (!res.ok) throw new Error("Error al obtener pedidos");

            const data = await res.json();

            if (data.success && Array.isArray(data.pedidos)) {
                setPedidos(data.pedidos);
                setCantidadPedidos(data.pedidos.length);


                const parseNumber = (val) => {
                    if (typeof val === 'number') return val;
                    if (typeof val === 'string') {
                        return Number(val.replace(/\D/g, "")) || 0;
                    }
                    return 0;
                };

                const suma_total = data.pedidos.reduce(
                    (acc, pedido) => acc + parseNumber(pedido.valor_total),
                    0
                );

                const suma_flete = data.pedidos.reduce(
                    (acc, pedido) => acc + parseNumber(pedido.valor_flete),
                    0
                );

                setValor_total(suma_total.toString());
                setValor_flete(suma_flete.toString());

                return data.pedidos;
            } else {
                console.error("No hay pedidos o data.pedidos no es un array:", data.pedidos);
                return [];
            }
        } catch (error) {
            console.error("Error al obtener pedidos:", error);
            return [];
        }
    };

    const fetchCostoTotal = async (pedidoIds) => {
        try {
            const comercioId = relacionSeleccionada.pkidRelacion;

            if (pedidoIds && pedidoIds.length === 0) {
                setCostoTotal(0);
                return;
            }

            let url = `/api/dashboard-comercio/stats`;
            if (pedidoIds && pedidoIds.length > 0) {
                url += `?pedidoIds=${pedidoIds.join(',')}`;
            }

            const res = await fetch(url, {
                headers: {
                    'x-comercio-id': comercioId.toString(),
                },
            });

            if (!res.ok) throw new Error('Error al obtener costo total');

            const data = await res.json();
            if (data.success && typeof data.costoTotal === 'number') {
                setCostoTotal(data.costoTotal);
            } else {
                setCostoTotal(0);
            }
        } catch (error) {
            console.error('Error al obtener costo total:', error);
            setCostoTotal(0);
        }
    };

    const fetchClientes = async () => {
        if (!relacionSeleccionada) return;

        try {
            const res = await fetch(`/api/dashboard-comercio/clientes?comercioId=${relacionSeleccionada.pkidRelacion}`, {
                headers: {
                    "x-comercio-id": relacionSeleccionada.pkidRelacion.toString(),
                },
            });
            const data = await res.json();
            if (data.success) {
                setClientes(data.clientes);
            }
        } catch (error) {
            console.error("Error fetching clientes:", error);
        }
    };

    const handleSubmit = async () => {

    };

    const filteredpedidos = (pedidosFiltrados.length > 0 ? pedidosFiltrados : pedidos)

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
        sortConfig,
        setSortConfig,
        handleSort,
        renderSortIcon,
        handlePageChange,
        visiblepedidos,
        totalPages,
        startIndex,
        handleSubmit,
        formatFecha,
        formatearNumero,
        valor_total,
        setValor_total,
        cantidadPedidos,
        setCantidadPedidos,
        costoTotal,
        setCostoTotal,
        valor_flete,
        setValor_flete,
        usuarioSeleccionado,
        setUsuarioSeleccionado,
        handleFiltrarPorUsuario,
        handleLimpiar,
        diasFiltro,
        setDiasFiltro,
        handleFiltrarPorDias,
    };
}
export default usePanelComercios;