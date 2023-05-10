/*
  Warnings:

  - You are about to drop the `Farming` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `seed_id` on the `Plants` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Farming" DROP CONSTRAINT "Farming_base_component_id_fkey";

-- DropForeignKey
ALTER TABLE "Farming" DROP CONSTRAINT "Farming_grow_id_fkey";

-- DropForeignKey
ALTER TABLE "Farming" DROP CONSTRAINT "Farming_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Humidities" DROP CONSTRAINT "Humidities_farming_id_fkey";

-- DropForeignKey
ALTER TABLE "Plants" DROP CONSTRAINT "Plants_farming_id_fkey";

-- DropForeignKey
ALTER TABLE "Temperatures" DROP CONSTRAINT "Temperatures_farming_id_fkey";

-- AlterTable
ALTER TABLE "Plants" DROP COLUMN "seed_id",
ADD COLUMN     "seed_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Farming";

-- CreateTable
CREATE TABLE "Farmings" (
    "id" SERIAL NOT NULL,
    "grow_id" INTEGER NOT NULL,
    "base_component_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Farmings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Temperatures" ADD CONSTRAINT "Temperatures_farming_id_fkey" FOREIGN KEY ("farming_id") REFERENCES "Farmings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Humidities" ADD CONSTRAINT "Humidities_farming_id_fkey" FOREIGN KEY ("farming_id") REFERENCES "Farmings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plants" ADD CONSTRAINT "Plants_farming_id_fkey" FOREIGN KEY ("farming_id") REFERENCES "Farmings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Plants" ADD CONSTRAINT "Plants_seed_id_fkey" FOREIGN KEY ("seed_id") REFERENCES "Seeds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmings" ADD CONSTRAINT "Farmings_grow_id_fkey" FOREIGN KEY ("grow_id") REFERENCES "Grows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmings" ADD CONSTRAINT "Farmings_base_component_id_fkey" FOREIGN KEY ("base_component_id") REFERENCES "BaseComponents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farmings" ADD CONSTRAINT "Farmings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
