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
import { FarmingModule } from './modules/farmings';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    AuthModule,
    UserModule,
    GrowModule,
    SeedModule,
    LightModule,
    PlantModule,
    FarmingModule,
    BaseComponentModule,
    TemperatureModule,
    HumidtyModule,
    RouterModule.register([
      {
        path: 'hardwares',
        module: BaseComponentModule,
      },
      {
        path: 'hardwares',
        module: HumidtyModule,
      },
      {
        path: 'hardwares',
        module: TemperatureModule,
      },
    ]),
  ],
})
export class AppModule {}
