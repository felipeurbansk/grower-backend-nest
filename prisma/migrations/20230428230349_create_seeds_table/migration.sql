-- CreateTable
CREATE TABLE "Seeds" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "vegetative_weeks" INTEGER NOT NULL,
    "flowering_weeks" INTEGER NOT NULL,
    "per_square_meter" INTEGER NOT NULL,
    "status" TEXT,

    CONSTRAINT "Seeds_pkey" PRIMARY KEY ("id")
);
