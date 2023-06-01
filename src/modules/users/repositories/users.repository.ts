
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';
import { Delete } from '@nestjs/common';
import { UpdateUserDto } from '../dto/update-user.dto';
export abstract class UsersRepository {
  abstract create(data: CreateUserDto): Promise<User> | User;
  abstract findall(): Promise<User[]> | User[];
  abstract findOne(id: string): Promise<User> | User;
  abstract update(id: string, data: UpdateUserDto): Promise<User> | User;
  abstract Delete(id: string): void | Promise<void>
}
