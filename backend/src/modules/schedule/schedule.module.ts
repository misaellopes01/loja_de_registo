import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { PrismaService } from 'src/database/PrismaService';
import { AppointmentScheduler } from './utils/scheduling';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService, PrismaService, AppointmentScheduler],
})
export class SchedulesModule {}
