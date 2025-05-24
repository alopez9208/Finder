'use client'

import { useState, useEffect, useRef } from "react";
import { TbArrowsSort } from "react-icons/tb";

const useProductos = () => {

    const [searchNombre, setsearchNombre] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productosPerPage = 5;
    const [productos, setproductos] = useState([]);
    const [Empresas, setEmpresas] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const [modalOpen, setModalOpen] = useState(false);
    const [editingproducto, setEditingproducto] = useState(null);
    const [nombre, setNombre] = useState("");
    const [nomenclatura, setNomenclatura] = useState("");
    const [selectedEmpresa, setSelectedEmpresa] = useState("");
    const modalRef = useRef();

    useEffect(() => {
        fetchproductos();
        fetchEmpresas();

        const handleEsc = (e) => {
            if (e.key === "Escape") setModalOpen(false);
        };
        if (modalOpen) {
            window.addEventListener("keydown", handleEsc);
        }
        return () => window.removeEventListener("keydown", handleEsc);
    }, [modalOpen]);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setModalOpen(false);
        }
    };

    useEffect(() => {
        if (modalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modalOpen]);

    // Obtener Empresaseleccionado de localStorage
    const getEmpresaseleccionado = () => {
        // Si en localStorage tienes "Empresaseleccionado" guardado como string, úsalo así:
        const Empresaseleccionado = localStorage.getItem("Empresaseleccionado");
        console.log("Empresaseleccionado desde localStorage:", Empresaseleccionado);
        return Empresaseleccionado;
    };

    const fetchproductos = async () => {
        const EmpresaId = getEmpresaseleccionado();

        if (!EmpresaId) {
            console.warn("No se encontró 'Empresaseleccionado' en localStorage.");
            return;
        }

        try {
            const res = await fetch("/api/dashboard-Empresa/productos", {
                headers: {
                    "x-Empresa-id": EmpresaId,
                },
            });

            const data = await res.json();
            console.log("Respuesta del backend:", data);

            if (data.success) {
                setproductos(data.productos);
                console.log("producto recibidos:", data.productos);
            } else {
                console.error("No se encontraron productos:", data.error);
            }
        } catch (error) {
            console.error("Error al obtener productos:", error);
        }
    };

    const fetchEmpresas = async () => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        const usuarioId = usuario?.pkusuario;

        if (!usuarioId) {
            console.warn("No se encontró el ID de usuario en localStorage.");
            return;
        }

        try {
            const res = await fetch("/api/dashboard-Empresa/Empresas", {
                headers: {
                    "x-usuario-id": usuarioId.toString(),
                },
            });

            const data = await res.json();
            console.log("Respuesta del backend:", data);

            if (data.success) {
                setEmpresas(data.Empresas);
                console.log("Empresas recibidos:", data.Empresas);
            } else {
                console.error("No se encontraron Empresas");
            }
        } catch (error) {
            console.error("Error al obtener Empresas:", error);
        }
    };

    const openModalForNew = () => {
        setEditingproducto(null);
        setNombre("");
        setPresupuesto_gastado("");
        setFecha_inicio("");
        setFecha_fin("");
        setModalOpen(true);
    };

    const formatDateForInput = (isoString) => {
        if (!isoString) return "";
        const date = new Date(isoString);
        // Obtiene la fecha en formato YYYY-MM-DD en tu zona horaria local
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const openModalForEdit = (producto) => {
        setEditingproducto(producto);
        setNombre(producto.nombre);
        setPresupuesto_gastado(producto.presupuesto_gastado);
        setFecha_inicio(formatDateForInput(producto.fecha_inicio));
        setFecha_fin(formatDateForInput(producto.fecha_fin));
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

        // Si ya es objeto Date
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

    const handleSubmit = async () => {
        const EmpresaId = getEmpresaseleccionado();

        console.log("EmpresaId: ", EmpresaId)

        if (!EmpresaId) {
            alert("No se encontró el Empresa. Por favor inicia sesión nuevamente.");
            return;
        }

        if (!nombre.trim() || !presupuesto_gastado || !fecha_inicio.trim() || !fecha_fin.trim()) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        const localFechaInicio = parseDate(fecha_inicio, false);
        const localFechaFin = parseDate(fecha_fin, false);

        if (!localFechaInicio || !localFechaFin) {
            alert("Formato de fecha inválido.");
            return;
        }

        const EmpresaData = {
            nombre,
            presupuesto_gastado: parseFloat(presupuesto_gastado),
            fecha_inicio: localFechaInicio,
            fecha_fin: localFechaFin,
            fkid_tbl_Empresas: (EmpresaId),
        }

        console.log("EmpresaData: ", EmpresaData)

        try {
            const response = await fetch("/api/dashboard-Empresa/productos", {
                method: editingproducto ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editingproducto ? { ...EmpresaData, pkid: editingproducto.pkid } : EmpresaData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error al guardar la campaña");
            }

            setModalOpen(false);
            fetchproductos();
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const filteredproductos = productos

        .filter((producto) => {
            const nomen = producto.nombre?.toLowerCase() || '';
            const matchNomen = nomen.includes(searchNombre.toLowerCase());
            return matchNomen;
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

    const totalPages = Math.ceil(filteredproductos.length / productosPerPage);
    const startIndex = (currentPage - 1) * productosPerPage;
    const visibleproductos = filteredproductos.slice(startIndex, startIndex + productosPerPage);

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
        searchNombre,
        setsearchNombre,
        currentPage,
        setCurrentPage,
        productosPerPage,
        productos,
        Empresas,
        sortConfig,
        setSortConfig,
        modalOpen,
        setModalOpen,
        editingproducto,
        setEditingproducto,
        nombre,
        setNombre,
        presupuesto_gastado,
        setPresupuesto_gastado,
        fecha_inicio,
        setFecha_inicio,
        fecha_fin,
        setFecha_fin,
        selectedEmpresa,
        setSelectedEmpresa,
        handleSubmit,
        openModalForNew,
        openModalForEdit,
        handleSort,
        renderSortIcon,
        handlePageChange,
        totalPages,
        visibleproductos,
        fetchproductos,
        fetchEmpresas,
        formatFecha,
        modalRef,
    };
};

export default useproductos;
