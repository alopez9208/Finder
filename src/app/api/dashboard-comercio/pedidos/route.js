import prisma from "@/lib/prisma";

const validateAndConvertId = (id) => {
    return id ? BigInt(id) : undefined;
};

const handleErrorResponse = (error, message, statusCode = 500) => {
    console.error(message, error); // Log the error for debugging
    return new Response(
      JSON.stringify({ success: false, error: message }),
      {
        status: statusCode,
        headers: { "Content-Type": "application/json" },
      },
    );
  };

  export async function GET(request) {
    try {
        const comercioId = request.headers.get("x-comercio-id");

        if (!comercioId) {
            return handleErrorResponse(null, "El campo x-comercio-id es obligatorio.", 400);
        }

        const pedidos = await prisma.tbl_pedidos.findMany({
            where: {
                clientes: {
                    fkid_tbl_comercios: BigInt(comercioId),
                },
            },
            select: {
                pkid: true,
                valor_total: true,
                valor_flete: true,
                fecha_creacion: true,
                fkid_tbl_clientes: true,
                clientes: { // Mantenemos la anidación del cliente
                    select: {
                        telefono: true,
                    },
                },
                fkid_tbl_transportadoras: true,
                transportadoras: { // Mantenemos la anidación de la transportadora
                    select: { nomenclatura: true },
                },
                fkid_tbl_municipios: true,
                municipios: { // Mantenemos la anidación del municipio
                    select: { 
                        nombre: true,
                        nomenclatura: true,
                    },
                },
            },
        });
       
        const pedidosSerializados = pedidos.map((item) => ({
            pkid: item.pkid.toString(),
            valor_total: item.valor_total,
            valor_flete: item.valor_flete,
            fecha_creacion: item.fecha_creacion,
            fkid_tbl_clientes: item.fkid_tbl_clientes?.toString() ?? null,
            clientes: {
                telefono: item.clientes?.telefono ?? null,
            },
            fkid_tbl_transportadoras: item.fkid_tbl_transportadoras?.toString() ?? null,
            transportadoras: {
                nomenclatura: item.transportadoras?.nomenclatura ?? null,
            },
            fkid_tbl_municipios: item.fkid_tbl_municipios?.toString() ?? null,
            municipios: {
                nombre: item.municipios?.nombre ?? null,
                nomenclatura: item.municipios?.nomenclatura ?? null,
            },
        }));

        return new Response(JSON.stringify({ success: true, pedidos: pedidosSerializados }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return handleErrorResponse(error, "Error al obtener pedidos");
    }
}

export async function POST(request) {
    try {
        const { valor_total, fecha_creacion, fkid_tbl_clientes, fkid_tbl_transportadoras, valor_flete, fkid_tbl_municipios } = await request.json();

        if (!valor_total || !fecha_creacion || !valor_flete ) {
            return handleErrorResponse(null, "Los campos valor_total, fecha_creacion y valor_flete son obligatorios.", 400);
        }

        const nuevoPedido = await prisma.tbl_pedidos.create({
            data: {
                valor_total: parseFloat(valor_total), // Convertir a número
                fecha_creacion,
                valor_flete: parseFloat(valor_flete), // Convertir a número
                fkid_tbl_clientes: validateAndConvertId(fkid_tbl_clientes),
                fkid_tbl_transportadoras: validateAndConvertId(fkid_tbl_transportadoras),
                fkid_tbl_municipios: validateAndConvertId(fkid_tbl_municipios),
            },
        });

        const serializado = {
            ...nuevoPedido,
            pkid: nuevoPedido.pkid.toString(),
            fkid_tbl_clientes: nuevoPedido.fkid_tbl_clientes?.toString() ?? null,
            fkid_tbl_transportadoras: nuevoPedido.fkid_tbl_transportadoras?.toString() ?? null,
            fkid_tbl_municipios: nuevoPedido.fkid_tbl_municipios?.toString() ?? null,
        };

        return new Response(JSON.stringify({ success: true, pedido: serializado }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return handleErrorResponse(error, "Error al crear pedido");
    }
}

export async function PUT(request) {
    try {
        const { pkid, valor_total, fecha_creacion, fkid_tbl_clientes, fkid_tbl_transportadoras, valor_flete, fkid_tbl_municipios } = await request.json();

        if (!pkid) {
            return handleErrorResponse(null, "El campo pkid es obligatorio para la actualización.", 400);
        }

        const dataToUpdate = {
            valor_total: parseFloat(valor_total), // Convertir a número
            fecha_creacion,
            valor_flete: parseFloat(valor_flete), // Convertir a número
            fkid_tbl_clientes: validateAndConvertId(fkid_tbl_clientes),
            fkid_tbl_transportadoras: validateAndConvertId(fkid_tbl_transportadoras),
            fkid_tbl_municipios: validateAndConvertId(fkid_tbl_municipios),
        };

        const pedidoActualizado = await prisma.tbl_pedidos.update({
            where: { pkid: BigInt(pkid) },
            data: dataToUpdate,
        });

        const serializado = {
            ...pedidoActualizado,
            pkid: pedidoActualizado.pkid.toString(),
            fkid_tbl_clientes: pedidoActualizado.fkid_tbl_clientes?.toString() ?? null,
            fkid_tbl_transportadoras: pedidoActualizado.fkid_tbl_transportadoras?.toString() ?? null,
            fkid_tbl_municipios: pedidoActualizado.fkid_tbl_municipios?.toString() ?? null,
        };

        return new Response(JSON.stringify({ success: true, pedido: serializado }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return handleErrorResponse(error, "Error al actualizar pedido");
    }
}
