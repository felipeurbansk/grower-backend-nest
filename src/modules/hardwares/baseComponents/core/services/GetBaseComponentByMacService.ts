import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseComponentRepository } from '../repositories/BaseComponentRepository';

@Injectable()
export class GetBaseComponentByMacService {
  constructor(private readonly repository: BaseComponentRepository) {}

  async handle(mac: string): Promise<any> {
    const persistedBaseComponent = await this.repository.getByMac(mac);

    if (!persistedBaseComponent) {
      throw new NotFoundException(
        `Base component with mac address ${mac} not found`,
      );
    }

    return persistedBaseComponent;
  }
}
