/*
  Warnings:

  - Made the column `fkid_tbl_productos` on table `tbl_det_productos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fkid_tbl_pedidos` on table `tbl_det_productos` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `valor_flete` to the `tbl_pedidos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "tbl_det_productos" DROP CONSTRAINT "tbl_det_productos_fkid_tbl_pedidos_fkey";

-- DropForeignKey
ALTER TABLE "tbl_det_productos" DROP CONSTRAINT "tbl_det_productos_fkid_tbl_productos_fkey";

-- AlterTable
ALTER TABLE "tbl_det_productos" ALTER COLUMN "fkid_tbl_productos" SET NOT NULL,
ALTER COLUMN "fkid_tbl_pedidos" SET NOT NULL;

-- AlterTable
ALTER TABLE "tbl_pedidos" ADD COLUMN     "valor_flete" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "tbl_det_productos" ADD CONSTRAINT "tbl_det_productos_fkid_tbl_productos_fkey" FOREIGN KEY ("fkid_tbl_productos") REFERENCES "tbl_productos"("pkid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_det_productos" ADD CONSTRAINT "tbl_det_productos_fkid_tbl_pedidos_fkey" FOREIGN KEY ("fkid_tbl_pedidos") REFERENCES "tbl_pedidos"("pkid") ON DELETE RESTRICT ON UPDATE CASCADE;
