import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import * as argon from 'argon2';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDTO } from './dto/create-user.dto';
import {
  UpdateUserBySuperAdminDTO,
  UpdateUserDTO,
} from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create({ email, password, name, role }: CreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (userAlreadyExists) {
      throw new ForbiddenException('User already exists!');
    }

    const hashedPassword = await argon.hash(password);

    const user = await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role,
      },
    });

    delete user.password;

    return user;
  }

  async updateUserBySuperAdmin(id: string, data: UpdateUserBySuperAdminDTO) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new ForbiddenException('User Does Not Exists');
    }
    await this.prisma.user.update({
      data: {
        name: data.name || user.name,
        email: data.email || user.email,
        role: data.role || data.role,
        password: data.password
          ? await argon.hash(data.password)
          : user.password,
      },
      where: {
        id,
      },
    });
  }

  async updateUserInfo(id: string, data: UpdateUserDTO) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (data.password) {
      if (!data.password || !data.new_password) {
        throw new ForbiddenException('Password and new password are required!');
      }
      const passwordMatch = await argon.verify(user.password, data.password);
      if (!passwordMatch) {
        throw new ForbiddenException('Password does not match!');
      }

      const hashedPassword = await argon.hash(data.new_password);
      await this.prisma.user.update({
        data: {
          password: hashedPassword,
        },
        where: {
          id,
        },
      });
    }

    await this.prisma.user.update({
      data: {
        name: data.name,
      },
      where: {
        id,
      },
    });
  }

  async updateUserAvatar(id: string, avatar_url: string) {
    await this.prisma.user.update({
      data: {
        avatar_url,
      },
      where: {
        id,
      },
    });
  }

  async deleteUserByAdmin(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new ForbiddenException('User Does Not Exists');
    }
    await this.prisma.user.delete({ where: { id } });
  }
}
