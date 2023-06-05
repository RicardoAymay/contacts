import { CreateUsersContactDto } from '../dto/create-users-contact.dto';
import { UsersContact } from '../entities/users-contact.entity';
import { UpdateUsersContactDto } from '../dto/update-users-contact.dto';

export abstract class UsersContactsRepository {
  abstract create(data: CreateUsersContactDto): Promise<UsersContact> | UsersContact;
  abstract findAll(): Promise<UsersContact[]> | UsersContact[];
  abstract findOne(userId: string, contactId: string): Promise<UsersContact> | UsersContact;
  abstract update(userId: string, contactId: string, data: UpdateUsersContactDto): Promise<UsersContact> | UsersContact;
  abstract delete(userId: string, contactId: string): Promise<void> | void;
}

  