import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // asegúrate de que esta ruta sea correcta

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const comercioId = searchParams.get('comercioId');

        if (!comercioId) {
            return NextResponse.json({ success: false, message: "comercioId requerido" }, { status: 400 });
        }

        const detalles = await prisma.tbl_det_productos.findMany({
            where: {
                pedidos: {
                    clientes: {
                        fkid_tbl_comercios: BigInt(comercioId),
                    }
                }
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
