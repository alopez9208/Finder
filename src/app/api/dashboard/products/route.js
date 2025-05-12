import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.tbl_productos.findMany({
      select: {
        pkid: true,
        nombre: true,
        costo: true,
        valor:true,
        fkid_tbl_empresas: true,
        empresas: {
          select: {
            nombre: true, // ✅ Nomenclatura de la empresa
          },
        },
      },
    });

    const productsSerializados = products.map((item) => ({
      pkid: item.pkid.toString(),
      nombre: item.nombre,
      costo: item.costo,
      valor: item.valor,
      fkid_tbl_empresas: item.fkid_tbl_empresas?.toString() ?? null,
      nombre_empresa: item.empresas?.nombre ?? null, // ✅ Incluye la nomenclatura de la empresa
    }));

    return new Response(
      JSON.stringify({ success: true, products: productsSerializados }),  
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al obtener productos:", error);  
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
  const { nombre, costo: costoString, valor: valorString, fkid_tbl_empresas } = await request.json(); // ✅ incluirlo

  try {

    const costo = parseFloat(costoString);
    const valorLimpio = valorString ? valorString.trim() : ''; // Limpiar si no es null o undefined
    const valor = parseFloat(valorLimpio);

    if (isNaN(costo) || isNaN(valor)) {
      return new Response(
        JSON.stringify({ success: false, message: "Los campos costo y valor deben ser números válidos." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const nuevoProducto = await prisma.tbl_productos.create({
      data: {
        nombre,
        costo,
        valor,
        fkid_tbl_empresas: BigInt(fkid_tbl_empresas), // ✅ guardarlo
      },
    });

    const serializado = {
        ...nuevoProducto,
      pkid: nuevoProducto.pkid.toString(),
      fkid_tbl_empresas: nuevoProducto.fkid_tbl_empresas.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, product: serializado }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear producto:", error);
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
  const { pkid, nombre, costo: costoString, valor: valorString, fkid_tbl_empresas } = await request.json();

  try {
    // Convertir costo y valor a números (float)
    const costo = parseFloat(costoString);
    const valor = parseFloat(valorString);

    // Validar que costo y valor sean números válidos
    if (isNaN(costo) || isNaN(valor)) {
      return new Response(
        JSON.stringify({ success: false, message: "Los campos costo y valor deben ser números válidos." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Preparamos el objeto de datos de actualización, solo con los campos que realmente se modifican
    const dataToUpdate = {
      nombre,
      costo,
      valor,
    };

    // Solo añadir fkid_tbl_empresas si es necesario
    if (fkid_tbl_empresas) {
      dataToUpdate.fkid_tbl_empresas = BigInt(fkid_tbl_empresas);
    }

    const productoActualizado = await prisma.tbl_productos.update({
      where: { pkid: BigInt(pkid) },
      data: dataToUpdate, // Solo enviamos lo que fue modificado
    });

    const serializado = {
      ...productoActualizado,
      pkid: productoActualizado.pkid.toString(),
      fkid_tbl_empresas: productoActualizado.fkid_tbl_empresas.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, product: serializado }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

