import { Module } from '@nestjs/common';
import { UsersControler } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersControler],
  providers: [UsersService],
})
export class UsersModule {}
