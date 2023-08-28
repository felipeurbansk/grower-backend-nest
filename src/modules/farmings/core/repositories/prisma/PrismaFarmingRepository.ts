import { FarmingRepository } from '../FarmingRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';
import { CreateFarmingDTO } from '../../dtos/CreateFarmingDTO';

@Injectable()
export class PrismaFarmingRepository implements FarmingRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.farmings.create(data);
  }

  async update(farming_id: number, data: any): Promise<CreateFarmingDTO> {
    return await this.prisma.farmings.update({
      where: {
        id: farming_id,
      },
      include: {
        plants: true,
      },
      data,
    });
  }

  async delete(farming_id: number): Promise<CreateFarmingDTO> {
    return await this.prisma.farmings.delete({
      where: {
        id: farming_id,
      },
      include: {
        plants: true,
      },
    });
  }

  async getAll(filter: any): Promise<CreateFarmingDTO[]> {
    return await this.prisma.farmings.findMany({
      where: filter,
      include: {
        base_component: true,
        plants: {
          include: {
            seed: true,
          },
        },
        light: true,
        grow: true,
        humidities: true,
        temperatures: true,
      },
    });
  }

  async getById(farming_id: number): Promise<CreateFarmingDTO> {
    return await this.prisma.farmings.findUnique({
      where: {
        id: farming_id,
      },
      include: {
        base_component: true,
        plants: {
          include: {
            seed: true,
          },
        },
        light: true,
        grow: true,
        humidities: true,
        temperatures: true,
      },
    });
  }

  async getByBaseComponentId(
    base_component_id: number,
  ): Promise<CreateFarmingDTO> {
    return await this.prisma.farmings.findFirst({
      where: {
        base_component_id: base_component_id,
      },
      include: {
        base_component: true,
        plants: {
          include: {
            seed: true,
          },
        },
        light: true,
        grow: true,
        humidities: true,
        temperatures: true,
      },
    });
  }
}
