import { randomUUID } from "crypto";

export class CreateContactDto {
    readonly id: string;
    name: string;
    phone: string
  
    constructor() {
      this.id = randomUUID(); //isto vai criar o uuid automaticamente
    }
}


