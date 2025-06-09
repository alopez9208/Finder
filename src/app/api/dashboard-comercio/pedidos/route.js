import prisma from "@/lib/prisma";

const validateAndConvertId = (id) => {
    return id ? BigInt(id) : undefined;
};

const handleErrorResponse = (error, message, statusCode = 500) => {
    console.error(message, error);
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
        const { searchParams } = new URL(request.url);
        const fecha_inicio = searchParams.get("fecha_inicio");
        const fecha_fin = searchParams.get("fecha_fin");
        const comercioId = request.headers.get("x-comercio-id");

        const fechaInicio = fecha_inicio ? new Date(fecha_inicio) : null;
        const fechaFin = fecha_fin ? new Date(fecha_fin) : null;

        if (fechaFin) {
            fechaFin.setDate(fechaFin.getDate() + 1);
        }

        if (!comercioId) {
            return handleErrorResponse(null, "El campo x-comercio-id es obligatorio.", 400);
        }

        const whereClause = {
            clientes: {
                fkid_tbl_comercios: BigInt(comercioId),
            },
        };

        if (fechaInicio && fechaFin) {
            whereClause.fecha_creacion = {
                gte: fechaInicio,
                lt: fechaFin,
            };
        } else if (fechaInicio) {
            whereClause.fecha_creacion = {
                gte: fechaInicio,
            };
        } else if (fechaFin) {
            whereClause.fecha_creacion = {
                lt: fechaFin,
            };
        }

        const pedidos = await prisma.tbl_pedidos.findMany({
            where: whereClause,
            select: {
                pkid: true,
                guia: true,
                valor_total: true,
                valor_flete: true,
                fecha_creacion: true,
                fkid_tbl_clientes: true,
                clientes: {
                    select: {
                        nombres: true,
                        apellidos: true,
                        telefono: true,
                        direccion: true,
                        correo: true,
                    },
                },
                fkid_tbl_transportadoras: true,
                transportadoras: {
                    select: {
                        nombre: true,
                        nomenclatura: true,
                    },
                },
                fkid_tbl_municipios: true,
                municipios: {
                    select: {
                        nombre: true,
                        nomenclatura: true,
                    },
                },
            },
        });

        const pedidosSerializados = pedidos.map((item) => ({
            pkid: item.pkid.toString(),
            guia: item.guia,
            valor_total: item.valor_total,
            valor_flete: item.valor_flete,
            fecha_creacion: item.fecha_creacion,
            fkid_tbl_clientes: item.fkid_tbl_clientes?.toString() ?? null,
            clientes: {
                nombres: item.clientes?.nombres ?? null,
                apellidos: item.clientes?.apellidos ?? null,
                telefono: item.clientes?.telefono ?? null,
                direccion: item.clientes?.direccion ?? null,
                correo: item.clientes?.correo ?? null,
            },
            fkid_tbl_transportadoras: item.fkid_tbl_transportadoras?.toString() ?? null,
            transportadoras: {
                nombre: item.transportadoras?.nombre ?? null,
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
        const {
            guia,
            valor_total,
            fkid_tbl_clientes,
            fkid_tbl_transportadoras,
            valor_flete,
            fkid_tbl_municipios,
            fecha_creacion,
        } = await request.json();

        if (!valor_total || !valor_flete || !fecha_creacion) {
            return handleErrorResponse(null, "Los campos valor_total, valor_flete y fecha_creacion son obligatorios.", 400);
        }

        const fechaCreacionDate = new Date(`${fecha_creacion}T00:00:00-05:00`);

        const nuevoPedido = await prisma.tbl_pedidos.create({
            data: {
                guia,
                valor_total: parseFloat(valor_total),
                fecha_creacion: fechaCreacionDate,
                valor_flete: parseFloat(valor_flete),
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
        const {
            pkid,
            guia,
            valor_total,
            fecha_creacion,
            fkid_tbl_clientes,
            fkid_tbl_transportadoras,
            valor_flete,
            fkid_tbl_municipios
        } = await request.json();        

        if (!fecha_creacion) {
            return handleErrorResponse(null, "El campo fecha_creacion es obligatorio.", 400);
        }

        const fechaCreacionDate = new Date(`${fecha_creacion}T00:00:00-05:00`);

        const dataToUpdate = {
            guia,
            valor_total: parseFloat(valor_total),
            fecha_creacion: fechaCreacionDate,
            valor_flete: parseFloat(valor_flete),
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