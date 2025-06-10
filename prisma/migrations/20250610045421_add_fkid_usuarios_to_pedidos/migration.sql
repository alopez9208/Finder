-- AlterTable
ALTER TABLE "tbl_pedidos" ADD COLUMN     "fkid_tbl_usuarios" TEXT;

-- AddForeignKey
ALTER TABLE "tbl_pedidos" ADD CONSTRAINT "tbl_pedidos_fkid_tbl_usuarios_fkey" FOREIGN KEY ("fkid_tbl_usuarios") REFERENCES "tbl_usuarios"("pkusuario") ON DELETE SET NULL ON UPDATE CASCADE;
