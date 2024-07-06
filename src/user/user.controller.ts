import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService, User } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'get_users' })
  getUsers(): User[] {
    return this.userService.findAll();
  }

  @MessagePattern({ cmd: 'get_user' })
  getUser(id: number): User {
    return this.userService.findOne(id);
  }
}
