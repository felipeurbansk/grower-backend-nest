export abstract class UserRepository {
  abstract create(data: any): Promise<void>;
  abstract update(id: number, data: any): Promise<any>;
  abstract delete(id: number): Promise<any>;
  abstract getAll(filter: any): Promise<any[]>;
  abstract getById(user_id: number): Promise<any>;
  abstract getByEmail(email: string): Promise<any>;
}
