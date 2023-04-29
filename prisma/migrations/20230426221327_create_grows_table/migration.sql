-- CreateTable
CREATE TABLE "Grows" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "depth" INTEGER NOT NULL,
    "status" TEXT,

    CONSTRAINT "Grows_pkey" PRIMARY KEY ("id")
);
