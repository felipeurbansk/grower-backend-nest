import { Module } from '@nestjs/common';
import { GrowModule } from './modules/grows';
import { SeedModule } from './modules/seeds';

@Module({
  imports: [GrowModule, SeedModule, LightModule],
})
export class AppModule {}
