import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { AppointmentScheduler } from './utils/scheduling';

@Injectable()
export class ScheduleService {
  constructor(
    private prisma: PrismaService,
    private appointmentScheduler: AppointmentScheduler,
  ) {}

  async create({ name, phone, bi, bi_situation }: CreateScheduleDto) {
    const citizen = await this.prisma.citizen.findFirst({ where: { bi } });
    const scheduling_date =
      await this.appointmentScheduler.scheduleAppointment();
    if (!citizen) {
      return await this.prisma.citizen.create({
        data: {
          name,
          phone,
          bi,
          Scheduling: {
            create: {
              bi_situation,
              scheduling_date,
            },
          },
        },
      });
    }

    return await this.prisma.scheduling.create({
      data: {
        bi_situation,
        scheduling_date,
        citizen_id: citizen.id,
      },
    });
  }

  async findAll() {
    const appointments = await this.prisma.scheduling.findMany();
    // Add citizen data
    return appointments;
  }

  async findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  async remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
