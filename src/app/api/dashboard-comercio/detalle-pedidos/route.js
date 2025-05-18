import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { detalles } = await request.json();

    if (!Array.isArray(detalles) || detalles.length === 0) {
      return NextResponse.json({ success: false, message: "No hay detalles de productos para guardar." }, { status: 400 });
    }

    // Verificar que todos los detalles son válidos
    for (const det of detalles) {
      if (
        !det.fkid_tbl_productos ||
        !det.fkid_tbl_pedidos ||
        isNaN(det.cantidad) ||
        isNaN(det.precio_venta_unitario) ||
        isNaN(det.costo_unitario)
      ) {
        return NextResponse.json({
          success: false,
          message: "Uno o más detalles de productos tienen datos inválidos.",
        }, { status: 400 });
      }
    }

    // Usar createMany para insertar múltiples registros de golpe
    const newDetalles = await prisma.tbl_det_productos.createMany({
      data: detalles.map(det => ({
        cantidad: Number(det.cantidad),
        precio_venta_unitario: Number(det.precio_venta_unitario),
        costo_unitario: Number(det.costo_unitario),
        fkid_tbl_productos: BigInt(det.fkid_tbl_productos), // Convertir a BigInt
        fkid_tbl_pedidos: BigInt(det.fkid_tbl_pedidos), // Convertir a BigInt
      })),
      skipDuplicates: true, // Opcional: Para evitar duplicados si la combinación de FKs es única
    });

    return NextResponse.json({ success: true, count: newDetalles.count }, { status: 201 });
  } catch (error) {
    console.error("Error al guardar detalles de productos:", error);

    // Verificar si el error es por clave foránea (FK)
    if (error.code === "P2003") {
      return NextResponse.json({
        success: false,
        message: "Error: Algún producto o pedido no existe.",
      }, { status: 400 });
    }

    return NextResponse.json({ success: false, message: "Error al guardar detalles de productos." }, { status: 500 });
  }
}
