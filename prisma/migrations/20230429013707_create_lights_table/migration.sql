-- CreateTable
CREATE TABLE "Lights" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "watts" INTEGER,
    "lumens" INTEGER,
    "status" TEXT,

    CONSTRAINT "Lights_pkey" PRIMARY KEY ("id")
);
