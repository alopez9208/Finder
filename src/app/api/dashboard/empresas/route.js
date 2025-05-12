import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const empresas = await prisma.tbl_empresas.findMany({
      select: {
        pkid: true,
        nit: true,
        nombre: true,
        telefono: true,
        correo: true,
      },
    });

    const empresasSerializadas = empresas.map((item) => ({
      ...item,
      pkid: item.pkid.toString(),
    }));

    return new Response(
      JSON.stringify({ success: true, empresas: empresasSerializadas }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al obtener empresas:", error);
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
  const { nombre, nit, telefono, correo } = await request.json();

  try {
    const nueva = await prisma.tbl_empresas.create({
      data: {
        nombre,
        nit,
        telefono,
        correo,
      },
    });

    const serializada = {
      ...nueva,
      pkid: nueva.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, empresa: serializada }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear empresa:", error);
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
  const { pkid, nombre, nit, telefono, correo } = await request.json();

  try {
    const actualizada = await prisma.tbl_empresas.update({
      where: { pkid: BigInt(pkid) },
      data: { nombre, nit, telefono, correo },
    });

    const serializada = {
      ...actualizada,
      pkid: actualizada.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, empresa: serializada }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al actualizar empresa:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
