import { Injectable } from '@nestjs/common';
import { FarmingRepository } from '../repositories/FarmingRepository';
import { CreateFarmingDTO } from '../dtos/CreateFarmingDTO';

@Injectable()
export class CreateFarmingService {
  constructor(private readonly repository: FarmingRepository) {}

  async handle(data: CreateFarmingDTO): Promise<any> {
    const { user_id, grow_id, light_id, base_component_id, plants } = data;

    const payload = {
      data: {
        user_id,
        grow_id,
        light_id,
        base_component_id,
        plants: {
          create: plants.map((plant) => {
            return {
              ...plant,

              init_germination: plant.init_germination
                ? new Date(plant.init_germination)
                : null,

              init_vegetative: plant.init_vegetative
                ? new Date(plant.init_vegetative)
                : null,

              init_flowering: plant.init_flowering
                ? new Date(plant.init_flowering)
                : null,

              init_drying: plant.init_drying
                ? new Date(plant.init_drying)
                : null,

              init_cure: plant.init_cure ? new Date(plant.init_cure) : null,
            };
          }),
        },
      },
    };

    return await this.repository.create(payload);
  }
}
