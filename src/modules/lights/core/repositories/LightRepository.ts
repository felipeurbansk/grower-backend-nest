import { CreateLightDTO } from '../dtos/CreateLightDTO';
import { FilterLightDTO } from '../dtos/FilterLightDTO';
import { UpdateLightDTO } from '../dtos/UpdateLightDTO';

export abstract class LightRepository {
  abstract create(data: CreateLightDTO): Promise<void>;
  abstract update(id: number, data: UpdateLightDTO): Promise<any>;
  abstract delete(id: number): Promise<any>;
  abstract getAll(filter: FilterLightDTO): Promise<any[]>;
  abstract getById(light_id: number): Promise<any>;
}
