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
    <div className="mb-6 ml-32">
      <h2 className="text-2xl text-gray-800 mb-8">Dashboard</h2>
      <div className="bg-[#fff] p-6 h-40 w-full max-w-5xl rounded-2xl flex items-center gap-8 mt-8">
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-gray-800">Hola, {nombre}</h2>
          <p className="text-gray-800 mt-1 text-xl">¿Listo para optimizar la gestión de Finder?</p>
        </div>
        <img src="/men-illustration.png" alt="Ilustración" className="w-128 ml-auto" />
      </div>
    </div>
  );
}
