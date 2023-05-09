import { UserRepository } from '../UserRepository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/PrismaService';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.users.create({ data });
  }

  async update(user_id: number, data: any): Promise<any> {
    return await this.prisma.users.update({
      where: {
        id: user_id,
      },
      data,
    });
  }

  async delete(user_id: number): Promise<any> {
    return await this.prisma.users.delete({
      where: {
        id: user_id,
      },
    });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.users.findMany({
      where: filter,
    });
  }

  async getById(user_id: number): Promise<any> {
    return await this.prisma.users.findUnique({
      where: {
        id: user_id,
      },
    });
  }

  async getByEmail(email: string): Promise<any> {
    return await this.prisma.users.findUnique({
      where: {
        email: email,
      },
    });
  }
}
