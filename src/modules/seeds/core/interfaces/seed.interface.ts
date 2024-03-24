export interface SeedInterface {
  id?: number;
  name: string;
  bank_name: string;
  vegetative_weeks: number;
  flowering_weeks: number;
  per_square_meter: number;
  user_id: number;
}

export interface SeedUpdateInterface {
  name?: string;
  bank_name?: string;
  vegetative_weeks?: number;
  flowering_weeks?: number;
  per_square_meter?: number;
  user_id?: number;
}

export interface SeedFilterInterface {
  id?: number;
  name?: string;
  bank_name?: string;
  vegetative_weeks?: number;
  flowering_weeks?: number;
  per_square_meter?: number;
  user_id?: number;
}
