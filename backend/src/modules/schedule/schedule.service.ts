import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { SchedulingState } from './enum/schedule.enum';
import { AppointmentScheduler } from './utils/scheduling';
import { validateBI, validatePhoneNumber } from './utils/validation';

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
          bi: bi.length < 14 ? null : bi,
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

    if (citizen.phone !== phone && !citizen.bi) {
      return await this.prisma.citizen.create({
        data: {
          name,
          phone,
          bi: bi.length < 14 ? null : bi,
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

    if (citizen.bi.length < 14) {
      await this.prisma.citizen.update({
        where: {
          id: citizen.id,
        },
        data: {
          bi,
          name,
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

    await this.prisma.citizen.update({
      where: {
        id: citizen.id,
      },
      data: {
        name,
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
  async countAllInTheNextDay() {
    const currentDate = new Date();
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1,
    );
    while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
      nextDate.setDate(nextDate.getDate() + 1);
    }
    const appointments = await this.prisma.scheduling.count({
      where: {
        scheduling_date: nextDate,
      },
    });
    // Add citizen data: Done
    return appointments;
  }

  async countAllInTheNextDayByNPhoneNumber(phone: number) {
    const currentDate = new Date();
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1,
    );
    while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
      nextDate.setDate(nextDate.getDate() + 1);
    }
    const appointments = await this.prisma.scheduling.count({
      where: {
        scheduling_date: nextDate,
        citizen: {
          phone,
        },
      },
    });
    // Add citizen data: Done
    return appointments;
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
      orderBy: [
        {
          created_at: 'desc',
        },
      ],
    });
    // Add citizen data: Done
    return appointments;
  }

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

  // async findManyByCitizen(bi_phone: string | number) {
  //   const phoneTrue = validatePhoneNumber(String(bi_phone));
  //   console.log(phoneTrue);
  //   if (phoneTrue) {
  //     const appointment = await this.prisma.citizen.findMany({
  //       where: {
  //         phone: Number(bi_phone),
  //       },
  //       select: {
  //         Scheduling: {
  //           select: {
  //             id: true,
  //             bi_situation: true,
  //             scheduling_state: true,
  //             scheduling_date: true,
  //             bi_gv_system_situation: true,
  //             created_at: true,
  //             citizen: {
  //               select: {
  //                 id: true,
  //                 bi: true,
  //                 name: true,
  //                 phone: true,
  //               },
  //             },
  //           },
  //           orderBy: [
  //             {
  //               created_at: 'desc',
  //             },
  //           ],
  //         },
  //       },
  //     });
  //     console.log(appointment);
  //     return appointment;
  //   }
  //   const biTrue = validateBI(String(bi_phone));
  //   console.log(biTrue);
  //   if (biTrue) {
  //     const appointment = await this.prisma.citizen.findMany({
  //       where: {
  //         bi: String(bi_phone),
  //       },
  //       select: {
  //         Scheduling: {
  //           select: {
  //             id: true,
  //             bi_situation: true,
  //             scheduling_state: true,
  //             scheduling_date: true,
  //             bi_gv_system_situation: true,
  //             created_at: true,
  //             citizen: {
  //               select: {
  //                 id: true,
  //                 bi: true,
  //                 name: true,
  //                 phone: true,
  //               },
  //             },
  //           },
  //           orderBy: [
  //             {
  //               created_at: 'desc',
  //             },
  //           ],
  //         },
  //       },
  //     });

  //     return appointment;
  //   }
  // }
  async findManyByCitizen(bi_phone: string | number) {
    const phoneTrue = validatePhoneNumber(String(bi_phone));
    const biTrue = validateBI(String(bi_phone));

    if (biTrue) {
      const appointment = await this.prisma.scheduling.findMany({
        where: {
          citizen: {
            bi: String(bi_phone),
          },
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

    if (phoneTrue) {
      const appointment = await this.prisma.scheduling.findMany({
        where: {
          citizen: {
            phone: Number(bi_phone),
          },
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
        AND: [{ scheduling_state: 'PENDING' }],
      },
    });
  }

  async report() {
    const total = await this.prisma.scheduling.findMany();

    const confirmed = total.filter(
      (item) => item.scheduling_state === SchedulingState.CONFIRMED,
    );
    const pending = total.filter(
      (item) => item.scheduling_state === SchedulingState.PENDING,
    );
    const expired = total.filter(
      (item) => item.scheduling_state === SchedulingState.EXPIRED,
    );

    return {
      total: total.length,
      confirmed: confirmed.length,
      pending: pending.length,
      expired: expired.length,
    };
  }
}
