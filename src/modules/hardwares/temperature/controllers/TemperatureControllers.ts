import { CreateTemperatureDTO } from '../core/dtos/CreateTemperatureDTO';
import { UpdateTemperatureDTO } from '../core/dtos/UpdateTemperatureDTO';
import { FilterTemperatureDTO } from '../core/dtos/FilterTemperatureDTO';
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
import { TemperatureService } from '../core/services';

@Controller('temperatures')
export class TemperatureControllers {
  constructor(private readonly service: TemperatureService) {}

  @Post()
  async create(@Body() data: CreateTemperatureDTO) {
    return await this.service
      .create(data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        console.log({ err });
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
  async get(@Body() filter: FilterTemperatureDTO) {
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
    @Body() data: UpdateTemperatureDTO,
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
