/*
  Warnings:

  - Added the required column `fkid_tbl_empresas` to the `tbl_productos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_productos" ADD COLUMN     "fkid_tbl_empresas" BIGINT NOT NULL;

-- CreateTable
CREATE TABLE "tbl_empresas" (
    "pkid" BIGSERIAL NOT NULL,
    "nit" VARCHAR(255) NOT NULL,
    "nombre" VARCHAR(255) NOT NULL,
    "telefono" VARCHAR(255) NOT NULL,
    "correo" VARCHAR(255) NOT NULL,

    CONSTRAINT "tbl_empresas_pkey" PRIMARY KEY ("pkid")
);

-- AddForeignKey
ALTER TABLE "tbl_productos" ADD CONSTRAINT "tbl_productos_fkid_tbl_empresas_fkey" FOREIGN KEY ("fkid_tbl_empresas") REFERENCES "tbl_empresas"("pkid") ON DELETE RESTRICT ON UPDATE CASCADE;
