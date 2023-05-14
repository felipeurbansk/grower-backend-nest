import { CreateBaseComponentDTO } from '../core/dtos/CreateBaseComponentDTO';
import { UpdateBaseComponentDTO } from '../core/dtos/UpdateBaseComponentDTO';
import { FilterBaseComponentDTO } from '../core/dtos/FilterBaseComponentDTO';
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
import { BaseComponentService } from '../core/services';

@Controller('base_components')
export class BaseComponentControllers {
  constructor(private readonly service: BaseComponentService) {}

  @Post()
  async create(@Body() data: CreateBaseComponentDTO) {
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
  async get(@Body() filter: FilterBaseComponentDTO) {
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
    @Body() data: UpdateBaseComponentDTO,
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
