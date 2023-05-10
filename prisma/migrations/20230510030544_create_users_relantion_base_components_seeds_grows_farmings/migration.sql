/*
  Warnings:

  - Added the required column `user_id` to the `BaseComponents` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Farming` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Grows` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Lights` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Seeds` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BaseComponents" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Farming" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Grows" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Lights" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Seeds" ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Grows" ADD CONSTRAINT "Grows_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seeds" ADD CONSTRAINT "Seeds_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lights" ADD CONSTRAINT "Lights_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BaseComponents" ADD CONSTRAINT "BaseComponents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Farming" ADD CONSTRAINT "Farming_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
