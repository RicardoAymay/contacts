import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ContactsRepository } from './repositories/contacts.repository';


@Injectable()
export class ContactsService {
  constructor(private contactsRepository: ContactsRepository){}
  async create(createContactDto: CreateContactDto) {
    const contact = await this.contactsRepository.create(createContactDto)
    return contact;
  }

  async findAll() {
    const contacts = await this.contactsRepository.findall()
    return contacts;
  }

  async findOne(id: string) {
    const contact = await this.contactsRepository.findOne(id)
    return contact; 
    // aqui deve haver modificações
  }

  async update(id: string, updateUserDto: UpdateContactDto) {
    const contact = await this.contactsRepository.update(id, updateUserDto)
    return contact
  }

  remove(id: string) {
    return this.contactsRepository.Delete(id)
  }
}
