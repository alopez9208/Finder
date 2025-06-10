import prisma from '@/lib/prisma';

export async function GET(request) {
  const comercioUsuarioId = request.headers.get("x-comercio-id");

  if (!comercioUsuarioId) {
    return new Response(
      JSON.stringify({ success: false, message: "ID de comercio usuario no proporcionado" }),
      { status: 400 }
    );
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
      return new Response(
        JSON.stringify({ success: false, message: "No se encontró la relación comercio-usuario" }),
        { status: 404 }
      );
    }

    const comercioId = relacion.fkid_tbl_comercios;

    const relaciones = await prisma.tbl_comercios_usuarios.findMany({
        where: {
            fkid_tbl_comercios: comercioId,
        },
        include: {
            usuarios: {
                select: {
                    pkusuario: true,
                    persona: {
                        select: {
                            nombres: true,
                            apellidos: true,
                        }
                    }
                }
            }
        }
    });
    
    const usuariosRelacionados = relaciones.map((rel) => ({
        id: rel.usuarios.pkusuario,
        nombre: `${rel.usuarios.persona.nombres} ${rel.usuarios.persona.apellidos}`,
    }));
    

    return new Response(
      JSON.stringify({ success: true, usuarios: usuariosRelacionados }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al obtener usuarios relacionados:', error);
    return new Response(
      JSON.stringify({ success: false, error: 'Error del servidor' }),
      { status: 500 }
    );
  }
}
