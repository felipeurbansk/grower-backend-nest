import { Injectable } from '@nestjs/common';
import { FarmingRepository } from '../repositories/FarmingRepository';
import { CreateFarmingDTO } from '../dtos/CreateFarmingDTO';
import { CreateFarmingReportService } from './report/CreateFarmingReportService';

@Injectable()
export class FilterFarmingService {
  constructor(
    private readonly repository: FarmingRepository,
    private farmingReportService: CreateFarmingReportService,
  ) {}

  async handle(filter: any): Promise<CreateFarmingDTO[]> {
    const farmings = await this.repository.getAll(filter);
    let new_farmings;

    if (farmings.length) {
      new_farmings = this.farmingReportService.handle(farmings);
    }

    return new_farmings;
  }
}
