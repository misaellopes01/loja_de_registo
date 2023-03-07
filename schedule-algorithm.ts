function scheduleAppointment(): string {
  const today = new Date();
  let nextWeekday = new Date(today.getTime() + 24 * 60 * 60 * 1000); // set to tomorrow
  while (nextWeekday.getDay() === 0 || nextWeekday.getDay() === 6) {
    // if it's Saturday or Sunday, increment the date by one day
    nextWeekday = new Date(nextWeekday.getTime() + 24 * 60 * 60 * 1000);
  }
  // return the date in the format "Weekday, Month Day"
  return `${getWeekdayName(nextWeekday)}, ${nextWeekday.getDate()}`;
}

function getWeekdayName(date: Date): string {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return weekdays[date.getDay()];
}


const appointmentDate = scheduleAppointment();
console.log(`Your appointment is scheduled for ${appointmentDate}.`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Appointment {
  date: Date;
  count: number;
}

class AppointmentScheduler {
  private appointments: Appointment[] = [];

  scheduleAppointment(): Date {
    const now = new Date();
    const nextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);
    const dayLimit = 10;

    // Find the first available date that is not a Saturday or Sunday
    let date = nextWeek;
    while (date.getDay() === 0 || date.getDay() === 6) {
      date.setDate(date.getDate() + 1);
    }

    // Find the first available date with less than the day limit appointments
    let count = 0;
    for (let i = 0; i < this.appointments.length; i++) {
      if (this.appointments[i].date.getTime() === date.getTime()) {
        count = this.appointments[i].count;
        break;
      }
    }

    while (count >= dayLimit) {
      date.setDate(date.getDate() + 1);
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        count = 0;
        for (let i = 0; i < this.appointments.length; i++) {
          if (this.appointments[i].date.getTime() === date.getTime()) {
            count = this.appointments[i].count;
            break;
          }
        }
      }
    }

    // Schedule the appointment and update the count
    this.appointments.push({ date, count: count + 1 });

    // Return the date of the appointment
    return date;
  }
}

const scheduler = new AppointmentScheduler();
let appointmentDate = scheduler.scheduleAppointment();

while (appointmentDate.getDay() === 0 || appointmentDate.getDay() === 6) {
  // If the appointment is scheduled on a Saturday or Sunday, schedule it for the next available day
  appointmentDate = scheduler.scheduleAppointment();
}

// Output the day of the week and the day of the month
console.log(`Your appointment is on ${appointmentDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`);

// Check if the day limit has been reached and schedule appointments for the next day(s) if necessary
const now = new Date();
const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
let nextDate = nextDay;

while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
  nextDate.setDate(nextDate.getDate() + 1);
}

let count = 0;
for (let i = 0; i < scheduler.appointments.length; i++) {
  if (scheduler.appointments[i].date.getTime() === nextDate.getTime()) {
    count = scheduler.appointments[i].count;
    break;
  }
}

while (count >= dayLimit) {
  nextDate.setDate(nextDate.getDate() + 1);
  if (nextDate.getDay() !== 0 && nextDate.getDay() !== 6) {
    count = 0;
    for (let i = 0; i < scheduler.appointments.length; i++) {
      if (scheduler.appointments[i].date.getTime() === nextDate.getTime()) {
        count = scheduler.appointments[i].count;
        break;
      }
    }
  }
}

if (nextDate.getTime() !== nextDay.getTime()) {
  console.log(`Appointments for tomorrow have reached the day limit, next available appointment is on ${nextDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}`);
  
  //////////////////////////////////////////////////////////////////////////////////////
  
  interface Appointment {
  date: Date;
}

class AppointmentScheduler {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public scheduleAppointment(dayLimit: number): string {
    const currentDate = new Date();
    let appointmentDate = new Date(currentDate);
    appointmentDate.setDate(currentDate.getDate() + 1); // Set appointment for next day

    let availableSlots = dayLimit;
    while (availableSlots > 0) {
      // Check if appointment is on a weekday (not Saturday or Sunday)
      if (appointmentDate.getDay() !== 0 && appointmentDate.getDay() !== 6) {
        // Check if appointment slot is available
        if (this.isAppointmentAvailable(appointmentDate)) {
          // Schedule appointment
          this.appointments.push({ date: appointmentDate });
          availableSlots--;
        }
      }

      // Move to next day
      appointmentDate.setDate(appointmentDate.getDate() + 1);
    }

    // Return output with next available appointment date
    return `Your next appointment is on ${this.formatDate(this.appointments[0].date)}`;
  }

  private isAppointmentAvailable(date: Date): boolean {
    // Check if there are fewer than 10 appointments scheduled for the given day
    const appointmentsOnDate = this.appointments.filter(
      (appointment) => this.areDatesEqual(appointment.date, date)
    );
    return appointmentsOnDate.length < 10;
  }

  private areDatesEqual(date1: Date, date2: Date): boolean {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  }

  private formatDate(date: Date): string {
    const weekday = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
    const monthDay = new Intl.DateTimeFormat('en-US', { day: 'numeric' }).format(date);
    return `${weekday}, ${monthDay}`;
  }
}

// Example usage
const scheduler = new AppointmentScheduler();
console.log(scheduler.scheduleAppointment(10)); // Output: Your next appointment is on Monday, 13


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

interface Appointment {
  date: Date;
}

class AppointmentScheduler {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public scheduleAppointment(): void {
    const currentDate = new Date();
    const nextDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1,
    );

    while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
      nextDate.setDate(nextDate.getDate() + 1);
    }

    let scheduled = false;
    for (let i = 0; i < 7 && !scheduled; i++) {
      const appointmentsOnNextDate = this.appointments.filter((appointment) => {
        return (
          appointment.date.getFullYear() === nextDate.getFullYear() &&
          appointment.date.getMonth() === nextDate.getMonth() &&
          appointment.date.getDate() === nextDate.getDate()
        );
      });

      if (appointmentsOnNextDate.length < 10) {
        this.appointments.push({ date: nextDate });
        console.log(
          `Appointment scheduled for ${nextDate.toLocaleDateString()} (${this.getDayOfWeek(
            nextDate,
          )})`,
        );
        scheduled = true;
      } else {
        nextDate.setDate(nextDate.getDate() + 1);
        while (nextDate.getDay() === 0 || nextDate.getDay() === 6) {
          nextDate.setDate(nextDate.getDate() + 1);
        }
      }
    }

    if (!scheduled) {
      console.log('Unable to schedule appointment. Please try again later.');
    }
  }

  private getDayOfWeek(date: Date): string {
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return daysOfWeek[date.getDay()];
  }
}

// Usage example
const appointmentScheduler = new AppointmentScheduler();
appointmentScheduler.scheduleAppointment();



