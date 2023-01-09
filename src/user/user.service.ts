import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { AvailableUserDto } from './dto/available-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async available(data: AvailableUserDto): Promise<boolean> {
    const { email, nickname, tag, phone } = data;
    const user = this.userRepository.findOne({
      where: { email, nickname, tag, phone },
    });
    return !!user;
  }

  async create(data: CreateUserDto) {}
}
