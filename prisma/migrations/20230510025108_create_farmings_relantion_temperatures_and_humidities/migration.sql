/*
  Warnings:

  - You are about to drop the column `base_component_id` on the `Humidities` table. All the data in the column will be lost.
  - You are about to drop the column `base_component_id` on the `Temperatures` table. All the data in the column will be lost.
  - Added the required column `base_component_id` to the `Farming` table without a default value. This is not possible if the table is not empty.
  - Added the required column `farming_id` to the `Humidities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `farming_id` to the `Temperatures` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Humidities" DROP CONSTRAINT "Humidities_base_component_id_fkey";

-- DropForeignKey
ALTER TABLE "Temperatures" DROP CONSTRAINT "Temperatures_base_component_id_fkey";

-- AlterTable
ALTER TABLE "Farming" ADD COLUMN     "base_component_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Humidities" DROP COLUMN "base_component_id",
ADD COLUMN     "farming_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Temperatures" DROP COLUMN "base_component_id",
ADD COLUMN     "farming_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Temperatures" ADD CONSTRAINT "Temperatures_farming_id_fkey" FOREIGN KEY ("farming_id") REFERENCES "Farming"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Humidities" ADD CONSTRAINT "Humidities_farming_id_fkey" FOREIGN KEY ("farming_id") REFERENCES "Farming"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farming" ADD CONSTRAINT "Farming_base_component_id_fkey" FOREIGN KEY ("base_component_id") REFERENCES "BaseComponents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
