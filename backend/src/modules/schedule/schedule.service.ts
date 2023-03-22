import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { SchedulingState } from './enum/schedule.enum';
import { AppointmentScheduler } from './utils/scheduling';

@Injectable()
export class ScheduleService {
  constructor(
    private prisma: PrismaService,
    private appointmentScheduler: AppointmentScheduler,
  ) {}

  async create({
    name,
    phone,
    bi,
    bi_situation,
    bi_gv_system_situation,
  }: CreateScheduleDto) {
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
              bi_gv_system_situation,
            },
          },
        },
      });
    }

    await this.prisma.citizen.update({
      where: { bi },
      data: {
        phone,
      },
    });

    return await this.prisma.scheduling.create({
      data: {
        bi_situation,
        scheduling_date,
        citizen_id: citizen.id,
        bi_gv_system_situation,
      },
    });
  }

  async findAll() {
    const appointments = await this.prisma.scheduling.findMany({
      select: {
        id: true,
        scheduling_state: true,
        scheduling_date: true,
        bi_situation: true,
        bi_gv_system_situation: true,
        created_at: true,
        citizen: {
          select: {
            id: true,
            bi: true,
            name: true,
            phone: true,
          },
        },
      },
    });
    // Add citizen data: Done
    return appointments;
  }
  j;

  async findOne(id: string) {
    const appointment = await this.prisma.scheduling.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        scheduling_state: true,
        scheduling_date: true,
        bi_situation: true,
        bi_gv_system_situation: true,
        created_at: true,
        citizen: {
          select: {
            id: true,
            bi: true,
            name: true,
            phone: true,
          },
        },
      },
    });
    return appointment;
  }

  async findManyByCitizen(bi_phone: string | number) {
    const appointment = await this.prisma.citizen.findMany({
      where: {
        OR: [
          {
            bi: String(bi_phone),
          },
          {
            phone: !isNaN(Number(bi_phone)) ? Number(bi_phone) : 0,
          },
        ],
      },
      select: {
        Scheduling: {
          select: {
            id: true,
            bi_situation: true,
            scheduling_state: true,
            scheduling_date: true,
            bi_gv_system_situation: true,
            created_at: true,
            citizen: {
              select: {
                id: true,
                bi: true,
                name: true,
                phone: true,
              },
            },
          },
        },
      },
    });
    return appointment;
  }

  async update(id: string) {
    await this.prisma.scheduling.update({
      data: {
        scheduling_state: SchedulingState.CONFIRMED,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return await this.prisma.scheduling.delete({
      where: {
        id,
      },
    });
  }

  async checkAndUpdateSchedulingStatusExpired() {
    const currentDate = new Date();
    await this.prisma.scheduling.updateMany({
      data: {
        scheduling_state: SchedulingState.EXPIRED,
      },
      where: {
        scheduling_date: {
          lt: currentDate,
        },
      },
    });
  }
}
