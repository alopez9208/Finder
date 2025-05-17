/*
  Warnings:

  - You are about to drop the column `precio_unitario` on the `tbl_det_productos` table. All the data in the column will be lost.
  - Added the required column `costo_unitario` to the `tbl_det_productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio_venta_unitario` to the `tbl_det_productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_det_productos" DROP COLUMN "precio_unitario",
ADD COLUMN     "costo_unitario" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precio_venta_unitario" DOUBLE PRECISION NOT NULL;
