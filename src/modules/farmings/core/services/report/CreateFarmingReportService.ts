import { Injectable } from '@nestjs/common';
import { CreateFarmingBody } from '../../dtos/CreateFarmingBody';
import { addDays, addWeeks, weeksToDays } from 'date-fns';

@Injectable()
export class CreateFarmingReportService {
  async handle(farmings: CreateFarmingBody[]): Promise<any[]> {
    return farmings.map((farming) => {
      farming.plants = farming.plants.map((plant) => {
        const ended_germination = addDays(
          plant.init_germination,
          weeksToDays(2),
        );
        const ended_vegetative = addWeeks(
          plant.init_vegetative ? plant.init_vegetative : ended_germination,
          5,
        );
        const ended_flowering = addWeeks(
          plant.init_flowering ? plant.init_flowering : ended_vegetative,
          9,
        );
        const ended_drying = addWeeks(
          plant.init_drying ? plant.init_drying : ended_flowering,
          2,
        );
        const ended_cure = addWeeks(
          plant.init_cure ? plant.init_cure : ended_drying,
          3,
        );

        plant.report = {
          ended_germination: ended_germination,
          ended_vegetative: ended_vegetative,
          ended_flowering: ended_flowering,
          ended_drying: ended_drying,
          ended_cure: ended_cure,
        };

        return plant;
      });

      return farming;
    });
  }
}
