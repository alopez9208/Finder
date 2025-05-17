import prisma from "@/lib/prisma";
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { detalles } = await request.json();

    if (!Array.isArray(detalles) || detalles.length === 0) {
      return NextResponse.json({ success: false, message: "No hay detalles de productos para guardar." }, { status: 400 });
    }

    // Usar createMany para insertar múltiples registros de golpe
    const newDetalles = await prisma.tbl_det_productos.createMany({
      data: detalles.map(det => ({
        cantidad: det.cantidad,
        precio_venta_unitario: det.precio_venta_unitario,
        costo_unitario: det.costo_unitario,
        fkid_tbl_productos: BigInt(det.fkid_tbl_productos), // Asegúrate de convertir a BigInt
        fkid_tbl_pedidos: BigInt(det.fkid_tbl_pedidos), // Asegúrate de convertir a BigInt
      })),
      skipDuplicates: true, // Opcional: Para evitar duplicados si la combinación de FKs es única
    });

    return NextResponse.json({ success: true, count: newDetalles.count }, { status: 201 });
  } catch (error) {
    console.error("Error al guardar detalles de productos:", error);
    return NextResponse.json({ success: false, message: "Error al guardar detalles de productos." }, { status: 500 });
  }
}