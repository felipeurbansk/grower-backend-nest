import { FarmingRepository } from '../FarmingRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';
import { CreateFarmingBody } from '../../dtos/CreateFarmingBody';

@Injectable()
export class PrismaFarmingRepository implements FarmingRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFarmingBody): Promise<any> {
    const { user_id, grow_id, light_id, base_component_id, plants } = data;

    return await this.prisma.farmings.create({
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
    });
  }

  async update(farming_id: number, data: any): Promise<any> {
    return await this.prisma.farmings.update({
      where: {
        id: farming_id,
      },
      data,
    });
  }

  async delete(farming_id: number): Promise<any> {
    return await this.prisma.farmings.delete({
      where: {
        id: farming_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.farmings.findMany({
      where: filter,
    });
  }

  async getById(farming_id: number): Promise<any> {
    return await this.prisma.farmings.findUnique({
      where: {
        id: farming_id,
      },
    });
  }
}
