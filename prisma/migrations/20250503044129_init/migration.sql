-- CreateTable
CREATE TABLE "tbl_campañas" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "presupuesto_gastado" DOUBLE PRECISION NOT NULL,
    "fecha_inicio" DATE NOT NULL,
    "fecha_fin" DATE NOT NULL,
    "fkid_tbl_comercios" BIGINT NOT NULL,

    CONSTRAINT "tbl_campañas_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_clientes" (
    "pktelefono" VARCHAR(255) NOT NULL,
    "nombres" VARCHAR(255) NOT NULL,
    "apellidos" VARCHAR(255) NOT NULL,
    "correo" VARCHAR(255) NOT NULL,
    "direccion" VARCHAR(255) NOT NULL,
    "fkid_tbl_departamentos" BIGINT NOT NULL,
    "fkid_tbl_municipios" BIGINT NOT NULL,
    "fkid_tbl_comercios" BIGINT NOT NULL,

    CONSTRAINT "tbl_clientes_pkey" PRIMARY KEY ("pktelefono")
);

-- CreateTable
CREATE TABLE "tbl_departamentos" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "nomenclatura" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbl_departamentos_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_det_productos" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "fkid_tbl_productos" BIGINT NOT NULL,

    CONSTRAINT "tbl_det_productos_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_estados_usuario" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "nomenclatura" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbl_estados_usuario_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_municipios" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "nomenclatura" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbl_municipios_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_pedidos" (
    "pkid" BIGSERIAL NOT NULL,
    "fktelefono_tbl_clientes" VARCHAR(255) NOT NULL,
    "fkid_tbl_det_productos" BIGINT NOT NULL,
    "fkid_tbl_transportadoras" BIGINT NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "fecha" DATE NOT NULL,

    CONSTRAINT "tbl_pedidos_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_personas" (
    "pkid" BIGSERIAL NOT NULL,
    "nombres" VARCHAR(255) NOT NULL,
    "apellidos" VARCHAR(255) NOT NULL,
    "correo" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbl_personas_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_productos" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "costo" DOUBLE PRECISION NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "tbl_productos_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_roles" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "nomenclatura" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbl_roles_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_comercios" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "telefono" VARCHAR(255) NOT NULL,
    "correo" VARCHAR(255) NOT NULL,
    "fkusuario_tbl_usuarios" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbl_comercios_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_transportadoras" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "nomenclatura" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbl_transportadoras_pkey" PRIMARY KEY ("pkid")
);

-- CreateTable
CREATE TABLE "tbl_usuarios" (
    "pkusuario" VARCHAR(255) NOT NULL,
    "contraseña" VARCHAR(255) NOT NULL,
    "fkid_tbl_roles" BIGINT NOT NULL,
    "fkid_tbl_estados_usuario" BIGINT NOT NULL,
    "fkid_tbl_personas" BIGINT NOT NULL,

    CONSTRAINT "tbl_usuarios_pkey" PRIMARY KEY ("pkusuario")
);

-- AddForeignKey
ALTER TABLE "tbl_usuarios" ADD CONSTRAINT "tbl_usuarios_fkid_tbl_personas_fkey" FOREIGN KEY ("fkid_tbl_personas") REFERENCES "tbl_personas"("pkid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_usuarios" ADD CONSTRAINT "tbl_usuarios_fkid_tbl_roles_fkey" FOREIGN KEY ("fkid_tbl_roles") REFERENCES "tbl_roles"("pkid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_usuarios" ADD CONSTRAINT "tbl_usuarios_fkid_tbl_estados_usuario_fkey" FOREIGN KEY ("fkid_tbl_estados_usuario") REFERENCES "tbl_estados_usuario"("pkid") ON DELETE RESTRICT ON UPDATE CASCADE;
