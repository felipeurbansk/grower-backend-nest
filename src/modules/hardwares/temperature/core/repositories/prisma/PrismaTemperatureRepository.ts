import { TemperatureRepository } from '../TemperatureRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';
import { CreateTemperatureDTO } from '../../dtos/CreateTemperatureDTO';

@Injectable()
export class PrismaTemperatureRepository implements TemperatureRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTemperatureDTO): Promise<any> {
    return await this.prisma.temperatures.create({
      data: {
        farming_id: data.farming_id,
        value: data.value,
      },
    });
  }

  async update(temperature_id: number, data: any): Promise<any> {
    return await this.prisma.temperatures.update({
      where: {
        id: temperature_id,
      },
      data,
    });
  }

  async delete(temperature_id: number): Promise<any> {
    return await this.prisma.temperatures.delete({
      where: {
        id: temperature_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.temperatures.findMany({
      where: filter,
    });
  }

  async getById(temperature_id: number): Promise<any> {
    return await this.prisma.temperatures.findUnique({
      where: {
        id: temperature_id,
      },
    });
  }
}
