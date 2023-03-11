import { SchedulingState } from '../enum/schedule.enum';

export interface UpdateScheduleDto {
  scheduling_id: string;
  scheduling_state: SchedulingState.CONFIRMED | SchedulingState.EXPIRED;
}
