import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { UserSystemRole } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  password: string;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  @IsString()
  @MaxLength(40)
  email?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MaxLength(20)
  phone?: string;

  @ApiProperty({ enum: UserSystemRole })
  @IsEnum(UserSystemRole)
  systemRole: UserSystemRole;
}
