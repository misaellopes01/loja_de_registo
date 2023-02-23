import { SchedulingState, StateBI } from '../enum/schedule.enum';

export class CreateScheduleDto {
  name: string;
  phone: number;
  bi?: string;
  scheduling_state: SchedulingState.PENDING;
  bi_situation?: StateBI;
}
