import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const municipios = await prisma.tbl_municipios.findMany({
      select: {
        pkid: true,
        nombre: true,
        nomenclatura: true,
      },
    });

    const municipiosSerializados = municipios.map((item) => ({
      ...item,
      pkid: item.pkid.toString(),
    }));

    return new Response(
      JSON.stringify({ success: true, municipios: municipiosSerializados }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al obtener municipios:", error);
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
    const nuevoMunicipio = await prisma.tbl_municipios.create({
      data: {
        nombre,
        nomenclatura,
      },
    });

    const serializado = {
      ...nuevoMunicipio,
      pkid: nuevoMunicipio.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, municipio: serializado }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear municipio:", error);
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
    const municipioActualizado = await prisma.tbl_municipios.update({
      where: { pkid: BigInt(pkid) },
      data: { nombre, nomenclatura },
    });

    const serializado = {
      ...municipioActualizado,
      pkid: municipioActualizado.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, municipio: serializado }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al actualizar municipio:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
