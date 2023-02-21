/* eslint-disable prettier/prettier */
import { HttpCode } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Patch, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { User } from '@prisma/client';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { GetUser } from '../authentication/decorator';
import { JwtGuard } from '../authentication/guard';
import { Admin } from '../authorization/roles.decorator';
import { RolesGuard } from '../authorization/roles.guard';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserBySuperAdminDTO, UpdateUserDTO } from './dto/update-user.dto';
import { UserProfileDTO } from './dto/user-profile.dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {

  constructor(private userService: UserService) { }

  @Get('me')
  async getMe(@GetUser('') user: UserProfileDTO) {
    return user
  }

  @Post('create')
  @HttpCode(201)
  @UseGuards(RolesGuard)
  @Admin(true)
  async create(@Body() user: CreateUserDTO) {
    const newUser = await this.userService.create(user)
    return newUser
  }

  @Put('update/:id')
  @UseGuards(RolesGuard)
  @Admin(true)
  async updateUserBySuperAdmin(@Param('id') id, @Body() user: UpdateUserBySuperAdminDTO) {
    return await this.userService.updateUserBySuperAdmin(String(id), user)
  }

  @Delete('delete/:id')
  @UseGuards(RolesGuard)
  @Admin(true)
  async deleteUser(@Param('id') id) {
    return await this.userService.deleteUserByAdmin(String(id))
  }

  @Patch('profile/update')
  async updateUserInfo(@GetUser() { id }: User, @Body() user: UpdateUserDTO) {
    return await this.userService.updateUserInfo(id, user)
  }

  @Patch('avatar/update')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/avatar',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  async uploadFile(@GetUser('') user: User, @UploadedFile() file) {
    return await this.userService.updateUserAvatar(user.id, file.filename)
  }

}    
