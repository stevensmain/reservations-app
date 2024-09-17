import { OmitType } from '@nestjs/mapped-types';
import { RegisterUserDto } from './register-user.dto';

export class ValidateUserDto extends OmitType(RegisterUserDto, [
  'name',
] as const) {}
