import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';

@Injectable()
export class AppointmentScheduler {
  constructor(private prisma: PrismaService) {}

  async scheduleAppointment(): Promise<Date> {
    const appointments = await this.prisma.scheduling.findMany();

    const currentDate = new Date();
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 6,
    );

    while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
      nextDate.setDate(nextDate.getDate() + 1);
    }

    let scheduled = false;
    for (let i = 0; i < 7 && !scheduled; i++) {
      const appointmentsOnNextDate = appointments.filter((appointment) => {
        return (
          appointment.scheduling_date.getFullYear() ===
            nextDate.getFullYear() &&
          appointment.scheduling_date.getMonth() === nextDate.getMonth() &&
          appointment.scheduling_date.getDate() === nextDate.getDate()
        );
      });

      if (appointmentsOnNextDate.length < 10) {
        scheduled = true;
        return nextDate;
      } else {
        nextDate.setDate(nextDate.getDate() + 1);
        while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
          nextDate.setDate(nextDate.getDate() + 1);
        }
      }
    }
  }
}
