/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from './modules/authentication/auth.module';
import { UserModule } from './modules/user/user.module';
import { SchedulesModule } from './modules/schedule/schedule.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    SchedulesModule,
    ScheduleModule.forRoot()
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
