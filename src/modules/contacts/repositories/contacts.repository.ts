import { Contact } from './../entities/contact.entity';
import { CreateContactDto } from './../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';


export abstract class ContactsRepository {
  abstract create(data: CreateContactDto): Promise<Contact> | Contact;
  abstract findall(): Promise<Contact[]> | Contact[];
  abstract findOne(id: string): Promise<Contact> | Contact;
  abstract update(id: string, data: UpdateContactDto): Promise<Contact> | Contact;
  abstract Delete(id: string): void | Promise<void>
}
