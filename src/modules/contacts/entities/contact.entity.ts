import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  name: string;
  phone: string;
  userId: string;
  register_date: Date;

  constructor() {
    this.id = randomUUID();
    this.register_date = new Date();
  }
}
