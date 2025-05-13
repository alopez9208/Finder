import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const clientes = await prisma.tbl_clientes.findMany({
            select: {
                pkid: true,
                telefono: true,
                nombres: true,
                apellidos: true,
                correo: true,
                direccion: true,
                fkid_tbl_municipios: true,
                municipios: {
                    select: {
                        nombre: true,
                    },
                },
                fkid_tbl_comercios: true,
                comercios: {
                    select: {
                        nombre: true,
                    }
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
            fkid_tbl_comercios: item.fkid_tbl_comercios?.toString() ?? null,
            nombre_comercio: item.comercios?.nombre ?? null,
        }));

        return new Response(
            JSON.stringify({ success: true, clientes: clientesSerializados }),
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error al obtener clientes:", error);
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
    const { telefono, nombres, apellidos, correo, direccion, fkid_tbl_municipios, fkid_tbl_comercios } = await request.json(); // ✅ incluirlo

    try {
        const nuevoCliente = await prisma.tbl_clientes.create({
            data: {
                telefono,
                nombres,
                apellidos,
                correo,
                direccion,
                fkid_tbl_municipios: BigInt(fkid_tbl_municipios), // ✅ guardarlo   
                fkid_tbl_comercios: BigInt(fkid_tbl_comercios), // ✅ guardarlo
            },
        });

        const serializado = {
            ...nuevoCliente,
            pkid: nuevoCliente.pkid.toString(),
            fkid_tbl_municipios: nuevoCliente.fkid_tbl_municipios.toString(),
            fkid_tbl_comercios: nuevoCliente.fkid_tbl_comercios.toString(),
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
    const { pkid, telefono, nombres, apellidos, correo, direccion, fkid_tbl_municipios, fkid_tbl_comercios } = await request.json();

    const dataToUpdate = {
        telefono,
        nombres,
        apellidos,
        correo,
        direccion,
    };
    
    if (fkid_tbl_municipios) {
        dataToUpdate.fkid_tbl_municipios = BigInt(fkid_tbl_municipios);
    }
    if (fkid_tbl_comercios) {
        dataToUpdate.fkid_tbl_comercios = BigInt(fkid_tbl_comercios);
    }

    try {
        const clienteActualizado = await prisma.tbl_clientes.update({
            where: { pkid: BigInt(pkid) },
            data: dataToUpdate, 
        });

        const serializado = {
            ...clienteActualizado,
            pkid: clienteActualizado.pkid.toString(),
            fkid_tbl_municipios: clienteActualizado.fkid_tbl_municipios.toString(),
            fkid_tbl_comercios: clienteActualizado.fkid_tbl_comercios.toString(),
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

