import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersControler {
  data: string[];

  constructor(private usersService: UsersService) {
    this.data = this.usersService.getUser();
  }

  @Get()
  getUser() {
    return this.data;
  }
}
