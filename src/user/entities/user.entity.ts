import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
export class User {
  @ApiProperty({ description: 'User ID', required: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'User E-Mail', required: true })
  @Column({ nullable: false })
  email: string;

  @ApiProperty({ description: 'User Nickname', required: true })
  @Column({ nullable: false })
  nickname: string;

  @ApiProperty({ description: 'User Tag', required: true })
  @Column({ nullable: false })
  tag: string;

  @ApiProperty({ description: 'User Password', required: true })
  @Column({ nullable: false })
  password: string;

  @ApiProperty({ description: 'User Birth', required: false })
  @Column({ nullable: true })
  birth: Date;

  @ApiProperty({ description: 'User Profile Image', required: false })
  @Column({ nullable: true })
  image: string;

  @ApiProperty({ description: 'User Banner Image', required: false })
  @Column({ nullable: true })
  banner: string;

  @ApiProperty({ description: 'User Hex Color', required: false })
  @Column({ nullable: true })
  color: string;

  @ApiProperty({ description: 'User Phone Number', required: false })
  phone: string;
}
