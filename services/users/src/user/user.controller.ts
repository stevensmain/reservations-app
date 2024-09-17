import { Controller, Post, Body } from '@nestjs/common';

import { UserService } from './user.service';
import { RegisterUserDto, ValidateUserDto } from './dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.register(registerUserDto);
  }

  @Post()
  login(@Body() validateUserDto: ValidateUserDto) {
    return this.userService.validate(validateUserDto);
  }
}
