import { HumidityRepository } from '../HumidityRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';
import { CreateHumidityDTO } from '../../dtos/CreateHumidityDTO';

@Injectable()
export class PrismaHumidityRepository implements HumidityRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateHumidityDTO): Promise<any> {
    return await this.prisma.humidities.create({
      data: {
        farming_id: data.farming_id,
        value: parseInt(data.value),
      },
    });
  }

  async update(humidty_id: number, data: any): Promise<any> {
    return await this.prisma.humidities.update({
      where: {
        id: humidty_id,
      },
      data,
    });
  }

  async delete(humidty_id: number): Promise<any> {
    return await this.prisma.humidities.delete({
      where: {
        id: humidty_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.humidities.findMany({
      where: filter,
    });
  }

  async getById(humidty_id: number): Promise<any> {
    return await this.prisma.humidities.findUnique({
      where: {
        id: humidty_id,
      },
    });
  }
}
