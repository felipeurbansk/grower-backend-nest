/*
  Warnings:

  - Made the column `value` on table `Humidities` required. This step will fail if there are existing NULL values in that column.
  - Made the column `value` on table `Temperatures` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Humidities" ALTER COLUMN "value" SET NOT NULL;

-- AlterTable
ALTER TABLE "Temperatures" ALTER COLUMN "value" SET NOT NULL;
