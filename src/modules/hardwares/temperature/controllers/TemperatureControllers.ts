import { CreateTemperatureBody } from '../core/dtos/CreateTemperatureBody';
import { UpdateTemperatureBody } from '../core/dtos/UpdateTemperatureBody';
import { FilterTemperatureBody } from '../core/dtos/FilterTemperatureBody';
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

@Controller('temperatures')
export class TemperatureControllers {
  constructor(private readonly service: Service) {}

  @Post()
  async create(@Body() data: CreateTemperatureBody) {
    return await this.service
      .create(data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when create new temperatures.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get()
  async get(@Body() filter: FilterTemperatureBody) {
    return await this.service
      .get(filter)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all temperatures.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get(':temperature_id')
  async getById(@Param('temperature_id', ParseIntPipe) temperature_id: number) {
    return await this.service
      .getById(temperature_id)
      .then((res) => {
        if (!res)
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: `Temperature with id ${temperature_id} not found.`,
            },
            HttpStatus.NOT_FOUND,
          );

        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all temperatures.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Put(':temperature_id')
  async update(
    @Param('temperature_id', ParseIntPipe) temperature_id: number,
    @Body() data: UpdateTemperatureBody,
  ) {
    return await this.service
      .update(temperature_id, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when updating temperature with id ${temperature_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Delete(':temperature_id')
  async delete(@Param('temperature_id', ParseIntPipe) temperature_id: number) {
    return await this.service
      .delete(temperature_id)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when delete temperature with id ${temperature_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }
}
