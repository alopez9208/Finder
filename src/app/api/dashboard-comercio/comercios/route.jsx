// src/app/api/comercios/route.js
import prisma from "@/lib/prisma";

export async function GET(req) {
  try {
    const usuarioId = req.headers.get("x-usuario-id")?.trim();

    if (!usuarioId) {
      return Response.json({ success: false, message: "Usuario no autenticado" }, { status: 401 });
    }

    const relaciones = await prisma.tbl_comercios_usuarios.findMany({
      where: {
        fkusuario_tbl_usuarios: usuarioId,
        estado: {
          nomenclatura: "ACTIVO",
        },
      },
      include: {
        comercios: true,
      },
    });

    const comercios = relaciones.map((rel) => ({
      pkid: rel.comercios.pkid.toString(),
      nombre: rel.comercios.nombre,
      telefono: rel.comercios.telefono,
      correo: rel.comercios.correo,
    }));

    return Response.json({ success: true, comercios });
  } catch (error) {
    console.error("Error al obtener comercios:", error.message);
    return Response.json({ success: false, message: "Error interno del servidor" }, { status: 500 });
  }
}

export async function POST(request) {
  const usuarioId = request.headers.get("x-usuario-id")?.trim();

  if (!usuarioId) {
    return new Response(
      JSON.stringify({ success: false, message: "Usuario no autenticado" }),
      { status: 401, headers: { "Content-Type": "application/json" } }
    );
  }

  const { nombre, telefono, correo } = await request.json();

  try {
    // Verificar si el comercio ya existe
    const comercioExistente = await prisma.tbl_comercios.findUnique({
      where: { nombre },
    });

    if (comercioExistente) {
      return new Response(
        JSON.stringify({ success: false, message: "El nombre del comercio ya está en uso." }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

   
    const nuevoComercio = await prisma.tbl_comercios.create({
      data: { nombre, telefono, correo },
    });

    
    await prisma.tbl_comercios_usuarios.create({
      data: {
        fkusuario_tbl_usuarios: usuarioId,
        fkid_tbl_comercios: nuevoComercio.pkid,
        fkid_tbl_estados_usuario: 1,     
        nivel_acceso: 1,
        fecha_asignacion: new Date(),
      },
    });
    
    const serializado = {
      ...nuevoComercio,
      pkid: nuevoComercio.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, comercio: serializado }),
      { status: 201, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al crear comercio:", error);

    if (error.code === "P2002" && error.meta?.target?.includes("nombre")) {
      return new Response(
        JSON.stringify({ success: false, message: "El nombre del comercio ya está en uso." }),
        { status: 409, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: false, message: "Error interno al crear el comercio." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function PUT(request) {
  const { pkid, nombre, telefono, correo } = await request.json();

  try {
    const comercioActualizado = await prisma.tbl_comercios.update({
      where: { pkid: BigInt(pkid) },
      data: { nombre, telefono, correo },
    });

    const serializado = {
      ...comercioActualizado,
      pkid: comercioActualizado.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, comercio: serializado }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al actualizar comercio:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
