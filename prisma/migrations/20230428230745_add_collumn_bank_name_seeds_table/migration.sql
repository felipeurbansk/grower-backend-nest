-- AlterTable
ALTER TABLE "Seeds" ADD COLUMN     "bank_name" TEXT,
ALTER COLUMN "thc" DROP NOT NULL,
ALTER COLUMN "cbd" DROP NOT NULL,
ALTER COLUMN "vegetative_weeks" DROP NOT NULL,
ALTER COLUMN "flowering_weeks" DROP NOT NULL,
ALTER COLUMN "per_square_meter" DROP NOT NULL;
