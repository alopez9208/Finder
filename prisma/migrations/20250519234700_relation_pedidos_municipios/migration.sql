-- AlterTable
ALTER TABLE "tbl_pedidos" ADD COLUMN     "fkid_tbl_municipios" BIGINT;

-- AddForeignKey
ALTER TABLE "tbl_pedidos" ADD CONSTRAINT "tbl_pedidos_fkid_tbl_municipios_fkey" FOREIGN KEY ("fkid_tbl_municipios") REFERENCES "tbl_municipios"("pkid") ON DELETE SET NULL ON UPDATE CASCADE;
