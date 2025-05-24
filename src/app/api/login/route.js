import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { pkusuario, contrasena } = body;    

    const usuario = await prisma.tbl_usuarios.findUnique({
      where: {
        pkusuario: pkusuario
      },
      include: {
        persona: {
          select: {
            nombres: true,
          }
        }
      }
    });

    if (!usuario) {
      return NextResponse.json(
        { success: false, message: 'Usuario o contraseña incorrecta' },
        { status: 401 });
    }

    if (usuario.contrasena !== contrasena) {
      return NextResponse.json(
        { success: false, message: 'Usuario o contraseña incorrecta' },
        { status: 401 });
    }

    const usuarioLimpio = {
      pkusuario: usuario.pkusuario.toString(),
      fkid_tbl_roles: Number(usuario.fkid_tbl_roles),
      fkid_tbl_estados_usuario: Number(usuario.fkid_tbl_estados_usuario),
      fkid_tbl_personas: Number(usuario.fkid_tbl_personas),
      nombre: usuario.persona?.nombres || "Usuario",
    };

    return NextResponse.json({ success: true, usuario: usuarioLimpio });

  } catch (error) {
    console.error('❌ Error en la ruta login:', error);
    return NextResponse.json({ success: false, message: 'Error en el servidor' }, { status: 500 });
  }
}
