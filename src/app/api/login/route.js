import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { pkusuario, contrasena } = body;

    console.log("📥 Datos recibidos:", pkusuario, contrasena);

    const usuario = await prisma.tbl_usuarios.findUnique({
      where: { pkusuario },
    });

    console.log("🔎 Usuario encontrado:", usuario);

    if (!usuario) {
      return NextResponse.json({ success: false, message: 'Usuario no encontrado' }, { status: 404 });
    }

    if (usuario.contrase_a !== contrasena) {
      return NextResponse.json({ success: false, message: 'Contraseña incorrecta' }, { status: 401 });
    }

    const usuarioLimpio = {
      ...usuario,
      fkid_tbl_roles: Number(usuario.fkid_tbl_roles),
      fkid_tbl_estados_usuario: Number(usuario.fkid_tbl_estados_usuario),
      fkid_tbl_personas: Number(usuario.fkid_tbl_personas),
    };
    
    return NextResponse.json({ success: true, usuario: usuarioLimpio });
    
  } catch (error) {
    console.error('❌ Error en la ruta login:', error);
    return NextResponse.json({ success: false, message: 'Error en el servidor' }, { status: 500 });
  }
}
