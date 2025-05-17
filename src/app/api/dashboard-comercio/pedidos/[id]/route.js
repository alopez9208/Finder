import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';

// Función para manejar solicitudes GET: Obtener detalles de un pedido específico
export async function GET(request, { params }) {
  const pedidoId = params.id; // Captura el ID del pedido de la URL

  if (!pedidoId) {
    return NextResponse.json({ success: false, message: "ID de pedido no proporcionado." }, { status: 400 });
  }

  try {
    const detalles = await prisma.tbl_det_productos.findMany({
      where: {
        fkid_tbl_pedidos: BigInt(pedidoId), // Filtra por el ID del pedido
      },
      // Incluye la información del producto para mostrar en el frontend (nombre, precio, costo)
      include: {
        productos: {
          select: {
            nombre: true,
            valor: true, // Asegúrate de que 'valor' es tu campo de precio de venta en tbl_productos
            costo: true, // Asegúrate de que 'costo' es tu campo de costo en tbl_productos
          },
        },
      },
    });

    // Serializa los datos, convirtiendo BigInts a string y Floats a número
    const detallesSerializados = detalles.map(det => ({
      pkid: det.pkid.toString(),
      cantidad: det.cantidad,
      precio_venta_unitario: parseFloat(det.precio_venta_unitario), // Usa el nombre de campo final
      costo_unitario: parseFloat(det.costo_unitario), // Usa el nombre de campo final
      fkid_tbl_productos: det.fkid_tbl_productos.toString(),
      fkid_tbl_pedidos: det.fkid_tbl_pedidos.toString(),
      productos: {
        nombre: det.productos.nombre,
        precio_venta: parseFloat(det.productos.valor), // Aquí usa 'valor' de tbl_productos
        costo: parseFloat(det.productos.costo), // Aquí usa 'costo' de tbl_productos
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

    return NextResponse.json({ success: true, count: deleteResult.count, message: "Detalles de pedido eliminados correctamente." }, { status: 200 });
  } catch (error) {
    console.error("Error al eliminar detalles de pedido:", error);
    return NextResponse.json({ success: false, message: "Error interno del servidor al eliminar detalles de pedido." }, { status: 500 });
  }
}