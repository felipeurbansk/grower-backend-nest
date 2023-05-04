-- AddForeignKey
ALTER TABLE "Temperatures" ADD CONSTRAINT "Temperatures_base_component_id_fkey" FOREIGN KEY ("base_component_id") REFERENCES "BaseComponents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Humidities" ADD CONSTRAINT "Humidities_base_component_id_fkey" FOREIGN KEY ("base_component_id") REFERENCES "BaseComponents"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
