-- CreateTable
CREATE TABLE "Temperatures" (
    "id" SERIAL NOT NULL,
    "base_component_id" INTEGER NOT NULL,
    "value" INTEGER,

    CONSTRAINT "Temperatures_pkey" PRIMARY KEY ("id")
);
