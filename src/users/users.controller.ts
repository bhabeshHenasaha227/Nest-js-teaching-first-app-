import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import type { Response } from 'express';

@Controller('users')
export class UsersControler {
  data: string[];

  constructor(private usersService: UsersService) {
    this.data = this.usersService.getUser();
  }

  @Get()
  getuser(@Res() res: Response) {
    res.status(200).json({
      success: true,
      message: 'successful',
    });
  }

  //   @Get()
  //   getUser() {
  //     return this.data;
  //   }

  //   @Post()
  //   createUser(@Body() body: any) {
  //     return body;
  //   }
}
