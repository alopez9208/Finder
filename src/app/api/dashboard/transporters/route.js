import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const transportadoras = await prisma.tbl_transportadoras.findMany({
      select: {
        pkid: true,
        nombre: true,
        nomenclatura: true,
      },
    });

    const transportadorasSerializadas = transportadoras.map((item) => ({
      ...item,
      pkid: item.pkid.toString(),
    }));

    return new Response(
      JSON.stringify({ success: true, transportadoras: transportadorasSerializadas }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al obtener transportadoras:", error);
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
    const nueva = await prisma.tbl_transportadoras.create({
      data: {
        nombre,
        nomenclatura,
      },
    });

    const serializada = {
      ...nueva,
      pkid: nueva.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, transportadora: serializada }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear transportadora:", error);
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
    const actualizada = await prisma.tbl_transportadoras.update({
      where: { pkid: BigInt(pkid) },
      data: { nombre, nomenclatura },
    });

    const serializada = {
      ...actualizada,
      pkid: actualizada.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, transportadora: serializada }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al actualizar transportadora:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
