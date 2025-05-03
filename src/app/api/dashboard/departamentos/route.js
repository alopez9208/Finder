import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const departamentos = await prisma.tbl_departamentos.findMany({
      select: {
        pkid: true,
        nombre: true,
        nomenclatura: true,
      },
    });

    const departamentosSerializados = departamentos.map((item) => ({
      ...item,
      pkid: item.pkid.toString(),
    }));

    return new Response(
      JSON.stringify({ success: true, departamentos: departamentosSerializados }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al obtener departamentos:", error);
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
    const nuevoDepartamento = await prisma.tbl_departamentos.create({
      data: {
        nombre,
        nomenclatura,
      },
    });

    const serializado = {
      ...nuevoDepartamento,
      pkid: nuevoDepartamento.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, departamento: serializado }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear departamento:", error);
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
    const departamentoActualizado = await prisma.tbl_departamentos.update({
      where: { pkid: BigInt(pkid) },
      data: { nombre, nomenclatura },
    });

    const serializado = {
      ...departamentoActualizado,
      pkid: departamentoActualizado.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, departamento: serializado }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al actualizar departamento:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
