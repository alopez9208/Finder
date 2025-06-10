'use client'

import { useState, useEffect, useRef, useContext } from "react";
import { useModalCloseEvents } from "@/app/hooks/useModalCloseEvents";
import { useRelacionSeleccionada } from "@/app/hooks/useRelacionSeleccionada";
import { TbArrowsSort } from "react-icons/tb";   

const useClientes = () => {
  
  const [searchTelefono, setsearchTelefono] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const clientesPerPage = 20;
  const [clientes, setClientes] = useState([]);
  const [municipios, setMunicipios] = useState([]);
  const [comercios, setComercios] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const [modalOpen, setModalOpen] = useState(false);
  const [editingCliente, setEditingCliente] = useState(null);
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [selectedMunicipio, setSelectedMunicipio] = useState("");
  const [selectedComercio, setSelectedComercio] = useState("");
  const modalRef = useRef();
  const relacionSeleccionada = useRelacionSeleccionada();
  const hasFetchedRef = useRef(false);

  useModalCloseEvents({ modalOpen, setModalOpen, modalRef });

  useEffect(() => {
    if (relacionSeleccionada && !hasFetchedRef.current) {
      fetchClientes();     
      hasFetchedRef.current = true;
    }
  }, [relacionSeleccionada]);    

  useEffect(() => {
    fetchMunicipios();
  }, []);

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

  const fetchMunicipios = async () => {
    try {
      const res = await fetch("/api/dashboard/municipios");
      const data = await res.json();
      if (data.success) {
        setMunicipios(data.municipios);
      } else {
        console.error("No se encontraron municipios");
      }
    } catch (error) {
      console.error("Error al obtener municipios:", error);
    }
  };  

  const openModalForNew = () => {
    setEditingCliente(null);
    setTelefono("");
    setNombres("");
    setApellidos("");
    setCorreo("");
    setDireccion("");
    setSelectedMunicipio("");
    setModalOpen(true);
  };

  const openModalForEdit = (cliente) => {
    setEditingCliente(cliente);
    setTelefono(cliente.telefono);
    setNombres(cliente.nombres);
    setApellidos(cliente.apellidos);
    setCorreo(cliente.correo);
    setDireccion(cliente.direccion);
    setSelectedMunicipio(cliente.fkid_tbl_municipios);
    setModalOpen(true);
  };

  const handleSubmit = async () => {      
  
    if (!selectedMunicipio) {
      alert("Por favor selecciona un municipio.");
      return;
    }
  
    if (!telefono.trim() || !nombres.trim() || !apellidos.trim() || !correo.trim() || !direccion.trim() || !selectedMunicipio) {
      alert("Por favor, completa todos los campos.");
      return;
    }
  
    const clienteData = {
      telefono,
      nombres,
      apellidos,
      correo,
      direccion,
      fkid_tbl_municipios: selectedMunicipio,
      fkid_tbl_comercios_usuarios: relacionSeleccionada.pkidRelacion,
    };
  
    try {
      const response = await fetch("/api/dashboard-comercio/clientes", {
        method: editingCliente ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
          "x-comercio-id": relacionSeleccionada.pkidRelacion.toString(),
        },
        body: JSON.stringify(editingCliente ? { ...clienteData, pkid: editingCliente.pkid } : clienteData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Error al guardar el cliente");
      }
  
      setModalOpen(false);
      fetchClientes();
    } catch (error) {
      console.error("Error:", error.message);
    }
  };  

  const filteredClientes = clientes
    .filter((cliente) => {
      const telefono = cliente.telefono?.toLowerCase() || '';
      const matchTel = telefono.includes(searchTelefono.toLowerCase());
      return matchTel;
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

  const totalPages = Math.ceil(filteredClientes.length / clientesPerPage);
  const startIndex = (currentPage - 1) * clientesPerPage;
  const visibleClientes = filteredClientes.slice(startIndex, startIndex + clientesPerPage);

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
    clientesPerPage,
    clientes,
    municipios,
    comercios,
    sortConfig,
    setSortConfig,
    modalOpen,
    setModalOpen,
    editingCliente,
    setEditingCliente,
    nombres,
    setNombres,
    apellidos,
    setApellidos,
    correo,
    setCorreo,
    telefono,
    setTelefono,
    direccion,
    setDireccion,
    selectedMunicipio,
    setSelectedMunicipio,
    handleSubmit,
    openModalForNew,
    openModalForEdit,
    handleSort,
    renderSortIcon,
    handlePageChange,
    totalPages,
    visibleClientes,
    fetchClientes,
    fetchMunicipios,   
    modalRef,
    selectedComercio,
    setSelectedComercio,
    hasFetchedRef,
  };
};
export default useClientes;