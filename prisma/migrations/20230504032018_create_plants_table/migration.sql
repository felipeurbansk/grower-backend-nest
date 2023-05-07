-- CreateTable
CREATE TABLE "Plants" (
    "id" SERIAL NOT NULL,
    "seed_id" TEXT NOT NULL,
    "qrcode" TEXT,
    "init_germination" TIMESTAMP(3),
    "init_vegetative" TIMESTAMP(3),
    "init_flowering" TIMESTAMP(3),
    "init_drying" TIMESTAMP(3),
    "init_cure" TIMESTAMP(3),

    CONSTRAINT "Plants_pkey" PRIMARY KEY ("id")
);
