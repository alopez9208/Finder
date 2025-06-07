"use client";

import useProductos from "./useProductos";
import { FaEye } from "react-icons/fa";

export default function ProductsPage() {
    const {
        searchNombre,
        setsearchNombre,
        searchEmpresa,
        setsearchEmpresa,
        currentPage,
        setCurrentPage,
        productos,
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
        handleSort,
        renderSortIcon,
        handlePageChange,
        totalPages,
        visibleProductos,
        openModalForView,
        modalRef,
        selectedEmpresa,
        nombre_empresa,
        setNombre_empresa,
        empresas,
        formatearNumero,
    } = useProductos();

    return (
        <div className="h-[calc(100vh-130px)] overflow-y-auto pr-2 w-full">
            {/* Buscadores */}
            <div className="bg-white p-6 rounded-2xl">
                <div className="mb-4 flex space-x-4">
                    <div className="relative mb-4">
                        <input
                            type="text"
                            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder: text-gray-800"
                            placeholder="Buscar por Nombre"
                            value={searchNombre}
                            onChange={(e) => setsearchNombre(e.target.value)}
                        />
                    </div>
                    <div className="relative mb-4">
                        <input
                            type="text"
                            className="w-full pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none placeholder: text-gray-800"
                            placeholder="Buscar por Empresa"
                            value={searchEmpresa}
                            onChange={(e) => setsearchEmpresa(e.target.value)}
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto text-gray-800">
                        <thead className="bg-gray-100">
                            <tr>
                                {[{ key: "pkid", label: "ID" }, { key: "nombre", label: "Nombre" }, { key: "costo", label: "Costo" }, { key: "valor", label: "Valor" }, { key: "nombre_empresa", label: "Empresa" }
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
                            {visibleProductos.map((producto, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-3">{producto.pkid}</td>
                                    <td className="p-3">{producto.nombre}</td>
                                    <td className="p-3">{formatearNumero(producto.costo)}</td>
                                    <td className="p-3">{formatearNumero(producto.valor)}</td>
                                    <td className="p-3">{producto.nombre_empresa}</td>
                                    <td className="p-3 text-right">
                                        <button
                                            onClick={() => openModalForView(producto)}
                                            className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                                        >
                                            <FaEye />
                                            <span>Ver</span>
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
                            disabled={currentPage === 1}
                            className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white"
                        >
                            Anterior
                        </button>

                        {currentPage > 3 && (
                            <>
                                <button
                                    onClick={() => handlePageChange(1)}
                                    className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white"
                                >
                                    1
                                </button>
                                {currentPage > 4 && <span className="px-3 py-1">...</span>}
                            </>
                        )}

                        {Array.from({ length: 5 }, (_, i) => {
                            const page = currentPage - 2 + i;
                            return page > 0 && page <= totalPages ? (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white ${currentPage === page ? "bg-blue-500 text-white" : ""
                                        }`}
                                >
                                    {page}
                                </button>
                            ) : null;
                        })}

                        {currentPage < totalPages - 3 && (
                            <>
                                <span className="px-3 py-1">...</span>
                                <button
                                    onClick={() => handlePageChange(totalPages)}
                                    className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white"
                                >
                                    {totalPages}
                                </button>
                            </>
                        )}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 hover:text-white"
                        >
                            Siguiente
                        </button>
                    </div>
                )}
            </div>

            {/* Modal de Ver */}
            {modalOpen && (
                <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
                    <div ref={modalRef} className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-md relative text-gray-700 border">
                        <h3 className="text-xl font-semibold mb-4">
                            {viewProducto ? "Producto" : "Nuevo Producto"}
                        </h3>
                        <label className="block mb-1 font-semibold text-gray-700 text-sm">Nombre:</label>
                        <input
                            type="text"                           
                            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                            value={nombre}
                            readOnly
                        />
                        <label className="block mb-1 font-semibold text-gray-700 text-sm">Costo:</label>
                        <input
                            type="text"                           
                            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                            value={costo}
                            readOnly
                        />
                        <label className="block mb-1 font-semibold text-gray-700 text-sm">Valor:</label>
                        <input
                            type="text"                            
                            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                            value={valor}
                            readOnly
                        />
                        <label className="block mb-1 font-semibold text-gray-700 text-sm">Empresa:</label>
                        <input
                            type="text"                            
                            className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                            value={nombre_empresa}
                            readOnly
                        />

                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                            >
                                Volver
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
