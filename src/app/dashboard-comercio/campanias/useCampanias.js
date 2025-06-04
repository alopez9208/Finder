'use client'

import { useState, useEffect, useRef, useCallback } from "react";
import { useModalCloseEvents } from "@/app/hooks/useModalCloseEvents";
import { useComercioSeleccionado } from "@/app/hooks/useComercioSeleccionado";
import { formatDateForInput, parseDate, formatFecha } from "@/app/utils/dateUtils";
import { formatearNumero } from "@/app/utils/numberUtils";
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
    const comercioSeleccionado = useComercioSeleccionado();
    const modalRef = useRef();    
    const hasFetchedRef = useRef(false);    

    useModalCloseEvents({ modalOpen, setModalOpen, modalRef }); 
      
    useEffect(() => {
        if (comercioSeleccionado && !hasFetchedRef.current) {
          fetchCampanias(comercioSeleccionado);
          fetchComercios();
          hasFetchedRef.current = true;
        }
      }, [comercioSeleccionado]);
   

    const fetchCampanias = async (comercioId) => {        

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

    const openModalForEdit = (campania) => {
        setEditingcampania(campania);
        setNombre(campania.nombre);
        setPresupuesto_gastado(campania.presupuesto_gastado);
        setFecha_inicio(formatDateForInput(campania.fecha_inicio));
        setFecha_fin(formatDateForInput(campania.fecha_fin));
        setModalOpen(true);
    };     

    const handleSubmit = async () => {
        const comercioId = comercioSeleccionado;

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
        
        if (new Date(localFechaInicio) > new Date(localFechaFin)) {
            alert("La fecha de inicio no puede ser posterior a la fecha de fin.");
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
            fetchCampanias(comercioSeleccionado);
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
        formatearNumero,
        hasFetchedRef,
        comercioSeleccionado,
    };
};

export default useCampanias;
