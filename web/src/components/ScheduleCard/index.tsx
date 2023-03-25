import { Download } from "phosphor-react";
import { isPast, format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
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

enum StateBI {
  EXPIRED = 'EXPIRED',
  BAD_CONSERVATION = 'BAD_CONSERVATION',
  ENDORSEMENT = 'ENDORSEMENT',
  LOSS = 'LOSS',
  STEALING = 'STEALING',
  NEW = 'NEW',
}

export function ScheduleCard({ schedule }: ScheduleProps) {
  function translateSituation(bi_situation: string){
    switch (bi_situation) {
      case StateBI.EXPIRED:
        return 'Expirado'
      case StateBI.BAD_CONSERVATION:
        return 'Má Conservação'
      case StateBI.ENDORSEMENT:
        return 'Averbamento'
      case StateBI.LOSS:
        return 'Perdido'
      case StateBI.STEALING:
        return 'Roubado'
      case StateBI.NEW:
        return 'Novo'
      default:
        break;
    }
  }

  return(
    <CardContainer>
      <Span statusColor={schedule.scheduling_state !== 'PENDING' ? schedule.scheduling_state === 'EXPIRED' ? 'red': 'blue' : 'green'}></Span>
      <div>
        <strong>{schedule.citizen.name}</strong>
        <span>Situação do BI: <strong>{translateSituation(schedule.bi_situation)}</strong></span>
      </div>
      <em>Agendado para <strong>{String(format(new Date(schedule.scheduling_date), "d ' de ' MMMM'", {
                            locale: ptBR
                        }))}</strong></em>
      <button>
        <Download size={24} weight='fill' color="crimson" />
        Baixar Comprovativo
      </button>
    </CardContainer>
  )
}