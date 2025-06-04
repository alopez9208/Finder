'use client'

import { useState, useEffect, useRef } from "react";
import { TbArrowsSort } from "react-icons/tb";

const useProductos = () => {

    const [searchNombre, setsearchNombre] = useState("");
    const [searchEmpresa, setsearchEmpresa] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productosPerPage = 5;
    const [productos, setProductos] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

    const [modalOpen, setModalOpen] = useState(false);
    const [viewProducto, setViewProducto] = useState(null);

    const [nombre, setNombre] = useState("");
    const [costo, setCosto] = useState("");
    const [valor, setValor] = useState("");
    const [selectedEmpresa, setSelectedEmpresa] = useState("");   
    const [nombre_empresa, setNombre_empresa] = useState("");
    const hasFetchedRef = useRef(false);

    const modalRef = useRef();

    useEffect(() => {
        fetchProductos();
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


    const fetchProductos = async () => {
        try {
          const res = await fetch("/api/dashboard/products");
          const data = await res.json();
          if (data.success) {
            setProductos(data.products);
          } else {
            console.error("No se encontraron productos");
          }
        } catch (error) {
          console.error("Error al obtener productos:", error);
        }
      };
    
      const fetchEmpresas = async () => {
        try {
          const res = await fetch("/api/dashboard/empresas");
          const data = await res.json();
          if (data.success) {
            setEmpresas(data.empresas); // Guardar las empresas en el estado 
          } else {
            console.error("No se encontraron empresas");
          }
        } catch (error) {
          console.error("Error al obtener empresas:", error);
        }
      };

    const openModalForView = (producto) => {
        setViewProducto(producto);

        setNombre(producto.nombre);
        setCosto(producto.costo);
        setValor(producto.valor);
        setNombre_empresa(producto.nombre_empresa);
        setSelectedEmpresa(producto.fkid_tbl_Empresas);

        setModalOpen(true);
    };

    const filteredProductos = productos
    .filter((producto) => {
      const nombre = producto.nombre?.toLowerCase() || '';
      const empresa = producto.nombre_empresa?.toLowerCase() || '';
      const matchNombre = nombre.includes(searchNombre.toLowerCase());
      const matchEmpresa = empresa.includes(searchEmpresa.toLowerCase());
      return matchNombre && matchEmpresa;
    })
    .sort((a, b) => {
      if (!sortConfig.key) return 0;

      const aVal = a[sortConfig.key];
      const bVal = b[sortConfig.key];

      // Detectar si ambos valores son números
      const aNum = Number(aVal);
      const bNum = Number(bVal);

      if (!isNaN(aNum) && !isNaN(bNum)) {
        // Orden numérico
        return sortConfig.direction === "asc" ? aNum - bNum : bNum - aNum;
      }

      // Orden alfabético si no son números
      const aStr = aVal?.toString().toLowerCase() || '';
      const bStr = bVal?.toString().toLowerCase() || '';

      if (aStr < bStr) return sortConfig.direction === "asc" ? -1 : 1;
      if (aStr > bStr) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });


  const totalPages = Math.ceil(filteredProductos.length / productosPerPage);
  const startIndex = (currentPage - 1) * productosPerPage;
  const visibleProductos = filteredProductos.slice(startIndex, startIndex + productosPerPage);

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

  function formatearNumero(valor) {
    if (typeof valor !== 'number') valor = Number(valor);

    const formateado = valor.toLocaleString('de-DE');

    if (valor < 1000000) {
        return formateado;
    } else {
        return formateado.replace('.', "'");
    }
}
    return {
        searchNombre,
        setsearchNombre,
        searchEmpresa,
        setsearchEmpresa,
        currentPage,
        setCurrentPage,
        productosPerPage,
        productos,
        empresas,
        sortConfig,
        setSortConfig,
        modalOpen,
        setModalOpen,
        viewProducto,
        setViewProducto,
        nombre,
        setNombre,
        costo,
        setCosto,
        valor,
        setValor,        
        selectedEmpresa,
        setSelectedEmpresa,
        openModalForView,
        handleSort,
        renderSortIcon,
        handlePageChange,
        totalPages,
        visibleProductos,
        fetchProductos,
        fetchEmpresas,
        modalRef,
        nombre_empresa,
        setNombre_empresa,
        formatearNumero,
    };
};

export default useProductos;
