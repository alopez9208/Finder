import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { handleErrorResponse } from "@/app/utils/errores";

export async function GET(request) {
    const comercioId = request.headers.get("x-comercio-id");

    if (!comercioId) {
        return NextResponse.json(
            { success: false, message: "ID de comercio no proporcionado" },
            { status: 400 }
        );
    }
    try {
        const campanias = await prisma.tbl_campanias.findMany({
            where: {
                fkid_tbl_comercios: BigInt(comercioId),
            },
            select: {
                pkid: true,
                nombre: true,
                presupuesto_gastado: true,
                fecha_inicio: true,
                fecha_fin: true,
                fkid_tbl_comercios: true,
                comercio: {
                    select: {
                        nombre: true,
                    },
                },
            },
        });

        const campaniasSerializadas = campanias.map((item) => ({
            pkid: item.pkid.toString(),
            nombre: item.nombre,
            presupuesto_gastado: item.presupuesto_gastado,
            fecha_inicio: item.fecha_inicio,
            fecha_fin: item.fecha_fin,
            fkid_tbl_comercios: item.fkid_tbl_comercios?.toString() ?? null,
            nombre_comercio: item.comercio?.nombre ?? null,
        }));

        return new Response(
            JSON.stringify({ success: true, campanias: campaniasSerializadas }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error al obtener campanias:", error);
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
    try {
        const { nombre,
            presupuesto_gastado: valorString,
            fecha_inicio,
            fecha_fin,
            fkid_tbl_comercios
        } = await request.json();

        const presupuesto_gastado = parseFloat(valorString);

        if (!nombre || isNaN(presupuesto_gastado) || !fecha_inicio || !fecha_fin || !fkid_tbl_comercios) {
            return handleErrorResponse(null, "Todos los campos son requeridos y válidos", 400);
        }

        const fechaInicioDate = new Date(`${fecha_inicio}T00:00:00-05:00`);
        const fechaFinDate = new Date(`${fecha_fin}T00:00:00-05:00`);

        const nuevaCampania = await prisma.tbl_campanias.create({
            data: {
                nombre,
                presupuesto_gastado,
                fecha_inicio: fechaInicioDate,
                fecha_fin: fechaFinDate,
                fkid_tbl_comercios: BigInt(fkid_tbl_comercios),
            },
        });

        const serializado = {
            ...nuevaCampania,
            pkid: nuevaCampania.pkid.toString(),
            fkid_tbl_comercios: nuevaCampania.fkid_tbl_comercios.toString(),
        };

        return new Response(
            JSON.stringify({ success: true, campania: serializado }),
            {
                status: 201,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        return handleErrorResponse(error, "Error al crear campania", 500);
    }
}

export async function PUT(request) {
    try {
        const { pkid,
            nombre,
            presupuesto_gastado: valorString,
            fecha_inicio,
            fecha_fin,
            fkid_tbl_comercios
        } = await request.json();

        if (!fecha_inicio) {
            return handleErrorResponse(null, "El campo fecha_inicio es obligatorio", 400);
        }

        if (!fecha_fin) {
            return handleErrorResponse(null, "El campo fecha_fin es obligatorio", 400);
        }

        const presupuesto_gastado = parseFloat(valorString);

        if (!nombre || isNaN(presupuesto_gastado) || !fecha_inicio || !fecha_fin || !fkid_tbl_comercios) {
            return handleErrorResponse(null, "Todos los campos son requeridos y válidos", 400);
        }        

        const fechaInicioDate = new Date(`${fecha_inicio}T00:00:00-05:00`);
        const fechaFinDate = new Date(`${fecha_fin}T00:00:00-05:00`);

        const dataToUpdate = {
            nombre,
            presupuesto_gastado,
            fecha_inicio: fechaInicioDate,
            fecha_fin: fechaFinDate,
            fkid_tbl_comercios: BigInt(fkid_tbl_comercios),
        };
        const campaniaActualizada = await prisma.tbl_campanias.update({
            where: { pkid: BigInt(pkid) },
            data: dataToUpdate,
        });

        const serializado = {
            ...campaniaActualizada,
            pkid: campaniaActualizada.pkid.toString(),
            fkid_tbl_comercios: campaniaActualizada.fkid_tbl_comercios.toString(),
        };

        return new Response(
            JSON.stringify({ success: true, campania: serializado }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" }
            }
        );
    } catch (error) {
        return handleErrorResponse(error, "Error al actualizar campania", 500);
    }
}

