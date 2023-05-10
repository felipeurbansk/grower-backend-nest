/*
  Warnings:

  - You are about to drop the `BaseComponents` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Farmings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Grows` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Humidities` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Lights` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Plants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Seeds` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Temperatures` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BaseComponents" DROP CONSTRAINT "BaseComponents_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Farmings" DROP CONSTRAINT "Farmings_base_component_id_fkey";

-- DropForeignKey
ALTER TABLE "Farmings" DROP CONSTRAINT "Farmings_grow_id_fkey";

-- DropForeignKey
ALTER TABLE "Farmings" DROP CONSTRAINT "Farmings_light_id_fkey";

-- DropForeignKey
ALTER TABLE "Farmings" DROP CONSTRAINT "Farmings_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Grows" DROP CONSTRAINT "Grows_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Humidities" DROP CONSTRAINT "Humidities_farming_id_fkey";

-- DropForeignKey
ALTER TABLE "Lights" DROP CONSTRAINT "Lights_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Plants" DROP CONSTRAINT "Plants_farming_id_fkey";

-- DropForeignKey
ALTER TABLE "Plants" DROP CONSTRAINT "Plants_seed_id_fkey";

-- DropForeignKey
ALTER TABLE "Seeds" DROP CONSTRAINT "Seeds_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Temperatures" DROP CONSTRAINT "Temperatures_farming_id_fkey";

-- DropTable
DROP TABLE "BaseComponents";

-- DropTable
DROP TABLE "Farmings";

-- DropTable
DROP TABLE "Grows";

-- DropTable
DROP TABLE "Humidities";

-- DropTable
DROP TABLE "Lights";

-- DropTable
DROP TABLE "Plants";

-- DropTable
DROP TABLE "Seeds";

-- DropTable
DROP TABLE "Temperatures";

-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "grows" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "depth" INTEGER NOT NULL,
    "status" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "grows_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seeds" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "bank_name" TEXT,
    "vegetative_weeks" INTEGER,
    "flowering_weeks" INTEGER,
    "per_square_meter" INTEGER,
    "status" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "seeds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lights" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "watts" INTEGER,
    "lumens" INTEGER,
    "status" TEXT,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "lights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "temperatures" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "farming_id" INTEGER NOT NULL,

    CONSTRAINT "temperatures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "humidities" (
    "id" SERIAL NOT NULL,
    "value" INTEGER NOT NULL,
    "farming_id" INTEGER NOT NULL,

    CONSTRAINT "humidities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "base_components" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "mac" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "base_components_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "plants" (
    "id" SERIAL NOT NULL,
    "qrcode" TEXT,
    "init_germination" TIMESTAMP(3),
    "init_vegetative" TIMESTAMP(3),
    "init_flowering" TIMESTAMP(3),
    "init_drying" TIMESTAMP(3),
    "init_cure" TIMESTAMP(3),
    "farming_id" INTEGER NOT NULL,
    "seed_id" INTEGER NOT NULL,

    CONSTRAINT "plants_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "farmings" (
    "id" SERIAL NOT NULL,
    "light_id" INTEGER NOT NULL,
    "grow_id" INTEGER NOT NULL,
    "base_component_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "farmings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "status" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "grows" ADD CONSTRAINT "grows_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "seeds" ADD CONSTRAINT "seeds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lights" ADD CONSTRAINT "lights_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "temperatures" ADD CONSTRAINT "temperatures_farming_id_fkey" FOREIGN KEY ("farming_id") REFERENCES "farmings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "humidities" ADD CONSTRAINT "humidities_farming_id_fkey" FOREIGN KEY ("farming_id") REFERENCES "farmings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "base_components" ADD CONSTRAINT "base_components_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plants" ADD CONSTRAINT "plants_farming_id_fkey" FOREIGN KEY ("farming_id") REFERENCES "farmings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "plants" ADD CONSTRAINT "plants_seed_id_fkey" FOREIGN KEY ("seed_id") REFERENCES "seeds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farmings" ADD CONSTRAINT "farmings_grow_id_fkey" FOREIGN KEY ("grow_id") REFERENCES "grows"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farmings" ADD CONSTRAINT "farmings_light_id_fkey" FOREIGN KEY ("light_id") REFERENCES "lights"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farmings" ADD CONSTRAINT "farmings_base_component_id_fkey" FOREIGN KEY ("base_component_id") REFERENCES "base_components"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "farmings" ADD CONSTRAINT "farmings_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
