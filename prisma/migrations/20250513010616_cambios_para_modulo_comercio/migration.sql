/*
  Warnings:

  - The primary key for the `tbl_clientes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fkid_tbl_departamentos` on the `tbl_clientes` table. All the data in the column will be lost.
  - You are about to drop the column `pktelefono` on the `tbl_clientes` table. All the data in the column will be lost.
  - You are about to drop the column `fktelefono_tbl_clientes` on the `tbl_pedidos` table. All the data in the column will be lost.
  - You are about to drop the `tbl_campañas` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[telefono]` on the table `tbl_clientes` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `telefono` to the `tbl_clientes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_clientes" DROP CONSTRAINT "tbl_clientes_pkey",
DROP COLUMN "fkid_tbl_departamentos",
DROP COLUMN "pktelefono",
ADD COLUMN     "pkid" BIGSERIAL NOT NULL,
ADD COLUMN     "telefono" VARCHAR(255) NOT NULL,
ALTER COLUMN "fkid_tbl_municipios" DROP NOT NULL,
ALTER COLUMN "fkid_tbl_comercios" DROP NOT NULL,
ADD CONSTRAINT "tbl_clientes_pkey" PRIMARY KEY ("pkid");

-- AlterTable
ALTER TABLE "tbl_comercios" ALTER COLUMN "fkusuario_tbl_usuarios" DROP NOT NULL,
ALTER COLUMN "fkusuario_tbl_usuarios" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "tbl_det_productos" ALTER COLUMN "fkid_tbl_productos" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tbl_pedidos" DROP COLUMN "fktelefono_tbl_clientes",
ADD COLUMN     "fkid_tbl_clientes" BIGINT,
ALTER COLUMN "fkid_tbl_det_productos" DROP NOT NULL,
ALTER COLUMN "fkid_tbl_transportadoras" DROP NOT NULL;

-- DropTable
DROP TABLE "tbl_campañas";

-- CreateTable
CREATE TABLE "tbl_campanias" (
    "pkid" BIGSERIAL NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "presupuesto_gastado" DOUBLE PRECISION NOT NULL,
    "fecha_inicio" DATE NOT NULL,
    "fecha_fin" DATE NOT NULL,
    "fkid_tbl_comercios" BIGINT,

    CONSTRAINT "tbl_campanias_pkey" PRIMARY KEY ("pkid")
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_clientes_telefono_key" ON "tbl_clientes"("telefono");

-- AddForeignKey
ALTER TABLE "tbl_campanias" ADD CONSTRAINT "tbl_campanias_fkid_tbl_comercios_fkey" FOREIGN KEY ("fkid_tbl_comercios") REFERENCES "tbl_comercios"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_clientes" ADD CONSTRAINT "tbl_clientes_fkid_tbl_municipios_fkey" FOREIGN KEY ("fkid_tbl_municipios") REFERENCES "tbl_municipios"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_clientes" ADD CONSTRAINT "tbl_clientes_fkid_tbl_comercios_fkey" FOREIGN KEY ("fkid_tbl_comercios") REFERENCES "tbl_comercios"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_det_productos" ADD CONSTRAINT "tbl_det_productos_fkid_tbl_productos_fkey" FOREIGN KEY ("fkid_tbl_productos") REFERENCES "tbl_productos"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_pedidos" ADD CONSTRAINT "tbl_pedidos_fkid_tbl_clientes_fkey" FOREIGN KEY ("fkid_tbl_clientes") REFERENCES "tbl_clientes"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_pedidos" ADD CONSTRAINT "tbl_pedidos_fkid_tbl_det_productos_fkey" FOREIGN KEY ("fkid_tbl_det_productos") REFERENCES "tbl_det_productos"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_pedidos" ADD CONSTRAINT "tbl_pedidos_fkid_tbl_transportadoras_fkey" FOREIGN KEY ("fkid_tbl_transportadoras") REFERENCES "tbl_transportadoras"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_comercios" ADD CONSTRAINT "tbl_comercios_fkusuario_tbl_usuarios_fkey" FOREIGN KEY ("fkusuario_tbl_usuarios") REFERENCES "tbl_usuarios"("pkusuario") ON DELETE SET NULL ON UPDATE CASCADE;
