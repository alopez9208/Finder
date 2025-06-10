// src/app/api/comercios_usuarios/route.js
import prisma from "@/lib/prisma";

export async function POST(req) {
  const { fkusuario_tbl_usuarios, fkid_tbl_comercios, nivel_acceso, fkid_tbl_estados_usuario } = await req.json();

  try {
    const nuevaRelacion = await prisma.tbl_comercios_usuarios.create({
      data: {
        fkusuario_tbl_usuarios,
        fkid_tbl_comercios: BigInt(fkid_tbl_comercios),
        nivel_acceso,
        fkid_tbl_estados_usuario: BigInt(fkid_tbl_estados_usuario),
        fecha_asignacion: new Date(),
      },
    });

    return Response.json({ success: true, relacion: nuevaRelacion });
  } catch (error) {
    console.error("Error al crear relación:", error.message);
    return Response.json({ success: false, message: "Error al crear la relación" }, { status: 500 });
  }
}

export async function PUT(req) {
  const { pkid, nivel_acceso, fkid_tbl_estados_usuario } = await req.json();

  try {
    const actualizado = await prisma.tbl_comercios_usuarios.update({
      where: { pkid: BigInt(pkid) },
      data: {
        nivel_acceso,
        fkid_tbl_estados_usuario: BigInt(fkid_tbl_estados_usuario),
      },
    });

    return Response.json({ success: true, relacion: actualizado });
  } catch (error) {
    console.error("Error al actualizar relación:", error.message);
    return Response.json({ success: false, message: "Error al actualizar" }, { status: 500 });
  }
}

export async function GET(req) {
  const usuarioId = req.headers.get("x-usuario-id")?.trim();

  if (!usuarioId) {
    return Response.json({ success: false, message: "Usuario no autenticado" }, { status: 401 });
  }

  try {
    const relaciones = await prisma.tbl_comercios_usuarios.findMany({
      where: { fkusuario_tbl_usuarios: usuarioId },
      include: {
        comercios: true,
        estado: true,
      },
    });

    // Convertir BigInt a string
    const relacionesConvertidas = relaciones.map((rel) => ({
      ...rel,
      pkid: rel.pkid.toString(),
      fkid_tbl_comercios: rel.fkid_tbl_comercios.toString(),
      fkid_tbl_estados_usuario: rel.fkid_tbl_estados_usuario.toString(),
      comercios: {
        ...rel.comercios,
        pkid: rel.comercios.pkid.toString(),
      },
      estado: {
        ...rel.estado,
        pkid: rel.estado.pkid.toString(),
      },
    }));

    return Response.json({ success: true, relaciones: relacionesConvertidas });
  } catch (error) {
    console.error("Error al obtener relaciones:", error.message);
    return Response.json({ success: false, message: "Error interno del servidor" }, { status: 500 });
  }
}
