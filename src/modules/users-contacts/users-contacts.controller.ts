import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersContactsService } from './users-contacts.service';
import { CreateUsersContactDto } from './dto/create-users-contact.dto';
import { UpdateUsersContactDto } from './dto/update-users-contact.dto';

@Controller('users-contacts')
export class UsersContactsController {
  constructor(private readonly usersContactsService: UsersContactsService) {}

  @Post()
  create(@Body() createUsersContactDto: CreateUsersContactDto) {
    return this.usersContactsService.create(createUsersContactDto);
  }

  @Get()
  findAll() {
    return this.usersContactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersContactsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersContactDto: UpdateUsersContactDto) {
    return this.usersContactsService.update(+id, updateUsersContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersContactsService.remove(+id);
  }
}
