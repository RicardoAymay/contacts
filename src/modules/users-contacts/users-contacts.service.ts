import { Injectable } from '@nestjs/common';
import { CreateUsersContactDto } from './dto/create-users-contact.dto';
import { UpdateUsersContactDto } from './dto/update-users-contact.dto';

@Injectable()
export class UsersContactsService {
  create(createUsersContactDto: CreateUsersContactDto) {
    return 'This action adds a new usersContact';
  }

  findAll() {
    return `This action returns all usersContacts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersContact`;
  }

  update(id: number, updateUsersContactDto: UpdateUsersContactDto) {
    return `This action updates a #${id} usersContact`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersContact`;
  }
}
