-- CreateTable
CREATE TABLE "Grow" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "depth" INTEGER NOT NULL,
    "status" TEXT,

    CONSTRAINT "Grow_pkey" PRIMARY KEY ("id")
);
