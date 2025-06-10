import { NextResponse } from "next/server";
import * as XLSX from "xlsx";
import prisma from "@/lib/prisma";

const validateAndConvertId = (id) => {
    if (!id) return undefined;
    if (/^\d+$/.test(id.toString())) {
      return BigInt(id);
    }
    return id; // string no numérico
  };

  async function fileToBuffer(file) {
    const chunks = [];
    for await (const chunk of file.stream()) {
      chunks.push(chunk);
    }
    return Buffer.concat(chunks);
  }
  

export const dynamic = 'force-dynamic';

export async function POST(request) {

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

        const formData = await request.formData();
        const file = formData.get("file");        

        if (!file) {
            return NextResponse.json({ success: false, message: "No se recibió ningún archivo." }, { status: 400 });
        }

        const buffer = await fileToBuffer(file);
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
                    comercios_usuarios: {
                        fkid_tbl_comercios: BigInt(comercioId),
                    },
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
            
            const usuarioId = request.headers.get("x-usuario-id");

            const pedido = await prisma.tbl_pedidos.create({
                data: {
                  guia: String(row.guia),
                  fkid_tbl_clientes: BigInt(cliente.pkid),
                  fkid_tbl_municipios: municipio ? BigInt(municipio.pkid) : null,
                  fkid_tbl_transportadoras: transportadora ? BigInt(transportadora.pkid) : null,
                  fecha_creacion: new Date(row.fecha_creacion.trim()), 
                  valor_total: Number(row.valor_total),
                  valor_flete: Number(row.valor_flete),      
                  fkid_tbl_usuarios: validateAndConvertId(usuarioId),
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
