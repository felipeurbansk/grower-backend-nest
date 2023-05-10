import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ComparePassword {
  async handle(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
