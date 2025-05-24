'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const useAuthRol = ({ rolPermitido, estadoPermitido = 1, rutaRedireccion = "/login?error=No autorizado" }) => {
  const router = useRouter()
  const [nombre, setNombre] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem("usuario"))

    if (
      !usuario ||
      usuario.fkid_tbl_roles !== rolPermitido ||
      usuario.fkid_tbl_estados_usuario !== estadoPermitido
    ) {
      localStorage.clear(); // Limpia cualquier dato residual antes de redirigir
      router.push(rutaRedireccion)
    } else {
      setNombre(usuario.nombre)
      setLoading(false)
    }
  }, [router, rolPermitido, estadoPermitido, rutaRedireccion])

  return {
    nombre,
    loading
  }
}

export default useAuthRol