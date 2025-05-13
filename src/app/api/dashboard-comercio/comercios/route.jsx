import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const comercios = await prisma.tbl_comercios.findMany({
      select: {
        pkid: true,        
        nombre: true,       
        telefono: true,
        correo: true,
        fkusuario_tbl_usuarios: true,
        usuarios: {
          select: {
            pkusuario: true,
          },
        },
      },
    });

    const comerciosSerializados = comercios.map((item) => ({
      pkid: item.pkid.toString(),
      nombre: item.nombre,
      telefono: item.telefono,
      correo: item.correo,
      fkusuario_tbl_usuarios: item.fkusuario_tbl_usuarios?.toString() ?? null,
      nombre_usuario: item.usuarios?.pkusuario ?? null,
    }));

    return new Response(
      JSON.stringify({ success: true, comercios: comerciosSerializados }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al obtener comercios:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(request) {
  const { nit, nombre, telefono, correo, fkusuario_tbl_usuarios } = await request.json();

  try {
    const nuevoComercio = await prisma.tbl_comercios.create({
      data: {
        nombre,
        telefono,
        correo,
        fkusuario_tbl_usuarios,
      },
    });

    const serializado = {
      ...nuevoComercio,
      pkid: nuevoComercio.pkid.toString(),
      fkusuario_tbl_usuarios: nuevoComercio.fkusuario_tbl_usuarios?.toString() ?? null,
    };

    return new Response(
      JSON.stringify({ success: true, comercio: serializado }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear comercio:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function PUT(request) {
  const { pkid, nombre, telefono, correo, fkusuario_tbl_usuarios } = await request.json();

  try {
    const comercioActualizado = await prisma.tbl_comercios.update({
      where: { pkid: BigInt(pkid) },
      data: { nombre, telefono, correo, fkusuario_tbl_usuarios },
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
