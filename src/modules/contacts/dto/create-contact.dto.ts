import { IsNotEmpty, IsString, MaxLength } from 'class-validator';


export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name: string;

  @IsString()
  @IsNotEmpty()
  phone: string;
  }



 