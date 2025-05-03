import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const estados = await prisma.tbl_estados_usuario.findMany({
      select: {
        pkid: true,
        nombre: true,
        nomenclatura: true,
      },
    });

    const estadosSerializados = estados.map((estado) => ({
      ...estado,
      pkid: estado.pkid.toString(),
    }));

    return new Response(
      JSON.stringify({ success: true, statuses: estadosSerializados }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al obtener estados:", error);
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
  const { nombre, nomenclatura } = await request.json();

  try {
    const newStatus = await prisma.tbl_estados_usuario.create({
      data: {
        nombre,
        nomenclatura,
      },
    });

    // Convertir BigInt a String
    const serializedStatus = {
      ...newStatus,
      pkid: newStatus.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, status: serializedStatus }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear estado:", error);
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
  const { pkid, nombre, nomenclatura } = await request.json();

  try {
    const updatedStatus = await prisma.tbl_estados_usuario.update({
      where: { pkid: BigInt(pkid) },
      data: { nombre, nomenclatura },
    });

    const serialized = {
      ...updatedStatus,
      pkid: updatedStatus.pkid.toString(),
    };

    return new Response(JSON.stringify({ success: true, status: serialized }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al actualizar estado:", error);
    return new Response(JSON.stringify({ success: false, message: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

