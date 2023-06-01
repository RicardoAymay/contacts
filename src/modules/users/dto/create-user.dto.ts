import { hashSync } from "bcryptjs";
import { Exclude, Transform } from "class-transformer";
import { IsString, IsNotEmpty, MaxLength, IsEmail, MinLength, IsBoolean } from "class-validator";


export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @MaxLength(120)
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({value} : {value: string}) => hashSync(value, 10), {
    groups: ['transform']
  })


  password: string;

  @IsBoolean()
  is_medic: boolean;

  @IsBoolean()
  is_admin: boolean;
}
