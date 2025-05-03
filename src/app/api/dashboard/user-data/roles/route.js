import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const roles = await prisma.tbl_roles.findMany({
      select: {
        pkid: true,
        nombre: true,
        nomenclatura: true,
      },
    });

    const rolesSerializados = roles.map((role) => ({
      ...role,
      pkid: role.pkid.toString(),
    }));

    return new Response(
      JSON.stringify({ success: true, roles: rolesSerializados }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al obtener roles:", error);
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
  const { nombre, nomenclatura } = await request.json();

  try {
    const newRole = await prisma.tbl_roles.create({
      data: {
        nombre,
        nomenclatura,
      },
    });

    // Convertir BigInt a String
    const serializedRole = {
      ...newRole,
      pkid: newRole.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, role: serializedRole }),
      {
        status: 201,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al crear rol:", error);
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
  const { pkid, nombre, nomenclatura } = await request.json();

  try {
    const updatedRole = await prisma.tbl_roles.update({
      where: { pkid: BigInt(pkid) },
      data: { nombre, nomenclatura },
    });

    const serialized = {
      ...updatedRole,
      pkid: updatedRole.pkid.toString(),
    };

    return new Response(
      JSON.stringify({ success: true, role: serialized }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al actualizar rol:", error);
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
