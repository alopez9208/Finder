/*
  Warnings:

  - You are about to drop the column `fkid_tbl_comercios` on the `tbl_campanias` table. All the data in the column will be lost.
  - You are about to drop the column `fkid_tbl_comercios` on the `tbl_clientes` table. All the data in the column will be lost.
  - You are about to drop the column `fkusuario_tbl_usuarios` on the `tbl_comercios` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tbl_campanias" DROP CONSTRAINT "tbl_campanias_fkid_tbl_comercios_fkey";

-- DropForeignKey
ALTER TABLE "tbl_clientes" DROP CONSTRAINT "tbl_clientes_fkid_tbl_comercios_fkey";

-- DropForeignKey
ALTER TABLE "tbl_comercios" DROP CONSTRAINT "tbl_comercios_fkusuario_tbl_usuarios_fkey";

-- AlterTable
ALTER TABLE "tbl_campanias" DROP COLUMN "fkid_tbl_comercios",
ADD COLUMN     "fkid_tbl_comercios_usuarios" BIGINT;

-- AlterTable
ALTER TABLE "tbl_clientes" DROP COLUMN "fkid_tbl_comercios",
ADD COLUMN     "fkid_tbl_comercios_usuarios" BIGINT;

-- AlterTable
ALTER TABLE "tbl_comercios" DROP COLUMN "fkusuario_tbl_usuarios";

-- CreateTable
CREATE TABLE "tbl_comercios_usuarios" (
    "pkid" BIGSERIAL NOT NULL,
    "fkusuario_tbl_usuarios" TEXT NOT NULL,
    "fkid_tbl_comercios" BIGINT NOT NULL,
    "nivel_acceso" INTEGER NOT NULL,
    "fkid_tbl_estados_usuario" BIGINT NOT NULL,
    "fecha_asignacion" DATE NOT NULL,

    CONSTRAINT "tbl_comercios_usuarios_pkey" PRIMARY KEY ("pkid")
);

-- AddForeignKey
ALTER TABLE "tbl_campanias" ADD CONSTRAINT "tbl_campanias_fkid_tbl_comercios_usuarios_fkey" FOREIGN KEY ("fkid_tbl_comercios_usuarios") REFERENCES "tbl_comercios_usuarios"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_clientes" ADD CONSTRAINT "tbl_clientes_fkid_tbl_comercios_usuarios_fkey" FOREIGN KEY ("fkid_tbl_comercios_usuarios") REFERENCES "tbl_comercios_usuarios"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_comercios_usuarios" ADD CONSTRAINT "tbl_comercios_usuarios_fkusuario_tbl_usuarios_fkey" FOREIGN KEY ("fkusuario_tbl_usuarios") REFERENCES "tbl_usuarios"("pkusuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_comercios_usuarios" ADD CONSTRAINT "tbl_comercios_usuarios_fkid_tbl_comercios_fkey" FOREIGN KEY ("fkid_tbl_comercios") REFERENCES "tbl_comercios"("pkid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_comercios_usuarios" ADD CONSTRAINT "tbl_comercios_usuarios_fkid_tbl_estados_usuario_fkey" FOREIGN KEY ("fkid_tbl_estados_usuario") REFERENCES "tbl_estados_usuario"("pkid") ON DELETE RESTRICT ON UPDATE CASCADE;
