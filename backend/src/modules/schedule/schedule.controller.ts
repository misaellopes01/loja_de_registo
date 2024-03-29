import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  UseGuards,
} from '@nestjs/common';
import { Interval } from '@nestjs/schedule';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { JwtGuard } from '../authentication/guard';

interface QueryPhoneOrBI {
  bi_phone: string | number;
  phone: number;
}

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post('create')
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    return await this.scheduleService.create(createScheduleDto);
  }
  @UseGuards(JwtGuard)
  @Get('all')
  async findAll() {
    return this.scheduleService.findAll();
  }

  @UseGuards(JwtGuard)
  @Get('report')
  async findAllReport() {
    return this.scheduleService.report();
  }

  @Get('count/all')
  async countAllInTheNextDay() {
    return this.scheduleService.countAllInTheNextDay();
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(id);
  }

  @Post('citizen/many')
  async findManyByCitizen(@Body() { bi_phone }: QueryPhoneOrBI) {
    if (!bi_phone) {
      return new BadRequestException('Can not read undefined');
    }
    const citizenScheduling = await this.scheduleService.findManyByCitizen(
      bi_phone,
    );
    return citizenScheduling;
  }

  @Post('citizen/scheduling/limit')
  async findCitizenTotalScheduling(@Body() { phone }: QueryPhoneOrBI) {
    const citizenScheduling =
      await this.scheduleService.countAllInTheNextDayByNPhoneNumber(phone);
    return citizenScheduling;
  }
  @UseGuards(JwtGuard)
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
