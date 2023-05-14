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
import { PlantService } from '../core/services';
import { CreatePlantDTO } from '../core/dtos/CreatePlantDTO';
import { UpdatePlantDTO } from '../core/dtos/UpdatePlantDTO';
import { FilterPlantDTO } from '../core/dtos/FilterPlantDTO';

@Controller('plants')
export class PlantControllers {
  constructor(private readonly service: PlantService) {}

  @Post()
  async create(@Body() data: CreatePlantDTO) {
    return await this.service
      .create(data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when create new plants.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get()
  async get(@Body() filter: FilterPlantDTO) {
    return await this.service
      .get(filter)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all plants.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Get(':plant_id')
  async getById(@Param('plant_id', ParseIntPipe) plant_id: number) {
    return await this.service
      .getById(plant_id)
      .then((res) => {
        if (!res)
          throw new HttpException(
            {
              status: HttpStatus.NOT_FOUND,
              error: `Plant with id ${plant_id} not found.`,
            },
            HttpStatus.NOT_FOUND,
          );

        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when get all plants.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Put(':plant_id')
  async update(
    @Param('plant_id', ParseIntPipe) plant_id: number,
    @Body() data: UpdatePlantDTO,
  ) {
    return await this.service
      .update(plant_id, data)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when updating plant with id ${plant_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }

  @Delete(':plant_id')
  async delete(@Param('plant_id', ParseIntPipe) plant_id: number) {
    return await this.service
      .delete(plant_id)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            error: `Error when delete plant with id ${plant_id}.`,
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
          {
            cause: err,
          },
        );
      });
  }
}
