import { CreateLightBody } from '../dtos/CreateLightBody';
import { FilterLightBody } from '../dtos/FilterLightBody';
import { UpdateLightBody } from '../dtos/UpdateLightBody';

export abstract class LightRepository {
  abstract create(data: CreateLightBody): Promise<void>;
  abstract update(id: number, data: UpdateLightBody): Promise<any>;
  abstract delete(id: number): Promise<any>;
  abstract getAll(filter: FilterLightBody): Promise<any[]>;
  abstract getById(light_id: number): Promise<any>;
}
