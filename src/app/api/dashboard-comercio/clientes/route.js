import prisma from "@/lib/prisma";

export async function GET(request) {
  const comercioUsuarioId = request.headers.get("x-comercio-id");

  if (!comercioUsuarioId) {
    return new Response(JSON.stringify({ success: false, message: "ID de comercio usuario no proporcionado" }), { status: 400 });
  }

  try {
    // 1. Buscar el comercio correspondiente al usuario
    const relacion = await prisma.tbl_comercios_usuarios.findUnique({
      where: {
        pkid: BigInt(comercioUsuarioId),
      },
      select: {
        fkid_tbl_comercios: true,
      },
    });

    if (!relacion) {
      return new Response(JSON.stringify({ success: false, message: "No se encontró la relación comercio-usuario" }), { status: 404 });
    }

    const comercioId = relacion.fkid_tbl_comercios;

    // 2. Buscar los clientes que pertenecen a ese comercio
    const clientes = await prisma.tbl_clientes.findMany({
      where: {
        comercios_usuarios: {
          fkid_tbl_comercios: comercioId,
        },
      },
      select: {
        pkid: true,
        telefono: true,
        nombres: true,
        apellidos: true,
        correo: true,
        direccion: true,
        fkid_tbl_municipios: true,
        municipios: {
          select: { nombre: true },
        },
        fkid_tbl_comercios_usuarios: true,
        comercios_usuarios: {
          select: {
            comercios: {
              select: { nombre: true },
            },
          },
        },
      },
    });

    const clientesSerializados = clientes.map((item) => ({
      pkid: item.pkid.toString(),
      telefono: item.telefono,
      nombres: item.nombres,
      apellidos: item.apellidos,
      correo: item.correo,
      direccion: item.direccion,
      fkid_tbl_municipios: item.fkid_tbl_municipios?.toString() ?? null,
      nombre_municipio: item.municipios?.nombre ?? null,
      fkid_tbl_comercios_usuarios: item.fkid_tbl_comercios_usuarios?.toString() ?? null,
      nombre_comercio: item.comercios_usuarios?.comercios?.nombre ?? null,
    }));

    return new Response(JSON.stringify({ success: true, clientes: clientesSerializados }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al obtener clientes:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(request) {
  const { telefono, nombres, apellidos, correo, direccion, fkid_tbl_municipios, fkid_tbl_comercios_usuarios } = await request.json();

  if (!fkid_tbl_comercios_usuarios) {
    return new Response(
      JSON.stringify({ success: false, message: "fkid_tbl_comercios_usuarios es requerido" }),
      { status: 400 }
    );
  }

  if (!fkid_tbl_municipios) {
    return new Response(
      JSON.stringify({ success: false, message: "fkid_tbl_municipios es requerido" }),
      { status: 400 }
    );
  }

  try {
    const nuevoCliente = await prisma.tbl_clientes.create({
      data: {
        telefono,
        nombres,
        apellidos,
        correo,
        direccion,
        fkid_tbl_municipios: BigInt(fkid_tbl_municipios),
        fkid_tbl_comercios_usuarios: BigInt(fkid_tbl_comercios_usuarios),
      },
    });

    const serializado = {
      ...nuevoCliente,
      pkid: nuevoCliente.pkid.toString(),
      fkid_tbl_municipios: nuevoCliente.fkid_tbl_municipios.toString(),
      fkid_tbl_comercios_usuarios: nuevoCliente.fkid_tbl_comercios_usuarios.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, cliente: serializado }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear cliente:", error);
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
  const {
    pkid,
    telefono,
    nombres,
    apellidos,
    correo,
    direccion,
    fkid_tbl_municipios,
    fkid_tbl_comercios_usuarios,
  } = await request.json();

  try {
    const clienteActualizado = await prisma.tbl_clientes.update({
      where: { pkid: BigInt(pkid) },
      data: {
        telefono,
        nombres,
        apellidos,
        correo,
        direccion,
        fkid_tbl_municipios: BigInt(fkid_tbl_municipios),
        fkid_tbl_comercios_usuarios: BigInt(fkid_tbl_comercios_usuarios),
      },
    });

    const serializado = {
      ...clienteActualizado,
      pkid: clienteActualizado.pkid.toString(),
      fkid_tbl_municipios: clienteActualizado.fkid_tbl_municipios.toString(),
      fkid_tbl_comercios_usuarios: clienteActualizado.fkid_tbl_comercios_usuarios.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, cliente: serializado }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}