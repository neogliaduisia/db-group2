import { User, UserSystemRole } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserEntity implements User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty()
  email: string | null;

  @ApiProperty()
  phone: string | null;

  @ApiProperty()
  avatar: string | null;

  @ApiProperty()
  systemRole: UserSystemRole;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
