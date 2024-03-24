import {
  SeedFilterInterface,
  SeedInterface,
} from 'src/modules/seeds/core/interfaces/seed.interface';

export interface PlantInterface {
  qrcode?: string;
  seed_id: number;
  init_germination: Date;
  init_vegetative?: Date;
  init_flowering?: Date;
  init_drying?: Date;
  init_cure?: Date;
  seed?: SeedInterface;
}

export interface PlantFilterInterface {
  qrcode?: string;
  seed_id?: number;
  init_germination?: Date;
  init_vegetative?: Date;
  init_flowering?: Date;
  init_drying?: Date;
  init_cure?: Date;
  seed?: SeedFilterInterface;
}

export interface PlantUpdateInterface {
  qrcode?: string;
  seed_id?: number;
  init_germination?: Date;
  init_vegetative?: Date;
  init_flowering?: Date;
  init_drying?: Date;
  init_cure?: Date;
  seed?: SeedFilterInterface;
}
