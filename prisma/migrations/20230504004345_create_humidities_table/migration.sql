-- CreateTable
CREATE TABLE "Humidities" (
    "id" SERIAL NOT NULL,
    "base_component_id" INTEGER NOT NULL,
    "value" INTEGER,

    CONSTRAINT "Humidities_pkey" PRIMARY KEY ("id")
);
