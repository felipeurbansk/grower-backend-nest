import { Module } from '@nestjs/common';
import { GrowModule } from './core/modules/GrowModule';

@Module({
  imports: [GrowModule],
})
export class AppModule {}
