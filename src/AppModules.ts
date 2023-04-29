import { Module } from '@nestjs/common';
import { GrowModule } from './modules/grows';
import { SeedModule } from './modules/seeds';
import { LightModule } from './modules/lights';

@Module({
  imports: [GrowModule, SeedModule, LightModule],
})
export class AppModule {}
