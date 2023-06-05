import { Exclude } from 'class-transformer';
import { randomUUID } from 'node:crypto';
export class User {
  readonly id: string;
  name: string;
  email: string;
  @Exclude()
  password: string;
  is_medic: boolean;
  is_admin: boolean;
  register_date: Date;
  constructor() {
    this.id = randomUUID(); //isto vai criar o uuid automaticamente
    this.register_date = new Date();
  }
}
