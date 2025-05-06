import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const municipios = await prisma.tbl_municipios.findMany({
      select: {
        pkid: true,
        nombre: true,
        nomenclatura: true,
        fkid_tbl_departamentos: true,
        departamento: {
          select: {
            nombre: true, // ✅ Nomenclatura del departamento
          },
        },
      },
    });

    const municipiosSerializados = municipios.map((item) => ({
      pkid: item.pkid.toString(),
      nombre: item.nombre,
      nomenclatura: item.nomenclatura,
      fkid_tbl_departamentos: item.fkid_tbl_departamentos?.toString() ?? null,
      nombre_departamento: item.departamento?.nombre ?? null, // ✅ Incluye la nomenclatura del departamento
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
  const { nombre, nomenclatura, fkid_tbl_departamentos } = await request.json(); // ✅ incluirlo

  try {
    const nuevoMunicipio = await prisma.tbl_municipios.create({
      data: {
        nombre,
        nomenclatura,
        fkid_tbl_departamentos: BigInt(fkid_tbl_departamentos), // ✅ guardarlo
      },
    });

    const serializado = {
      ...nuevoMunicipio,
      pkid: nuevoMunicipio.pkid.toString(),
      fkid_tbl_departamentos: nuevoMunicipio.fkid_tbl_departamentos.toString(),
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
  const { pkid, nombre, nomenclatura, fkid_tbl_departamentos } = await request.json();

  // Preparamos el objeto de datos de actualización, solo con los campos que realmente se modifican
  const dataToUpdate = {
    nombre,
    nomenclatura,
  };

  // Solo añadir fkid_tbl_departamentos si es necesario
  if (fkid_tbl_departamentos) {
    dataToUpdate.fkid_tbl_departamentos = BigInt(fkid_tbl_departamentos);
  }

  try {
    const municipioActualizado = await prisma.tbl_municipios.update({
      where: { pkid: BigInt(pkid) },
      data: dataToUpdate, // Solo enviamos lo que fue modificado
    });

    const serializado = {
      ...municipioActualizado,
      pkid: municipioActualizado.pkid.toString(),
      fkid_tbl_departamentos: municipioActualizado.fkid_tbl_departamentos.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, municipio: serializado }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al actualizar municipio:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

