/*
  Warnings:

  - You are about to drop the column `nombre` on the `tbl_det_productos` table. All the data in the column will be lost.
  - You are about to drop the column `fecha` on the `tbl_pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `fkid_tbl_det_productos` on the `tbl_pedidos` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `tbl_pedidos` table. All the data in the column will be lost.
  - Added the required column `cantidad` to the `tbl_det_productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio_unitario` to the `tbl_det_productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_creacion` to the `tbl_pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valor_total` to the `tbl_pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tbl_pedidos" DROP CONSTRAINT "tbl_pedidos_fkid_tbl_det_productos_fkey";

-- AlterTable
ALTER TABLE "tbl_det_productos" DROP COLUMN "nombre",
ADD COLUMN     "cantidad" INTEGER NOT NULL,
ADD COLUMN     "fkid_tbl_pedidos" BIGINT,
ADD COLUMN     "precio_unitario" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "tbl_pedidos" DROP COLUMN "fecha",
DROP COLUMN "fkid_tbl_det_productos",
DROP COLUMN "valor",
ADD COLUMN     "fecha_creacion" DATE NOT NULL,
ADD COLUMN     "valor_total" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "tbl_det_productos" ADD CONSTRAINT "tbl_det_productos_fkid_tbl_pedidos_fkey" FOREIGN KEY ("fkid_tbl_pedidos") REFERENCES "tbl_pedidos"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;
