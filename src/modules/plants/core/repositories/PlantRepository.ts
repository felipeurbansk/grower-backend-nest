import {
  PlantFilterInterface,
  PlantInterface,
  PlantUpdateInterface,
} from '../interfaces/plant.interface';

export abstract class PlantRepository {
  abstract create(plant: PlantInterface): Promise<PlantInterface>;
  abstract update(
    id: number,
    plant: PlantUpdateInterface,
  ): Promise<PlantInterface>;
  abstract delete(id: number): Promise<PlantInterface>;
  abstract getAll(filter: PlantFilterInterface): Promise<PlantInterface[]>;
  abstract getById(plant_id: number): Promise<PlantInterface>;
}
