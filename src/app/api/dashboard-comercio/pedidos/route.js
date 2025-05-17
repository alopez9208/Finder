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

  export async function GET() {
    try {
        const pedidos = await prisma.tbl_pedidos.findMany({
            select: {
                pkid: true,
                valor_total: true,
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
            },
        });

        // La serialización debe mantener la estructura anidada para clientes y transportadoras
        const pedidosSerializados = pedidos.map((item) => ({
            pkid: item.pkid.toString(),
            valor_total: item.valor_total,
            fecha_creacion: item.fecha_creacion,
            fkid_tbl_clientes: item.fkid_tbl_clientes?.toString() ?? null,
            // Mantenemos la anidación para 'clientes'
            clientes: {
                telefono: item.clientes?.telefono ?? null,
            },
            fkid_tbl_transportadoras: item.fkid_tbl_transportadoras?.toString() ?? null,
            // Mantenemos la anidación para 'transportadoras'
            transportadoras: {
                nomenclatura: item.transportadoras?.nomenclatura ?? null,
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
        const { valor_total, fecha_creacion, fkid_tbl_clientes, fkid_tbl_transportadoras } = await request.json();

        if (!valor_total || !fecha_creacion) {
            return handleErrorResponse(null, "Los campos valor_total y fecha_creacion son obligatorios.", 400);
        }

        const nuevoPedido = await prisma.tbl_pedidos.create({
            data: {
                valor_total: parseFloat(valor_total), // Convertir a número
                fecha_creacion,
                fkid_tbl_clientes: validateAndConvertId(fkid_tbl_clientes),
                fkid_tbl_transportadoras: validateAndConvertId(fkid_tbl_transportadoras),
            },
        });

        const serializado = {
            ...nuevoPedido,
            pkid: nuevoPedido.pkid.toString(),
            fkid_tbl_clientes: nuevoPedido.fkid_tbl_clientes?.toString() ?? null,
            fkid_tbl_transportadoras: nuevoPedido.fkid_tbl_transportadoras?.toString() ?? null,
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
        const { pkid, valor_total, fecha_creacion, fkid_tbl_clientes, fkid_tbl_transportadoras } = await request.json();

        if (!pkid) {
            return handleErrorResponse(null, "El campo pkid es obligatorio para la actualización.", 400);
        }

        const dataToUpdate = {
            valor_total: parseFloat(valor_total), // Convertir a número
            fecha_creacion,
            fkid_tbl_clientes: validateAndConvertId(fkid_tbl_clientes),
            fkid_tbl_transportadoras: validateAndConvertId(fkid_tbl_transportadoras),
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
        };

        return new Response(JSON.stringify({ success: true, pedido: serializado }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        return handleErrorResponse(error, "Error al actualizar pedido");
    }
}
