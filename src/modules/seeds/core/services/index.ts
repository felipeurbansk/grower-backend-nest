import {
  Body,
  Injectable,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateSeedService } from './CreateSeedService';
import { GetSeedByIdService } from './GetSeedByIdService';
import { FilterSeedService } from './FilterSeedService';
import { UpdateSeedService } from './UpdateSeedService';
import { DeleteSeedService } from './DeleteSeedService';

import { UpdateDTO } from '../dtos/UpdateSeedDTO';
import {
  SeedFilterInterface,
  SeedInterface,
  SeedUpdateInterface,
} from '../interfaces/seed.interface';

@Injectable()
export class SeedService {
  constructor(
    private readonly createService: CreateSeedService,
    private readonly filterService: FilterSeedService,
    private readonly getByIdService: GetSeedByIdService,
    private readonly updateService: UpdateSeedService,
    private readonly deleteService: DeleteSeedService,
  ) {}

  async create(data: SeedInterface): Promise<SeedInterface> {
    return await this.createService.handle(data);
  }

  async get(filter: SeedFilterInterface): Promise<SeedInterface[]> {
    return await this.filterService.handle(filter);
  }

  async getById(seed_id: number): Promise<SeedInterface> {
    const persistedSeed = await this.getByIdService.handle(seed_id);

    if (!persistedSeed)
      throw new NotFoundException(`Seed[${seed_id}] don't exists`);

    return persistedSeed;
  }

  async update(
    seed_id: number,
    data: SeedUpdateInterface,
  ): Promise<SeedInterface> {
    const persistedSeed = await this.getByIdService.handle(seed_id);

    if (!persistedSeed)
      throw new NotFoundException(`Seed[${seed_id}] don't exists`);

    return await this.updateService.handle(seed_id, data);
  }

  async delete(seed_id: number): Promise<SeedInterface> {
    const persistedSeed = await this.getByIdService.handle(seed_id);

    if (!persistedSeed)
      throw new NotFoundException(`Seed[${seed_id}] don't exists`);

    return await this.deleteService.handle(seed_id);
  }
}
