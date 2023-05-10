/*
  Warnings:

  - Added the required column `light_id` to the `Farmings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Farmings" ADD COLUMN     "light_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Farmings" ADD CONSTRAINT "Farmings_light_id_fkey" FOREIGN KEY ("light_id") REFERENCES "Lights"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
