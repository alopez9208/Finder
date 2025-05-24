'use client'

import { useState, useEffect, useRef } from "react";
import { TbArrowsSort } from "react-icons/tb";

const useCampanias = () => {

    const [searchNombre, setsearchNombre] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const campaniasPerPage = 5;
    const [campanias, setCampanias] = useState([]);
    const [comercios, setComercios] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const [modalOpen, setModalOpen] = useState(false);
    const [editingcampania, setEditingcampania] = useState(null);
    const [nombre, setNombre] = useState("");
    const [presupuesto_gastado, setPresupuesto_gastado] = useState("");
    const [fecha_inicio, setFecha_inicio] = useState("");
    const [fecha_fin, setFecha_fin] = useState("");
    const [selectedcomercio, setSelectedcomercio] = useState("");
    const modalRef = useRef();

    useEffect(() => {
        fetchCampanias();
        fetchComercios();

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

    // Obtener comercioSeleccionado de localStorage
    const getComercioSeleccionado = () => {
        // Si en localStorage tienes "comercioSeleccionado" guardado como string, úsalo así:
        const comercioSeleccionado = localStorage.getItem("comercioSeleccionado");
        console.log("comercioSeleccionado desde localStorage:", comercioSeleccionado);
        return comercioSeleccionado;
    };

    const fetchCampanias = async () => {
        const comercioId = getComercioSeleccionado();

        if (!comercioId) {
            console.warn("No se encontró 'comercioSeleccionado' en localStorage.");
            return;
        }

        try {
            const res = await fetch("/api/dashboard-comercio/campanias", {
                headers: {
                    "x-comercio-id": comercioId,
                },
            });

            const data = await res.json();
            console.log("Respuesta del backend:", data);

            if (data.success) {
                setCampanias(data.campanias);
                console.log("Campania recibidos:", data.campanias);
            } else {
                console.error("No se encontraron campanias:", data.error);
            }
        } catch (error) {
            console.error("Error al obtener campanias:", error);
        }
    };

    const fetchComercios = async () => {
        const usuario = JSON.parse(localStorage.getItem("usuario"));
        const usuarioId = usuario?.pkusuario;

        if (!usuarioId) {
            console.warn("No se encontró el ID de usuario en localStorage.");
            return;
        }

        try {
            const res = await fetch("/api/dashboard-comercio/comercios", {
                headers: {
                    "x-usuario-id": usuarioId.toString(),
                },
            });

            const data = await res.json();
            console.log("Respuesta del backend:", data);

            if (data.success) {
                setComercios(data.comercios);
                console.log("Comercios recibidos:", data.comercios);
            } else {
                console.error("No se encontraron comercios");
            }
        } catch (error) {
            console.error("Error al obtener comercios:", error);
        }
    };

    const openModalForNew = () => {
        setEditingcampania(null);
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

    const openModalForEdit = (campania) => {
        setEditingcampania(campania);
        setNombre(campania.nombre);
        setPresupuesto_gastado(campania.presupuesto_gastado);
        setFecha_inicio(formatDateForInput(campania.fecha_inicio));
        setFecha_fin(formatDateForInput(campania.fecha_fin));
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
        const comercioId = getComercioSeleccionado();

        console.log("comercioId: ", comercioId)

        if (!comercioId) {
            alert("No se encontró el comercio. Por favor inicia sesión nuevamente.");
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

        const comercioData = {
            nombre,
            presupuesto_gastado: parseFloat(presupuesto_gastado),
            fecha_inicio: localFechaInicio,
            fecha_fin: localFechaFin,
            fkid_tbl_comercios: (comercioId),
        }

        console.log("comercioData: ", comercioData)

        try {
            const response = await fetch("/api/dashboard-comercio/campanias", {
                method: editingcampania ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(editingcampania ? { ...comercioData, pkid: editingcampania.pkid } : comercioData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Error al guardar la campaña");
            }

            setModalOpen(false);
            fetchCampanias();
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    const filteredcampanias = campanias

        .filter((campania) => {
            const nomen = campania.nombre?.toLowerCase() || '';
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

    const totalPages = Math.ceil(filteredcampanias.length / campaniasPerPage);
    const startIndex = (currentPage - 1) * campaniasPerPage;
    const visiblecampanias = filteredcampanias.slice(startIndex, startIndex + campaniasPerPage);

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
        campaniasPerPage,
        campanias,
        comercios,
        sortConfig,
        setSortConfig,
        modalOpen,
        setModalOpen,
        editingcampania,
        setEditingcampania,
        nombre,
        setNombre,
        presupuesto_gastado,
        setPresupuesto_gastado,
        fecha_inicio,
        setFecha_inicio,
        fecha_fin,
        setFecha_fin,
        selectedcomercio,
        setSelectedcomercio,
        handleSubmit,
        openModalForNew,
        openModalForEdit,
        handleSort,
        renderSortIcon,
        handlePageChange,
        totalPages,
        visiblecampanias,
        fetchCampanias,
        fetchComercios,
        formatFecha,
        modalRef,
    };
};

export default useCampanias;
