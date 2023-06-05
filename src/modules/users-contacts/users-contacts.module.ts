import { Module } from '@nestjs/common';
import { UsersContactsService } from './users-contacts.service';
import { UsersContactsController } from './users-contacts.controller';

@Module({
  controllers: [UsersContactsController],
  providers: [UsersContactsService]
})
export class UsersContactsModule {}
