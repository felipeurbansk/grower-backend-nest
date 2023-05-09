import { Module } from '@nestjs/common';
import { GrowModule } from './modules/grows';
import { SeedModule } from './modules/seeds';
import { LightModule } from './modules/lights';
import { BaseComponentModule } from './modules/hardwares/baseComponents';
import { TemperatureModule } from './modules/hardwares/temperature';
import { HumidtyModule } from './modules/hardwares/humidity';
import { PlantModule } from './modules/plants';
import { UserModule } from './modules/users';

import { AuthModule } from './auth';

@Module({
  imports: [
    GrowModule,
    SeedModule,
    LightModule,
    BaseComponentModule,
    TemperatureModule,
    HumidtyModule,
    PlantModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
