import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser() {
    return ['bhabesh', 'ganesh', 'krishna'];
  }
}
