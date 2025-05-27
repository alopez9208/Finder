'use client'

import usePedidos from "./usePedidos";
import { FaEdit, FaPlus, FaEye, FaDollarSign } from "react-icons/fa";

export default function PedidosPage() {

  const {
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
    modalRef,
    modalOpen,
    editingPedido,
    pkid_pedido,
    setPKID_pedido,
    setValor_total,
    setValor_flete,
    valor_total,
    valor_flete,
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
    openModalForView,
    openModalForViewCosto,
    setModalOpen,
    modalMode,
    handleSubmit,
    setError,
    error,
    setSuccess,
    success,
    formatFecha,
    municipios,
    selectedMunicipio,
    setSelectedMunicipio,
    getComercioSeleccionado,
    viewPedido,
    viewCosto,
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
                {[{ key: "pkid", label: "ID" }, { key: "clientes.telefono", label: "Telefono" }, { key: "fecha_creacion", label: "Fecha de Creación" }, { key: "transportadoras.nombre", label: "Transportadora" }, { key: "municipios.nombre", label: "Municipio" }, { key: "valor_total", label: "Recaudo" }, { key: "valor_flete", label: "Valor Flete" },
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
                  <td className="p-3">{pedidos.transportadoras.nombre}</td>
                  <td className="p-3">{pedidos.municipios.nombre}</td>
                  <td className="p-3">{pedidos.valor_total}</td>
                  <td className="p-3">{pedidos.valor_flete}</td>
                  <td className="flex justify-end gap-2 p-3 text-right">
                    <button
                      onClick={() => openModalForEdit(pedidos)}
                      className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <FaEdit />
                      <span>Editar</span>
                    </button>
                    <button
                      onClick={() => openModalForView(pedidos)}
                      className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => openModalForViewCosto(pedidos)}
                      className="bg-green-500 hover:bg-green-400 text-white px-3 py-2 rounded-lg inline-flex items-center space-x-2 cursor-pointer"
                    >
                      <FaDollarSign />
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

            {currentPage > 3 && (
              <button
                onClick={() => handlePageChange(1)}
                className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
              >
                1
              </button>
            )}

            {currentPage > 4 && <span className="px-3 py-1">...</span>}

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
              return null;
            })}

            {currentPage < totalPages - 3 && <span className="px-3 py-1">...</span>}

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
          <div
            ref={modalRef}
            className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-4xl relative text-gray-700 border"
          >
            {modalMode === "view" ? (
              // MODO FACTURA
              <div className="text-sm text-gray-800 ml-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Factura del Pedido  <span className="text-xl"># {pkid_pedido}</span></h2>
                <div className="border-t pt-4">
                  <p className="font-semibold text-lg mb-2">Datos del cliente</p>
                  <p><strong>Nombre:</strong> {clientes.find(c => c.pkid === selectedCliente)?.nombres || "N/A"} {clientes.find(c => c.pkid === selectedCliente)?.apellidos || "N/A"}</p>
                  <p><strong>Teléfono:</strong> {clientes.find(c => c.pkid === selectedCliente)?.telefono || "N/A"}</p>
                  <p><strong>Dirección:</strong> {clientes.find(c => c.pkid === selectedCliente)?.direccion || "N/A"}</p>
                  <p><strong>Municipio:</strong> {municipios.find(m => m.pkid === selectedMunicipio)?.nombre || "N/A"}</p>
                </div>
                <div className="border-t mt-4 pt-4">
                  <p className="font-semibold text-lg mb-2">Datos de la transportadora</p>
                  <p><strong>Transportadora:</strong> {transportadoras.find(t => t.pkid === selectedTransportadora)?.nombre || "N/A"}</p>
                  <p><strong>Valor Flete:</strong> ${valor_flete}</p>
                </div>

                <div className="mt-4 border-t pt-4">
                  <h4 className="font-semibold text-lg mb-2">Productos</h4>
                  {productosSeleccionados.length > 0 ? (
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 border">Descripción</th>
                          <th className="px-4 py-2 border">Unid</th>
                          <th className="px-4 py-2 border">Precio c/u</th>
                          <th className="px-4 py-2 border">Importe</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productosSeleccionados.map((item) => (
                          <tr key={item.pkid} className="text-center">
                            <td className="px-4 py-2 border">{item.nombre}</td>
                            <td className="px-4 py-2 border">{item.cantidad}x</td>
                            <td className="px-4 py-2 border">${item.precio_unitario}</td>
                            <td className="px-4 py-2 border">${item.precio_unitario * item.cantidad}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                  ) : (
                    <p>No hay productos en este pedido.</p>
                  )}
                </div>
                <div className="mt-4 pt-4 text-2xl">
                  <p><strong>Recaudo:</strong> ${valor_total}</p>
                </div>
                <div className="mt-4 pt-4">
                  <p><strong>Fecha de creación:</strong> {fecha_creacion?.substring(0, 10)}</p>
                </div>
              </div>
            ) : (
              // MODO NEW / EDIT
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 lg:pr-4">
                  <h3 className="text-xl font-semibold mb-4">
                    {modalMode === "edit" ? "Editar Pedido" : "Nuevo Pedido"}
                  </h3>

                  <label className="block mb-1 font-semibold text-gray-700 text-sm">Recaudo:</label>
                  <input
                    type="number"
                    placeholder="Recaudo"
                    className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                    value={valor_total}
                    onChange={(e) => setValor_total(e.target.value)}
                  />

                  <label className="block mb-1 font-semibold text-gray-700 text-sm">Valor Flete:</label>
                  <input
                    type="number"
                    placeholder="Valor Flete"
                    className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                    value={valor_flete}
                    onChange={(e) => setValor_flete(e.target.value)}
                  />

                  <label className="block mb-1 font-semibold text-gray-700 text-sm">Fecha de Creación:</label>
                  <input
                    type="date"
                    className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                    value={fecha_creacion ? fecha_creacion.substring(0, 10) : ""}
                    onChange={(e) => setFecha_creacion(e.target.value)}
                  />

                  <label className="block mb-1 font-semibold text-gray-700 text-sm">Cliente:</label>
                  <select
                    value={selectedCliente}
                    onChange={(e) => setSelectedCliente(e.target.value)}
                    className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                  >
                    <option value="">Seleccione un Cliente</option>
                    {clientes.map((cliente) => (
                      <option key={cliente.pkid} value={cliente.pkid}>
                        {cliente.telefono}
                      </option>
                    ))}
                  </select>

                  <label className="block mb-1 font-semibold text-gray-700 text-sm">Transportadora:</label>
                  <select
                    value={selectedTransportadora}
                    onChange={(e) => setSelectedTransportadora(e.target.value)}
                    className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                  >
                    <option value="">Seleccione una Transportadora</option>
                    {transportadoras.map((transportadora) => (
                      <option key={transportadora.pkid} value={transportadora.pkid}>
                        {transportadora.nombre}
                      </option>
                    ))}
                  </select>

                  <label className="block mb-1 font-semibold text-gray-700 text-sm">Municipio:</label>
                  <select
                    value={selectedMunicipio}
                    onChange={(e) => setSelectedMunicipio(e.target.value)}
                    className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                  >
                    <option value="">Seleccione un Municipio</option>
                    {municipios.map((municipio) => (
                      <option key={municipio.pkid} value={municipio.pkid}>
                        {municipio.nombre}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Derecha: Productos */}
                <div className="w-full lg:w-1/2">
                  <h4 className="text-lg font-semibold mb-3">Productos del Pedido</h4>

                  <div className="mb-4">
                    <label className="block mb-1 font-semibold text-gray-700 text-sm">Producto:</label>
                    <div className="flex space-x-2 mb-2">
                      <select
                        id="searchProduct"
                        value={selectedProductToAdd ? selectedProductToAdd.pkid : ""}
                        onChange={(e) => {
                          const product = productosDisponibles.find(
                            (p) => p.pkid.toString() === e.target.value
                          );
                          setSelectedProductToAdd(product);
                        }}
                        className="flex-grow px-4 py-2 border rounded focus:outline-none bg-white"
                      >
                        <option value="">Seleccione un Producto</option>
                        {productosDisponibles
                          .filter((p) =>
                            p.nombre.toLowerCase().includes(searchProducto.toLowerCase())
                          )
                          .map((prod) => (
                            <option key={prod.pkid} value={prod.pkid}>
                              {prod.nombre} - ${prod.precio_base}
                            </option>
                          ))}
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
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Añadir
                      </button>
                    </div>

                    <input
                      type="text"
                      placeholder="Filtrar por nombre de producto"
                      value={searchProducto}
                      onChange={(e) => setSearchProducto(e.target.value)}
                      className="w-full px-4 py-2 border rounded bg-white mb-2"
                    />
                  </div>

                  {productosSeleccionados.length > 0 ? (
                    <div className="mb-4 border rounded p-3 bg-white">
                      <h5 className="block mb-1 font-semibold text-gray-700 text-lg">Detalles del Pedido:</h5>
                      <table className="w-full table-auto text-sm">
                        <thead>
                          <tr className="text-left border-b font-medium text-gray-700">
                            <th className="py-1">Descripción</th>
                            <th className="py-1">Unid</th>
                            <th className="py-1">Precio c/u</th>
                            <th className="py-1"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {productosSeleccionados.map((item) => (
                            <tr key={item.pkid} className="border-b last:border-b-0">

                              <td className="py-1">{item.nombre}</td>
                              <td className="py-1">{item.cantidad}x</td>
                              <td className="py-1">${item.precio_unitario}</td>

                              <td className="py-1 text-right">
                                <button
                                  onClick={() => removeProductFromCart(item.pkid)}
                                  className="text-red-500 hover:text-red-700 text-sm cursor-pointer"
                                >
                                  X
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                  ) : (
                    <p className="text-gray-500 mb-4">No hay productos añadidos.</p>
                  )}
                </div>
              </div>
            )
            }

            {/* BOTONES FOOTER */}
            <div className="flex justify-end space-x-2 mt-6">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
              >
                {modalMode === "view" ? "Cerrar" : "Cancelar"}
              </button>
              {modalMode !== "view" && (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                >
                  {modalMode === "view" ? "Cerrar" : "Guardar"}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




