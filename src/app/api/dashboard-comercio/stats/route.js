import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request) {
  const comercioUsuarioId = request.headers.get("x-comercio-id");

  if (!comercioUsuarioId) {
    return NextResponse.json(
      { success: false, message: "ID de comercio no proporcionado" },
      { status: 400 }
    );
  }

  try {
    const relacion = await prisma.tbl_comercios_usuarios.findUnique({
      where: { pkid: BigInt(comercioUsuarioId) },
      select: { fkid_tbl_comercios: true },
    });

    if (!relacion) {
      return NextResponse.json(
        { success: false, message: "No se encontró la relación comercio-usuario" },
        { status: 404 }
      );
    }

    const comercioId = relacion.fkid_tbl_comercios;
    const { searchParams } = new URL(request.url);
    const pedidoIdsParam = searchParams.get('pedidoIds');

    // Filtro base por comercio en clientes->comercios_usuarios->fkid_tbl_comercios
    const filtroBase = {
      pedidos: {
        clientes: {
          comercios_usuarios: {
            fkid_tbl_comercios: comercioId,
          },
        },
      },
    };

    // Si hay pedidoIds, añadir filtro
    const filtroPedidoIds = pedidoIdsParam
      ? {
          pedidos: {
            pkid: {
              in: pedidoIdsParam
                .split(',')
                .map(id => parseInt(id))
                .filter(id => !isNaN(id)),
            },
          },
        }
      : {};

    // Combinar filtros con AND si hay pedidoIds
    const filtros = pedidoIdsParam ? { AND: [filtroBase, filtroPedidoIds] } : filtroBase;

    const detalles = await prisma.tbl_det_productos.findMany({
      where: filtros,
      select: {
        costo_unitario: true,
        cantidad: true,
      },
    });

    const costoTotal = detalles.reduce((total, item) => total + item.costo_unitario * item.cantidad, 0);

    return NextResponse.json({ success: true, costoTotal });
  } catch (error) {
    console.error("Error en /api/dashboard-comercio/stats:", error);
    return NextResponse.json(
      { success: false, message: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
