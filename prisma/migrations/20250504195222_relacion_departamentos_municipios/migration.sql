-- AlterTable
ALTER TABLE "tbl_municipios" ADD COLUMN     "fkid_tbl_departamentos" BIGINT;

-- AddForeignKey
ALTER TABLE "tbl_municipios" ADD CONSTRAINT "tbl_municipios_fkid_tbl_departamentos_fkey" FOREIGN KEY ("fkid_tbl_departamentos") REFERENCES "tbl_departamentos"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;
