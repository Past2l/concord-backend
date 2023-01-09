import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { AvailableUserDto } from './dto/available-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('available')
  async available(@Body() data: AvailableUserDto, @Res() res) {
    const available = this.userService.available(data);
    res.sendStatus(available ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
  }

  @Post()
  async create(@Body() data: CreateUserDto, @Res() res) {
    const result = this.userService.create(data);
    res.sendStatus(HttpStatus.OK).json(result);
  }
}
