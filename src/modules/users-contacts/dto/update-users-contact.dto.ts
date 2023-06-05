import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersContactDto } from './create-users-contact.dto';

export class UpdateUsersContactDto extends PartialType(CreateUsersContactDto) {}
