import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'User E-Mail', required: true })
  @IsString()
  email: string;

  @ApiProperty({ description: 'User Nickname', required: true })
  @IsString()
  @Length(1, 20)
  nickname: string;

  @ApiProperty({ description: 'User Password', required: true })
  @IsString()
  @Length(8, 20)
  password: string;
}
