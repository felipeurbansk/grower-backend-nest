import { GrowRepository } from '../grow-repository';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';

@Injectable()
export class PrismaGrowRepository implements GrowRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: any): Promise<any> {
    return await this.prisma.grows
      .create({
        data,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when creating a new grow.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  async update(grow_id: number, data: any): Promise<any> {
    return await this.prisma.grows
      .update({
        where: {
          id: grow_id,
        },
        data,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when updating grow with id ${grow_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  async delete(grow_id: number): Promise<any> {
    return await this.prisma.grows
      .delete({
        where: {
          id: grow_id,
        },
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when delete grow with id ${grow_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  async getAll(filter: any): Promise<any[]> {
    return await this.prisma.grows
      .findMany({
        where: filter,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all grows.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  async getById(grow_id: number): Promise<any> {
    const grow = await this.prisma.grows.findUnique({
      where: {
        id: grow_id,
      },
    });

    if (!grow)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `Grow with id ${grow_id} not found.`,
        },
        HttpStatus.NOT_FOUND,
      );

    return grow;
  }
}
