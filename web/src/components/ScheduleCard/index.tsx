import { Download } from "phosphor-react";
import { Span } from "../../pages/Client/Result/styles";
import { CardContainer } from "./styles";

export interface ScheduleProps {
  schedule: {
    id: string,
    scheduling_state: string,
    scheduling_date: Date,
    bi_situation: string,
    bi_gv_system_situation: string,
    created_at: Date,
    citizen: {
      id: string,
      bi: string,
      name: string,
      phone: number
    }
  }
}

export function ScheduleCard({ schedule }: ScheduleProps) {

  return(
    <CardContainer>
      <Span statusColor={schedule.scheduling_state !== 'pending' ? schedule.scheduling_state === 'expired' ? 'red': 'blue' : 'green'}></Span>
      <div>
        <strong>{schedule.citizen.name}</strong>
        <span>SITUAÇÃO DO BI: <strong>{schedule.bi_situation}</strong></span>
      </div>
      <em>DATA: <strong>{String(schedule.scheduling_date)}</strong></em>
      <button>
        <Download size={24} weight='fill' color="crimson" />
        Baixar Comprovativo
      </button>
    </CardContainer>
  )
}