import { Inject, Injectable } from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { UserDto } from 'src/user/dto/user.dto';

import * as jwt from "jsonwebtoken"

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly userService: UserService,
  ) {}

  async ftValidUser(user: UserDto): Promise<UserDto> {
    return await this.userService.updateUserByAuth(user);
  }
}

export function generateToken(data: any) {
  return jwt.sign(data, String(process.env.JWT_SECRET) || "");
}

export function verifyToken(token: string) {
  return jwt.verify(token, String(process.env.JWT_SECRET) || "");
}

export function decodeToken(token: string) {
  return jwt.decode(token);
}

