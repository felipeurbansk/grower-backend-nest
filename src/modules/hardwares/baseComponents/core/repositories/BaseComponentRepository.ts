export abstract class BaseComponentRepository {
  abstract create(data: any): Promise<void>;
  abstract update(id: number, data: any): Promise<any>;
  abstract delete(id: number): Promise<any>;
  abstract getAll(filter: any): Promise<any[]>;
  abstract getById(baseComponent_id: number): Promise<any>;
  abstract getByMac(mac: string): Promise<any>;
}
