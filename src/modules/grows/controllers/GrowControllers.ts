import { CreateGrowBody } from '../core/dtos/CreateGrowBody';
import { UpdateGrowBody } from '../core/dtos/UpdateGrowBody';
import { FilterGrowBody } from '../core/dtos/FilterGrowBody';
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  ParseIntPipe,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Service } from '../core/services';

@Controller('grows')
export class GrowControllers {
  constructor(private readonly service: Service) {}

  @Post()
  async create(@Body() data: CreateGrowBody) {
    return await this.service
      .create(data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when create new grows.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get()
  async get(@Body() filter: UpdateGrowBody) {
    return await this.service
      .get(filter)
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

  @Get(':grow_id')
  async getById(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.service
      .getById(grow_id)
      .then((res) => {
        if (!res)
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: `Grow with id ${grow_id} not found.`,
            },
            HttpStatus.NOT_FOUND,
          );

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

  @Put(':grow_id')
  async update(
    @Param('grow_id', ParseIntPipe) grow_id: number,
    @Body() data: UpdateGrowBody,
  ) {
    return await this.service
      .update(grow_id, data)
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

  @Delete(':grow_id')
  async delete(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.service
      .delete(grow_id)
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
}
