'use client'

import useAuthRol from '@/app/hooks/useAuthRol'

export default function DashboardComercioPage() {
  const {
    nombre,
    loading
  } = useAuthRol({ rolPermitido: 2, estadoPermitido: 1 })

  if (loading) {
    return <p>No autorizado...</p>;
  }

  return (
    <div className="mb-6 ml-16 flex justify-between gap-10">
      {/* Columna izquierda */}
      <div className="w-2/3">
        <h2 className="text-2xl text-gray-800 mb-8">Dashboard</h2>
        <div className="bg-[#fff] p-6 h-40 w-full rounded-2xl flex items-center gap-8 mt-8">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800">Hola, {nombre}</h2>
            <p className="text-gray-800 mt-1 text-xl">
              ¿Listo para optimizar la gestión de Finder?
            </p>
          </div>
          <img src="/men-illustration.png" alt="Ilustración" className="w-128 ml-auto" />
        </div>
      </div>

      <div className="w-full max-w-xl bg-white p-6 rounded-2xl text-gray-800">
        <h2 className="text-2xl font-semibold mb-4">Estadísticas del mes</h2>

        {/* Caja azul de utilidad */}
        <div className="bg-blue-500 text-white p-4 rounded-xl flex justify-between items-center mb-6">
          <div>
            <p className="text-sm">Utilidad</p>
            <p className="text-2xl font-bold">$1'585.000</p>
            <p className="text-xs text-white/80">Balance</p>
          </div>
          <img src="/money-bag.png" alt="Ícono dinero" className="w-12 h-12" />
        </div>

        {/* Contabilidad */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Contabilidad</h3>
          <ul className="space-y-1">
            <li className="flex justify-between">
              <span>🟦 Precio productos</span>
              <span className="text-green-600">+ $3'000.000</span>
            </li>
            <li className="flex justify-between">
              <span>🟦 Costo productos</span>
              <span>- $900.000</span>
            </li>
            <li className="flex justify-between">
              <span>🟦 Fletes</span>
              <span>- $400.000</span>
            </li>
            <li className="flex justify-between">
              <span>🟦 Devoluciones</span>
              <span className="text-red-600">- $45.000</span>
            </li>
            <li className="flex justify-between">
              <span>🟦 Publicidad</span>
              <span>- $70.000</span>
            </li>
          </ul>
        </div>

        {/* Transportadoras */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Transportadoras</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="py-1"> </th>
                <th className="py-1">Entregados</th>
                <th className="py-1">Devueltos</th>
              </tr>
            </thead>
            <tbody className="font-medium">
              <tr>
                <td className="flex items-center gap-2 py-1">
                  <img src="/motico.png" className="w-5 h-5" />
                  Motico
                </td>
                <td>15</td>
                <td>0</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2 py-1">
                  <img src="/servientrega.png" className="w-5 h-5" />
                  Servientrega
                </td>
                <td>8</td>
                <td>1</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2 py-1">
                  <img src="/interrapidisimo.png" className="w-5 h-5" />
                  Interrapidísimo
                </td>
                <td>5</td>
                <td>0</td>
              </tr>
              <tr>
                <td className="flex items-center gap-2 py-1">
                  <img src="/envia.png" className="w-5 h-5" />
                  Envia
                </td>
                <td>2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
