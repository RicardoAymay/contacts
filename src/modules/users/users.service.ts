import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/users.repository';



@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository){}
  async create(createUserDto: CreateUserDto) {
      const user = await this.usersRepository.create(createUserDto)
    return user;
  }

  async findAll() {
    const users = await this.usersRepository.findall()
    return users;
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOne(id)
    if (!user){
      throw new NotFoundException('User not found');
    }
    return user;
  }

  
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne(email)
    if (!user){
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.update(id, updateUserDto)
    return user
  }

  remove(id: string) {
    return this.usersRepository.Delete(id)
  }
}
