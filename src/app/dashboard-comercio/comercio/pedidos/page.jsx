'use client'

import usePedidos from "./usePedidos";
import { FaEdit, FaPlus, FaEye, FaDollarSign } from "react-icons/fa";
import Pagination from "@/app/components/pagination";

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
    guia,
    setGuia,
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
    comercioSeleccionado,
    viewPedido,
    viewCosto,
    formatearNumero,
    handleFileUpload,
    hasFetchedRef,
    useModalCloseEvents,
    contarDiasDesde,
  } = usePedidos();

  return (
    <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 w-full">
      <div className="bg-white p-6 rounded-2xl min-h-full">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            className="w-full max-w-md pl-4 pr-4 py-2 border border-gray-300 rounded focus:outline-none text-gray-800"
            placeholder="Buscar por Telefono"
            value={searchTelefono}
            onChange={(e) => setsearchTelefono(e.target.value)}
          />
          <div className="flex items-center gap-2">
            <label
              htmlFor="upload"
              className="bg-[#3E82FF] text-white px-4 py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer"
            >
              Importar XLSX
            </label>
            <input
              id="upload"
              type="file"
              accept=".xlsx"
              onChange={handleFileUpload}
              className="hidden"
            />
            <button
              onClick={openModalForNew}
              className="flex items-center space-x-2 bg-[#3E82FF] text-white px-4 py-2 rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer"
            >
              <span>Nuevo Pedido</span>
            </button>
          </div>

        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-gray-800">
            <thead className="bg-gray-100">
              <tr>
                {[{ key: "pkid", label: "ID" }, { key: "guia", label: "Guía" }, { key: "fecha_creacion", label: "Fecha" }, { key: "clientes.nombres", label: "Cliente" }, { key: "clientes.telefono", label: "Telefono Cliente" }, { key: "municipios.nombre", label: "Ciudad Destino" }, { key: "valor_total", label: "Recaudo" },
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
              {visiblepedidos.map((pedidos, index) => {
                const diasDesdeCreacion = contarDiasDesde(pedidos.fecha_creacion);
                const desactivarEditar = diasDesdeCreacion > 7;

                return (
                  <tr key={index} className="border-b">
                    <td className="p-3">{pedidos.pkid}</td>
                    <td className="p-3">{pedidos.guia}</td>
                    <td className="p-3">{formatFecha(pedidos.fecha_creacion)}</td>
                    <td className="p-3">{pedidos.clientes.nombres} {pedidos.clientes.apellidos}</td>
                    <td className="p-3">{pedidos.clientes.telefono}</td>
                    <td className="p-3">{pedidos.municipios.nombre} </td>
                    <td className="p-3">$ {formatearNumero(pedidos.valor_total)}</td>
                    <td className="flex justify-end gap-2 p-3 text-right">
                      <button
                        onClick={() => openModalForEdit(pedidos)}
                        disabled={desactivarEditar}
                        className={`px-3 py-2 rounded-lg inline-flex items-center space-x-2 ${desactivarEditar
                          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-400 text-white cursor-pointer"
                          }`}
                      >
                        <FaEdit />
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
                );
              })}
            </tbody>

          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={modalRef}
            className="bg-[#f0ebff] p-6 rounded-xl shadow-xl w-full max-w-4xl relative text-gray-700 border"
          >
            {modalMode === "view" ? (
              // MODO VIEW (Factura)
              <div className="text-sm text-gray-800 ml-12 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Factura del Pedido <span className="text-xl">#{guia}</span>
                </h2>
                <div className="border-t pt-4">
                  <p className="font-semibold text-lg mb-2">Datos del cliente</p>
                  <p>
                    <strong>Nombre:</strong>{" "}
                    {clientes.find((c) => c.pkid === selectedCliente)?.nombres || "N/A"}{" "}
                    {clientes.find((c) => c.pkid === selectedCliente)?.apellidos || "N/A"}
                  </p>
                  <p>
                    <strong>Teléfono:</strong>{" "}
                    {clientes.find((c) => c.pkid === selectedCliente)?.telefono || "N/A"}
                  </p>
                  <p>
                    <strong>Dirección:</strong>{" "}
                    {clientes.find((c) => c.pkid === selectedCliente)?.direccion || "N/A"}
                  </p>
                  <p>
                    <strong>Municipio:</strong>{" "}
                    {municipios.find((m) => m.pkid === selectedMunicipio)?.nombre || "N/A"}
                  </p>
                </div>
                <div className="border-t mt-4 pt-4">
                  <p className="font-semibold text-lg mb-2">Datos de la transportadora</p>
                  <p>
                    <strong>Transportadora:</strong>{" "}
                    {transportadoras.find((t) => t.pkid === selectedTransportadora)?.nombre || "N/A"}
                  </p>
                  <p>
                    <strong>Valor Flete:</strong> ${formatearNumero(valor_flete)}
                  </p>
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
                            <td className="px-4 py-2 border">${formatearNumero(item.precio_unitario)}</td>
                            <td className="px-4 py-2 border">
                              ${formatearNumero(item.precio_unitario * item.cantidad)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No hay productos en este pedido.</p>
                  )}
                </div>

                <div className="mt-4 pt-4 text-2xl">
                  <p>
                    <strong>Recaudo:</strong> ${formatearNumero(valor_total)}
                  </p>
                </div>
                <div className="mt-4 pt-4">
                  <p>
                    <strong>Fecha de creación:</strong> {fecha_creacion?.substring(0, 10)}
                  </p>
                </div>
              </div>
            ) : modalMode === "costo" ? (
              // MODO COSTO
              <div className="text-sm text-gray-800 ml-12 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Costos del Pedido <span className="text-xl">#{guia}</span>
                </h2>

                <div className="mt-4 border-t pt-4">
                  <h4 className="font-semibold text-lg mb-2">Productos</h4>
                  {productosSeleccionados.length > 0 ? (
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-4 py-2 border">Descripción</th>
                          <th className="px-4 py-2 border">Unid</th>
                          <th className="px-4 py-2 border">Costo c/u</th>
                          <th className="px-4 py-2 border">Importe</th>
                          <th className="px-4 py-2 border">Proveedor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productosSeleccionados.map((item) => (
                          <tr key={item.pkid} className="text-center">
                            <td className="px-4 py-2 border">{item.nombre}</td>
                            <td className="px-4 py-2 border">{item.cantidad}x</td>
                            <td className="px-4 py-2 border">${formatearNumero(item.costo_unitario)}</td>
                            <td className="px-4 py-2 border">
                              ${formatearNumero(item.costo_unitario * item.cantidad)}
                            </td>
                            <td className="px-4 py-2 border">{item.empresa}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No hay productos en este pedido.</p>
                  )}
                </div>

                <div className="mt-4 pt-4 text-2xl">
                  <p>
                    <strong>Costo Total:</strong> $
                    {formatearNumero(
                      productosSeleccionados.reduce(
                        (acc, item) => acc + item.costo_unitario * item.cantidad,
                        0
                      )
                    )}
                  </p>
                </div>
              </div>
            ) : (
              // MODO NEW / EDIT
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-1/2 lg:pr-4">
                  <h3 className="text-xl font-semibold mb-4">
                    {modalMode === "edit" ? "Editar Pedido" : "Nuevo Pedido"}
                  </h3>

                  <label className="block mb-1 font-semibold text-gray-700 text-sm">Guía:</label>
                  <input
                    type="text"
                    placeholder="Guía"
                    className="w-full mb-4 px-4 py-2 border rounded focus:outline-none bg-white"
                    value={guia}
                    onChange={(e) => setGuia(e.target.value)}
                  />

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
                        className="flex-grow px-4 py-2 border rounded focus:outline-none bg-white w-full"
                      >
                        <option value="">Seleccione un Producto</option>
                        {productosDisponibles
                          .filter((p) =>
                            p.nombre.toLowerCase().includes(searchProducto.toLowerCase())
                          )
                          .map((prod) => (
                            <option key={prod.pkid} value={prod.pkid}>
                              {prod.nombre}
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
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer"
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
                              <td className="py-1">$ {formatearNumero(item.precio_unitario)}</td>

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

              {modalMode !== "view" && modalMode !== "costo" && (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer"
                >
                  Guardar
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}




