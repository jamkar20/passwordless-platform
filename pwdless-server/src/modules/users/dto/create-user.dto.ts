import { IsEmail, IsOptional, IsString, Min, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @MinLength(2)
  @IsOptional()
  firstName?: string;

  @IsString()
  @MinLength(2)
  @IsOptional()
  lastName?: string;

  @IsEmail()
  email: string;
}
