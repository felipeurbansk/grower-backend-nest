-- CreateTable
CREATE TABLE "BaseComponents" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "mac" TEXT NOT NULL,

    CONSTRAINT "BaseComponents_pkey" PRIMARY KEY ("id")
);
