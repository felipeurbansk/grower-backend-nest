import { CreateBaseComponentBody } from '../core/dtos/CreateBaseComponentBody';
import { UpdateBaseComponentBody } from '../core/dtos/UpdateBaseComponentBody';
import { FilterBaseComponentBody } from '../core/dtos/FilterBaseComponentBody';
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

@Controller('baseComponents')
export class BaseComponentControllers {
  constructor(private readonly service: Service) {}

  @Post()
  async create(@Body() data: CreateBaseComponentBody) {
    return await this.service
      .create(data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when create new baseComponents.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get()
  async get(@Body() filter: FilterBaseComponentBody) {
    return await this.service
      .get(filter)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all baseComponents.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get(':baseComponent_id')
  async getById(
    @Param('baseComponent_id', ParseIntPipe) baseComponent_id: number,
  ) {
    return await this.service
      .getById(baseComponent_id)
      .then((res) => {
        if (!res)
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: `BaseComponent with id ${baseComponent_id} not found.`,
            },
            HttpStatus.NOT_FOUND,
          );

        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all baseComponents.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Put(':baseComponent_id')
  async update(
    @Param('baseComponent_id', ParseIntPipe) baseComponent_id: number,
    @Body() data: UpdateBaseComponentBody,
  ) {
    return await this.service
      .update(baseComponent_id, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when updating baseComponent with id ${baseComponent_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Delete(':baseComponent_id')
  async delete(
    @Param('baseComponent_id', ParseIntPipe) baseComponent_id: number,
  ) {
    return await this.service
      .delete(baseComponent_id)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when delete baseComponent with id ${baseComponent_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }
}
