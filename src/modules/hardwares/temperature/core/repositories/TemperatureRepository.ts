export abstract class TemperatureRepository {
  abstract create(data: any): Promise<void>;
  abstract update(id: number, data: any): Promise<any>;
  abstract delete(id: number): Promise<any>;
  abstract getAll(filter: any): Promise<any[]>;
  abstract getById(temperature_id: number): Promise<any>;
}
