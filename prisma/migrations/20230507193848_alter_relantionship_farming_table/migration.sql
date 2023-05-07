/*
  Warnings:

  - Added the required column `farming_id` to the `Plants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Plants" ADD COLUMN     "farming_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Farming" (
    "id" SERIAL NOT NULL,
    "grow_id" INTEGER NOT NULL,

    CONSTRAINT "Farming_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plants" ADD CONSTRAINT "Plants_farming_id_fkey" FOREIGN KEY ("farming_id") REFERENCES "Farming"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farming" ADD CONSTRAINT "Farming_grow_id_fkey" FOREIGN KEY ("grow_id") REFERENCES "Grows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
