'use client'

import { useState, useEffect, useRef } from "react";
import { useModalCloseEvents } from "@/app/hooks/useModalCloseEvents";
import { useRelacionSeleccionada } from "@/app/hooks/useRelacionSeleccionada";
import { formatFecha } from "@/app/utils/dateUtils";
import { formatearNumero } from "@/app/utils/numberUtils";
import { TbArrowsSort } from "react-icons/tb";

const useCampanias = () => {

  const [searchNombre, setsearchNombre] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const campaniasPerPage = 10;
  const [campanias, setCampanias] = useState([]); 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [modalOpen, setModalOpen] = useState(false);
  const [editingcampania, setEditingcampania] = useState(null);
  const [nombre, setNombre] = useState("");
  const [presupuesto_gastado, setPresupuesto_gastado] = useState("");
  const [fecha_inicio, setFecha_inicio] = useState("");
  const [fecha_fin, setFecha_fin] = useState("");
  const [selectedcomercio, setSelectedcomercio] = useState("");
  const relacionSeleccionada = useRelacionSeleccionada();
  const modalRef = useRef();
  const hasFetchedRef = useRef(false);

  useModalCloseEvents({ modalOpen, setModalOpen, modalRef });

  useEffect(() => {
    if (relacionSeleccionada && !hasFetchedRef.current) {
      fetchCampanias(relacionSeleccionada);
      hasFetchedRef.current = true;
    }
  }, [relacionSeleccionada]);


  const fetchCampanias = async () => {
    if (!relacionSeleccionada) return;

    try {
      const res = await fetch(`/api/dashboard-comercio/campanias?comercioId=${relacionSeleccionada.pkidRelacion}`, {
        headers: {
          "x-comercio-id": relacionSeleccionada.pkidRelacion.toString(),
        },
      });
      const data = await res.json();
      if (data.success) {
        setCampanias(data.campanias);
      } else {
        console.error("No se encontraron campanias:", data.error);
      }
    } catch (error) {
      console.error("Error al obtener campanias:", error);
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
    setFecha_inicio(formatFecha(campania.fecha_inicio));
    setFecha_fin(formatFecha(campania.fecha_fin));
    setModalOpen(true);
  };

  const handleSubmit = async () => {   

    if (!nombre.trim() || !presupuesto_gastado || !fecha_inicio.trim() || !fecha_fin.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const localFechaInicio = fecha_inicio;
    const localFechaFin = fecha_fin;

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
      fkid_tbl_comercios_usuarios: relacionSeleccionada.pkidRelacion,
    }

    try {
      const response = await fetch("/api/dashboard-comercio/campanias", {
        method: editingcampania ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          "x-comercio-id": relacionSeleccionada.pkidRelacion.toString(),
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
    formatFecha,
    modalRef,
    formatearNumero,
    hasFetchedRef,
    relacionSeleccionada,
  };
};

export default useCampanias;