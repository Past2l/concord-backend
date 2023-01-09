import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, ValidateIf } from 'class-validator';

export class AvailableUserDto {
  @ApiProperty({ description: 'User E-Mail', required: false })
  @ValidateIf((o) => !o.nickname && !o.tag && !o.phone)
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty({ description: 'User Nickname', required: false })
  @ValidateIf((o) => !o.nickname == !o.tag && !o.email && !o.phone)
  @IsString()
  @IsOptional()
  nickname: string;

  @ApiProperty({ description: 'User Tag', required: false })
  @ValidateIf((o) => !o.nickname == !o.tag && !o.email && !o.phone)
  @IsString()
  @IsOptional()
  tag: string;

  @ApiProperty({ description: 'User Phone Number', required: false })
  @ValidateIf((o) => !o.email && !o.nickname && !o.tag)
  @IsString()
  @IsOptional()
  phone: string;
}
