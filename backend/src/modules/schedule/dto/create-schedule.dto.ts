import { StateBI } from '../enum/schedule.enum';

export interface CreateScheduleDto {
  name: string;
  phone: number;
  bi?: string;
  bi_situation?: StateBI;
}
