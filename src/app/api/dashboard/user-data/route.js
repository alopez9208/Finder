import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Función para convertir BigInt a string
function bigIntToString(key, value) {
  if (typeof value === 'bigint') {
    return value.toString(); // Convertir BigInt a string
  }
  return value;
}

export async function GET() {
  try {
    const usuarios = await prisma.tbl_usuarios.findMany({
      include: {
        persona: true, // Relación definida en el modelo Prisma
        rol:true,
        estado:true,
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
