import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('create')
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    return await this.scheduleService.create(createScheduleDto);
  }

  @Get('all')
  async findAll() {
    return this.scheduleService.findAll();
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(id);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string) {
    await this.scheduleService.update(id);
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    return this.scheduleService.remove(id);
  }

  @Interval(1000)
  async scheduleTask() {
    await this.scheduleService.checkAndUpdateSchedulingStatusExpired();
  }
}
