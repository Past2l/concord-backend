import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsDate, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ description: 'User Tag', required: true })
  @IsString()
  @IsOptional()
  tag: string;

  @ApiProperty({ description: 'User Birth', required: false })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  birth: Date;

  @ApiProperty({ description: 'User Profile Image', required: false })
  @IsString()
  @IsOptional()
  image: string;

  @ApiProperty({ description: 'User Banner Image', required: false })
  @IsString()
  @IsOptional()
  banner: string;

  @ApiProperty({ description: 'User Hex Color', required: false })
  @IsString()
  @IsOptional()
  color: string;
}
