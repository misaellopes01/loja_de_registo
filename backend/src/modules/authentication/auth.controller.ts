/* eslint-disable prettier/prettier */
import { Body, Controller, HttpCode, HttpStatus, Param, Post, Req, UseGuards } from '@nestjs/common';
import { UserProfileDTO } from '../user/dto/user-profile.dto';
import { AuthService } from './auth.service';
import { GetUser } from './decorator';
import { AuthLoginDTO, Tokens } from './dto';
import { JwtGuard, JwtGuardRefresh } from './guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signin')
  @HttpCode(HttpStatus.OK)
  async signin(@Body() data: AuthLoginDTO): Promise<Tokens> {
    return this.authService.signin(data);
  }

  @UseGuards(JwtGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@GetUser('') user: UserProfileDTO) {
    return this.authService.logout(user.id)
  }


  @UseGuards(JwtGuardRefresh)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refreshToken(@GetUser() { payload, refreshToken }: any) {
    return this.authService.refreshToken(payload.sub, refreshToken)
  }
}
