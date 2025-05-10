import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Función para convertir BigInt a string
function bigIntToString(key, value) {
  if (typeof value === 'bigint') {
    return value.toString(); // Convertir BigInt a string
  }
  return value;
}

// Obtener todos los usuarios
export async function GET() {
  try {
    const usuarios = await prisma.tbl_usuarios.findMany({
      include: {
        persona: true,
        rol: true,
        estado: true,
      },
    });

    console.log("🔎 Usuarios encontrados:", usuarios);

    if (!usuarios || usuarios.length === 0) {
      return NextResponse.json({ success: false, message: 'No se encontraron usuarios' }, { status: 404 });
    }

    // Convertir BigInt a string en los datos
    const usuariosSinBigInt = JSON.parse(JSON.stringify(usuarios, bigIntToString));

    return NextResponse.json({ success: true, usuarios: usuariosSinBigInt }, { status: 200 });
  } catch (error) {
    console.error("❌ Error obteniendo usuarios:", error);
    return NextResponse.json({ success: false, message: 'Error en el servidor' }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    const { pkusuario, nombres, apellidos, correo, rol, estado } = await request.json();

    // Log de los datos recibidos
    console.log("🔧 Datos recibidos para actualizar:", {
      pkusuario, nombres, apellidos, correo, rol, estado
    });

    // Validando IDs
    if (isNaN(rol) || isNaN(estado)) {
      console.error("❌ ID de rol o estado inválido", { rol, estado });
      return NextResponse.json({ success: false, message: 'ID de rol o estado inválido.' }, { status: 400 });
    }

    // Aquí intentamos obtener al usuario
    console.log("🔎 Buscando usuario con pkusuario:", pkusuario);

    const usuarioActualizado = await prisma.tbl_usuarios.update({
      where: { pkusuario: pkusuario },
      data: {
        rol: {
          connect: { pkid: rol }, // Conecta con el rol usando su pkid
        },
        estado: {
          connect: { pkid: estado }, // Conecta con el estado usando su pkid
        },
        persona: {
          update: {
            nombres,
            apellidos,
          },
        },
      },
      include: {
        persona: true,
        rol: true,
        estado: true,
      }
    });

    // Log del resultado de la actualización
    console.log("✅ Usuario actualizado:", usuarioActualizado);

    return NextResponse.json({ success: true, usuario: JSON.parse(JSON.stringify(usuarioActualizado, bigIntToString)) }, { status: 200 });
  } catch (error) {
    console.error("❌ Error actualizando usuario:", error); // Muestra el error

    if (error.code === 'P2025') {
      return NextResponse.json({ success: false, message: 'Usuario no encontrado.' }, { status: 404 });
    }

    return NextResponse.json({ success: false, message: 'Error en el servidor' }, { status: 500 });
  }
}