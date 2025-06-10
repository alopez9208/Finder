'use client'

import { FaCheckCircle } from 'react-icons/fa'
import useDashboardComercio from './useDashboardComercio'

export default function DashboardComercioPage() {

  const {
    nombre,
    pedidos,
    valor_total,
    valor_flete,
    fetchPedidos,
    loading,
    suma_total,
    suma_flete,
    formatearNumero,
    relacionSeleccionada,
    costoTotal,
    campanias,
    sumaPresupuestoGastado,
    cantidadPedidos,
    contador_servi,
    contador_inter,
    contador_envia,
    contador_swayp,
    fecha_inicio,
    fecha_fin,
    setFecha_inicio,
    setFecha_fin,
    fetchCostoTotal,
    fetchCampanias,

  } = useDashboardComercio()

  if (loading) {
    return <p>No autorizado...</p>;
  }

  return (
    <div className="h-[calc(100vh-200px)] overflow-y-auto pr-2 w-full">
      <div className="flex justify-between gap-10">
        {/* Columna izquierda */}
        <div className="w-2/3">
          <div className="bg-[#fff] p-6 h-40 w-full rounded-2xl flex items-center gap-8 mt-8 md:mt-16">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold text-gray-800">Hola, {nombre}</h2>
              <p className="text-gray-800 mt-1 text-xl">
                ¿Quieres organizar tus ideas?
              </p>
            </div>
            <img src="/women-illustration.png" alt="Ilustración" className="w-128 ml-auto" />
          </div>
          <h2 className=" mt-16 text-2xl font-semibold mb-4 text-gray-800">Ventas del mes</h2>
          <div className="flex justify-between items-center mb-6">
            <div className="bg-[#F2CC5B] text-white p-4 rounded-xl flex justify-between items-center mb-6 mr-4 w-1/3">
              <div><img src="/logo-transito.png" alt="" className="w-30 h-30" /></div>
              <div className="flex flex-col items-center mr-6">
                <p className="text-4xl font-semibold mb-2">0</p>
                <p className="text-lg text-white/80">En transito</p>
              </div>
            </div>
            <div className="bg-[#503E9D] text-white p-4 rounded-xl flex justify-between items-center mb-6 mr-4 w-1/3">
              <div><img src="/logo-entregados.png" alt="" className="w-30 h-30" /></div>
              <div className="flex flex-col items-center mr-6">
                <p className="text-4xl font-semibold mb-2">{cantidadPedidos}</p>
                <p className="text-lg text-white/80">Completadas</p>
              </div>
            </div>
            <div className="bg-[#EB6297] text-white p-4 rounded-xl flex justify-between items-center mb-6 w-1/3">
              <div><img src="/logo-devoluciones.png" alt="" className="w-30 h-30" /></div>
              <div className="flex flex-col items-center mr-6">
                <p className="text-4xl font-semibold mb-2">0</p>
                <p className="text-lg text-white/80">Devoluciones</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 max-w-xl bg-white p-4 rounded-2xl text-gray-800 font-sans">

          <h2 className="text-2xl font-semibold mb-4">Estadísticas del mes</h2>

          {/*<div className="mb-4 w-1/2">
            <select
              className="border rounded p-2 w-full"
              value={usuarioSeleccionado ?? ''}
              onChange={(e) => setUsuarioSeleccionado(e.target.value)}
            >
              <option value="">Selecciona un usuario</option>
              {usuariosRelacionados.map((usuario) => (
                <option key={usuario.id} value={usuario.id}>
                  {usuario.nombre}
                </option>

              ))}
            </select>
          </div>*/}

          <div className="flex items-center gap-4 max-w-md mx-auto mb-4">
            <input
              type="date"
              value={fecha_inicio}
              onChange={(e) => setFecha_inicio(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />

            <input
              type="date"
              value={fecha_fin}
              onChange={(e) => setFecha_fin(e.target.value)}
              className="border border-gray-300 rounded-md p-2"
            />

            <button
              className="bg-[#1987DA] text-white px-6 py-2 rounded-md hover:bg-[#2D9EE8] transition-colors duration-200 cursor-pointer"
              onClick={async () => {

                await fetchCampanias();

                const pedidosFiltrados = await fetchPedidos(fecha_inicio, fecha_fin);

                const pedidoIds = pedidosFiltrados.map((p) => p.pkid);
                fetchCostoTotal(pedidoIds);
              }}
            >
              Filtrar
            </button>
          </div>

          {/* Caja azul de utilidad */}
          <div className="bg-[#1987DA] text-white p-4 rounded-xl flex justify-between items-center mb-6">
            <div>
              <p className="text-2xl font-semibold mb-2">Utilidad</p>
              <p className="text-lg text-white/80">Balance</p>
              <p className="text-2xl font-bold">${formatearNumero(valor_total - costoTotal - valor_flete - sumaPresupuestoGastado)}</p>
            </div>
            <img src="/money-bag.png" alt="Ícono dinero" className="w-25 h-25 mr-10" />
          </div>

          {/* Contabilidad */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Contabilidad</h3>
            <ul className="space-y-3 ml-8 mr-16">
              <li className="flex justify-between">
                <span className="flex items-center gap-2 text-lg">
                  <FaCheckCircle className="text-[#1987DA] text-xl" /> Recaudo
                </span>
                <span className="text-green-600">+ ${formatearNumero(valor_total)}</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center gap-2 text-lg">
                  <FaCheckCircle className="text-[#1987DA] text-xl" /> Costo productos
                </span>
                <span className="text-red-600">- ${formatearNumero(costoTotal)}</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center gap-2 text-lg">
                  <FaCheckCircle className="text-[#1987DA] text-xl" /> Fletes
                </span>
                <span className="text-red-600">- ${formatearNumero(valor_flete)}</span>
              </li>
              <li className="flex justify-between">
                <span className="flex items-center gap-2 text-lg">
                  <FaCheckCircle className="text-[#1987DA] text-xl" /> Publicidad
                </span>
                <span className="text-red-600">- ${formatearNumero(sumaPresupuestoGastado)}</span>
              </li>
            </ul>
          </div>

          {/* Transportadoras 
          <div>
            <h3 className="text-lg font-semibold mb-2">Transportadoras</h3>
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-500 text-sm">
                  <th className="py-1"> </th>
                  <th className="py-1 text-center">Entregados</th>
                  <th className="py-1 text-center">Devueltos</th>
                </tr>
              </thead>
              <tbody className="font-medium text-lg">
                <tr>
                  <td className="flex items-center gap-2 py-1">
                    <img src="/logo-motico.png" className="w-8 h-8" />
                    Swayp
                  </td>
                  <td className="text-center">{contador_swayp}</td>
                  <td className="text-center">0</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 py-1">
                    <img src="/logo-servi.png" className="w-8 h-8" />
                    Servientrega
                  </td>
                  <td className="text-center">{contador_servi}</td>
                  <td className="text-center">0</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 py-1">
                    <img src="/logo-inter.png" className="w-8 h-8" />
                    Interrapidísimo
                  </td>
                  <td className="text-center">{contador_inter}</td>
                  <td className="text-center">0</td>
                </tr>
                <tr>
                  <td className="flex items-center gap-2 py-1">
                    <img src="/logo-envia.png" className="w-8 h-8" />
                    Envia
                  </td>
                  <td className="text-center">{contador_envia}</td>
                  <td className="text-center">0</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
}
