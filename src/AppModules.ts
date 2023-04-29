import { Module } from '@nestjs/common';
import { GrowModule } from './modules/grows';

@Module({
  imports: [GrowModule],
})
export class AppModule {}
