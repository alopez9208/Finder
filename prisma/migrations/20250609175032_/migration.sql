/*
  Warnings:

  - A unique constraint covering the columns `[guia]` on the table `tbl_pedidos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "tbl_pedidos" ADD COLUMN     "guia" VARCHAR(255);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_pedidos_guia_key" ON "tbl_pedidos"("guia");
