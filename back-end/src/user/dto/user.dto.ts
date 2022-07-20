export interface UserDto {
  id: string;
  login: string;
  name: string;
  avatar: string;
  fortyTwoAvatar: string;
  email: string;
  online: number; // 0: logout | 1: login | 2: in Game
}

export interface LimitedUserDto {
  id: string;
  login: string;
  name: string;
  avatar: string;
  fortyTwoAvatar: string;
  email: string;
  online: number; // 0: logout | 1: login | 2: in Game
}

