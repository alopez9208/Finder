import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';

// Función para manejar solicitudes GET: Obtener detalles de un pedido específico
export async function GET(request, { params }) {
  const pedidoId = params.id;

  if (!pedidoId) {
    return NextResponse.json({ success: false, message: "ID de pedido no proporcionado." }, { status: 400 });
  }

  try {
    const detalles = await prisma.tbl_det_productos.findMany({
      where: {
        fkid_tbl_pedidos: BigInt(pedidoId),
      },
      include: {
        productos: {
          select: {
            pkid: true,
            nombre: true,
            valor: true,
            costo: true,
          },
        },
      },
    });

    // Verifica que hay detalles para el pedido
    if (!detalles.length) {
      return NextResponse.json({ success: false, message: "No se encontraron detalles para este pedido." }, { status: 404 });
    }

    // Serializa los detalles
    const detallesSerializados = detalles.map(det => ({
      pkid: det.pkid.toString(),
      cantidad: det.cantidad,
      precio_venta_unitario: parseFloat(det.precio_venta_unitario),
      costo_unitario: parseFloat(det.costo_unitario),
      fkid_tbl_productos: det.fkid_tbl_productos ? det.fkid_tbl_productos.toString() : null,
      fkid_tbl_pedidos: det.fkid_tbl_pedidos.toString(),
      productos: det.productos ? {
        nombre: det.productos.nombre,
        precio_venta: parseFloat(det.productos.valor),
        costo: parseFloat(det.productos.costo),
      } : {
        nombre: "Producto no encontrado",
        precio_venta: 0,
        costo: 0
      },
    }));

    return NextResponse.json({ success: true, detalles: detallesSerializados }, { status: 200 });
  } catch (error) {
    console.error("Error al obtener detalles de pedido:", error);
    return NextResponse.json({ success: false, message: "Error interno del servidor al obtener detalles de pedido." }, { status: 500 });
  }
}

// Función para manejar solicitudes DELETE: Eliminar detalles de un pedido específico
export async function DELETE(request, { params }) {
  const pedidoId = params.id; // Captura el ID del pedido de la URL

  if (!pedidoId) {
    return NextResponse.json({ success: false, message: "ID de pedido no proporcionado para eliminar." }, { status: 400 });
  }

  try {
    // Elimina todos los detalles de productos asociados a este pedido
    const deleteResult = await prisma.tbl_det_productos.deleteMany({
      where: {
        fkid_tbl_pedidos: BigInt(pedidoId),
      },
    });

    return NextResponse.json({
      success: true,
      count: deleteResult.count,
      message: "Detalles de pedido eliminados correctamente."
    }, { status: 200 });
  } catch (error) {
    console.error("Error al eliminar detalles de pedido:", error);
    return NextResponse.json({ success: false, message: "Error interno del servidor al eliminar detalles de pedido." }, { status: 500 });
  }
}
