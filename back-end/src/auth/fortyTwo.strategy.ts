import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PassportStrategy } from '@nestjs/passport';

import { Strategy } from 'passport-oauth2';
import { lastValueFrom } from 'rxjs';

import { UserDto } from 'src/user/dto/user.dto';
import { AuthService } from './auth.service';

@Injectable()
export class FortyTwoStrategy extends PassportStrategy(Strategy, '42') {
  constructor(
    private readonly authService: AuthService,
    private readonly httpService: HttpService,
  ) {
    super({
      authorizationURL: 'https://api.intra.42.fr/oauth/authorize',
      tokenURL: 'https://api.intra.42.fr/oauth/token',
      clientID: process.env.FTUID,
      clientSecret: process.env.FTSECRET,
      callbackURL: 'http://localhost:3000/api/user/auth/42/callback',
      scope: ['public'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    cb: any,
  ): Promise<any> {
    const getUser = lastValueFrom(
      this.httpService.get('https://api.intra.42.fr/v2/me', {
        headers: { Authorization: 'Bearer ' + accessToken },
      }),
    );

    const { id, login, email, image_url } = (await getUser).data;

    let user: UserDto = {
      id: id.toString(),
      login: login,
      name: '',
      avatar: '',
      fortyTwoAvatar: image_url,
      email: email,
      online: 1,
    };

    if (login) user = await this.authService.ftValidUser(user);
    return cb(null, user);
  }
}
