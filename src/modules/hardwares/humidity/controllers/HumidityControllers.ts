import { CreateHumidityBody } from '../core/dtos/CreateHumidityBody';
import { UpdateHumidityBody } from '../core/dtos/UpdateHumidityBody';
import { FilterHumidityBody } from '../core/dtos/FilterHumidityBody';
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
import { HumidityService } from '../core/services';

@Controller('humidities')
export class HumidityControllers {
  constructor(private readonly service: HumidityService) {}

  @Post()
  async create(@Body() data: CreateHumidityBody) {
    return await this.service
      .create(data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when create new humidities.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get()
  async get(@Body() filter: FilterHumidityBody) {
    return await this.service
      .get(filter)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all humidities.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get(':humidty_id')
  async getById(@Param('humidty_id', ParseIntPipe) humidty_id: number) {
    return await this.service
      .getById(humidty_id)
      .then((res) => {
        if (!res)
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: `Humidty with id ${humidty_id} not found.`,
            },
            HttpStatus.NOT_FOUND,
          );

        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all humidities.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Put(':humidty_id')
  async update(
    @Param('humidty_id', ParseIntPipe) humidty_id: number,
    @Body() data: UpdateHumidityBody,
  ) {
    return await this.service
      .update(humidty_id, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when updating humidty with id ${humidty_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Delete(':humidty_id')
  async delete(@Param('humidty_id', ParseIntPipe) humidty_id: number) {
    return await this.service
      .delete(humidty_id)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when delete humidty with id ${humidty_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }
}
