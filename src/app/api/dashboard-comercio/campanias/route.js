import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const campanias = await prisma.tbl_campanias.findMany({
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
    const { nombre, presupuesto_gastado: valorString, fecha_inicio, fecha_fin, fkid_tbl_comercios } = await request.json();   

    try {

        const presupuesto_gastado = parseFloat(valorString);

        if (isNaN(presupuesto_gastado)) {
            return new Response(
                JSON.stringify({ success: false, message: "El campo presupuesto_gastado debe ser un número válido." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const nuevaCampania = await prisma.tbl_campanias.create({
            data: {
                nombre,
                presupuesto_gastado,
                fecha_inicio,
                fecha_fin,
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
        console.error("Error al crear campania:", error);
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
    const { pkid, nombre, presupuesto_gastado: valorString, fecha_inicio, fecha_fin, fkid_tbl_comercios } = await request.json();

    try {

        const presupuesto_gastado = parseFloat(valorString);

        if (isNaN(presupuesto_gastado)) {
            return new Response(
                JSON.stringify({ success: false, message: "El campo presupuesto_gastado debe ser un número válido." }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        const dataToUpdate = {
            nombre,
            presupuesto_gastado: valorString,
            fecha_inicio,
            fecha_fin,
        };

        if (fkid_tbl_comercios) {
            dataToUpdate.fkid_tbl_comercios = BigInt(fkid_tbl_comercios);
        }

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
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    } catch (error) {
        console.error("Error al actualizar campania:", error);
        return new Response(
            JSON.stringify({ success: false, message: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}

