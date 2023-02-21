import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, PrismaService],
})
export class ScheduleModule {}
