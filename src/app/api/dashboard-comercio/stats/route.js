import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const comercioId = searchParams.get('comercioId');
        const pedidoIdsParam = searchParams.get('pedidoIds'); // puede venir como '1,2,3'

        if (!comercioId) {
            return NextResponse.json({ success: false, message: "comercioId requerido" }, { status: 400 });
        }

        const filters = [];

        filters.push({
            pedidos: {
                clientes: {
                    fkid_tbl_comercios_usuarios: BigInt(comercioId),
                },
            },
        });

        if (pedidoIdsParam) {
            const pedidoIds = pedidoIdsParam
                .split(',')
                .map((id) => parseInt(id))
                .filter((id) => !isNaN(id));

            if (pedidoIds.length > 0) {
                filters.push({
                    pedidos: {
                        pkid: { in: pedidoIds },
                    },
                });
            }
        }

        const detalles = await prisma.tbl_det_productos.findMany({
            where: {
                AND: filters,
            },
            select: {
                costo_unitario: true,
                cantidad: true,
            },
        });


        const costoTotal = detalles.reduce((total, item) => {
            return total + (item.costo_unitario * item.cantidad);
        }, 0);

        return NextResponse.json({ success: true, costoTotal });
    } catch (error) {
        console.error("Error en /api/dashboard-comercio/stats:", error);
        return NextResponse.json({ success: false, message: "Error interno del servidor" }, { status: 500 });
    }
}
