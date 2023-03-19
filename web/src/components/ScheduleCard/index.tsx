import { Download } from "phosphor-react";
import { Span } from "../../pages/Client/Result/styles";
import { CardContainer } from "./styles";

export interface ScheduleProps {
  schedule: {
    name: string
    state: string
    bi_state: string
    date: string
  }
}

export function ScheduleCard({ schedule }: ScheduleProps) {

  return(
    <CardContainer>
      <Span statusColor={schedule.state !== 'pending' ? schedule.state === 'expired' ? 'red': 'blue' : 'green'}></Span>
      <div>
        <strong>{schedule.name}</strong>
        <span>SITUAÇÃO DO BI: <strong>{schedule.bi_state}</strong></span>
      </div>
      <em>DATA: <strong>{schedule.date}</strong></em>
      <button>
        <Download size={24} weight='fill' color="crimson" />
        Baixar Comprovativo
      </button>
    </CardContainer>
  )
}