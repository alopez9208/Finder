/*
  Warnings:

  - You are about to drop the column `contraseña` on the `tbl_usuarios` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[nombre]` on the table `tbl_comercios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nit]` on the table `tbl_empresas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `tbl_municipios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomenclatura]` on the table `tbl_municipios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `tbl_productos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `tbl_roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomenclatura]` on the table `tbl_roles` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nombre]` on the table `tbl_transportadoras` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nomenclatura]` on the table `tbl_transportadoras` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `contrasena` to the `tbl_usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tbl_usuarios" DROP COLUMN "contraseña",
ADD COLUMN     "contrasena" VARCHAR(255) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tbl_comercios_nombre_key" ON "tbl_comercios"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_empresas_nit_key" ON "tbl_empresas"("nit");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_municipios_nombre_key" ON "tbl_municipios"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_municipios_nomenclatura_key" ON "tbl_municipios"("nomenclatura");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_productos_nombre_key" ON "tbl_productos"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_roles_nombre_key" ON "tbl_roles"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_roles_nomenclatura_key" ON "tbl_roles"("nomenclatura");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_transportadoras_nombre_key" ON "tbl_transportadoras"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_transportadoras_nomenclatura_key" ON "tbl_transportadoras"("nomenclatura");
