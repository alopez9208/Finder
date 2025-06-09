import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get("file");
        const comercioId = request.headers.get("x-comercio-id"); 

        if (!file) {
            return NextResponse.json({ success: false, message: "No se recibió ningún archivo." }, { status: 400 });
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const workbook = XLSX.read(buffer, { type: "buffer" });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rows = XLSX.utils.sheet_to_json(sheet);
        console.log("Contenido del Excel:", rows);

        if (!Array.isArray(rows) || rows.length === 0) {
            return NextResponse.json({ success: false, message: "El archivo Excel está vacío o no es válido." }, { status: 400 });
        }

        let pedidosCreados = [];
        for (const row of rows) {
            const telefonoStr = String(row.telefono_cliente);

            let cliente = await prisma.tbl_clientes.findFirst({
                where: { 
                    telefono: telefonoStr,
                    fkid_tbl_comercios: BigInt(comercioId),
                },
            });
            if (!cliente) {
                return new Response(
                  JSON.stringify({
                    success: false,
                    message: `El cliente con telefono ${telefonoStr} no existe o no pertenece a este comercio.`,
                  }),
                  { status: 400 }
                );
            }
            if (!cliente) {
                cliente = await prisma.tbl_clientes.create({
                    data: {
                        telefono: telefonoStr,
                        nombre: row.nombre_cliente,                          
                    },
                });
            }   
            
            const municipio = await prisma.tbl_municipios.findFirst({
                where: { nombre: row.nombre_municipio },
            });

            const transportadora = await prisma.tbl_transportadoras.findFirst({
                where: { nombre: row.nombre_transportadora },
            });

            const pedido = await prisma.tbl_pedidos.create({
                data: {
                    guia: row.guia,
                    fkid_tbl_clientes: cliente.pkid,
                    fkid_tbl_municipios: municipio?.pkid,
                    fkid_tbl_transportadoras: transportadora?.pkid,
                    fecha_creacion: new Date(),
                    valor_total: row.valor_total,
                    valor_flete: row.valor_flete,
                },
            });
            pedidosCreados.push(pedido);

            const productos = JSON.parse(row.productos);
            for (const p of productos) {
                await prisma.tbl_det_productos.create({
                    data: {
                        fkid_tbl_pedidos: pedido.pkid,
                        fkid_tbl_productos: p.fkid_tbl_productos,
                        cantidad: p.cantidad,
                        precio_venta_unitario: p.precio_venta_unitario,
                        costo_unitario: p.costo_unitario,
                    },
                });
            }
        }

        return NextResponse.json({ 
            success: true, 
            message: `Se importaron ${pedidosCreados.length} pedidos.`,
            cantidad: pedidosCreados.length
        });
    } catch (error) {
        console.error("Error al importar pedidos:", error);
        return NextResponse.json({ 
            success: false, 
            message: "Error interno del servidor.",
            error: error.message
        }, { status: 500 });
    }
}
