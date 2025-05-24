import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request) {
  try {
    const body = await request.json();
    const { nombres, apellidos, correo, usuario, contraseña } = body;

    const usuarioExistente = await prisma.tbl_usuarios.findUnique({
      where: { pkusuario: usuario },
    });

    if (usuarioExistente) {
      return NextResponse.json({ error: 'El nombre de usuario ya está en uso' }, { status: 400 });
    }

    const persona = await prisma.tbl_personas.create({
      data: { nombres, apellidos, correo },
    });

    const nuevoUsuario = await prisma.tbl_usuarios.create({
      data: {
        pkusuario: usuario,
        contrasena: contraseña,
        fkid_tbl_personas: persona.pkid,
        fkid_tbl_roles: 2, // Rol Comercio
        fkid_tbl_estados_usuario: 1, // Activo
      },
    });

    return NextResponse.json({ message: 'Usuario registrado con éxito', usuario: nuevoUsuario.toString(), });
  } catch (error) {
    console.error('❌ Error al registrar usuario:', error);
    return NextResponse.json({ error: error.message || 'Error al registrar usuario' }, { status: 500 });
  }
}
