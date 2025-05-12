-- DropForeignKey
ALTER TABLE "tbl_productos" DROP CONSTRAINT "tbl_productos_fkid_tbl_empresas_fkey";

-- AlterTable
ALTER TABLE "tbl_productos" ALTER COLUMN "fkid_tbl_empresas" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tbl_productos" ADD CONSTRAINT "tbl_productos_fkid_tbl_empresas_fkey" FOREIGN KEY ("fkid_tbl_empresas") REFERENCES "tbl_empresas"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;
