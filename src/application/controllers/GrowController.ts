import { CreateGrowBody } from '../../core/dtos/grow/CreateGrowBody';
import { UpdateGrowBody } from '../../core/dtos/grow/UpdateGrowBody';
import { FilterGrowBody } from 'src/core/dtos/grow/FilterGrowBody';
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
import { GrowService } from 'src/core/domain/grow/GrowService';

@Controller('grows')
export class GrowController {
  constructor(private readonly growService: GrowService) {}

  @Post()
  async createGrow(@Body() data: CreateGrowBody) {
    return await this.growService
      .createGrow(data)
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
  async getGrows(@Body() filter: FilterGrowBody) {
    return await this.growService
      .getGrows(filter)
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
  async getGrowById(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.growService
      .getGrowById(grow_id)
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
  async updateGrow(
    @Param('grow_id', ParseIntPipe) grow_id: number,
    @Body() data: UpdateGrowBody,
  ) {
    return await this.growService
      .updateGrow(grow_id, data)
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
  async deleteGrow(@Param('grow_id', ParseIntPipe) grow_id: number) {
    return await this.growService
      .deleteGrow(grow_id)
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
