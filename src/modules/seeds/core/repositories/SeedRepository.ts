import {
  SeedFilterInterface,
  SeedInterface,
  SeedUpdateInterface,
} from '../interfaces/seed.interface';

export abstract class SeedRepository {
  abstract create(seed: SeedInterface): Promise<SeedInterface>;
  abstract update(
    seed_id: number,
    seed: SeedUpdateInterface,
  ): Promise<SeedInterface>;
  abstract delete(seed_id: number): Promise<SeedInterface>;
  abstract getAll(filter: SeedFilterInterface): Promise<SeedInterface[]>;
  abstract getById(seed_id: number): Promise<SeedInterface>;
}
