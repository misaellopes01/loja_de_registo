import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useState } from 'react';
import { useSearchContext } from '../../contexts/SearchContext';
import { api } from '../../lib/api';
import { Span } from "../../pages/Client/Result/styles";
import { StateBI } from "../../pages/Client/Schedule";
import { ScheduleProps } from "../ScheduleCard";
import { ScheduleAdminCardContainer } from "./styles";

export function translateState(state: string){
  switch (state) {
    case 'PENDING':
      return 'Pendente'
    case 'CONFIRMED':
      return 'Atendido'
    case 'EXPIRED':
      return 'Cancelado'
    default:
      break;
  }
}

export function ScheduleAdminCard({ schedule }: ScheduleProps){
  const [httpRes, setHttpRes] = useState<number>(0)
  const { setConfirm } = useSearchContext()
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

  const verifyDates = () =>  {
    const currentDate = new Date();
    const schedulingDate = new Date(schedule.scheduling_date);
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const schedulingDay = schedulingDate.getDate();
    const schedulingMonth = schedulingDate.getMonth();
    const schedulingYear = schedulingDate.getFullYear();
    if (
      currentDay === schedulingDay &&
      currentMonth === schedulingMonth &&
      currentYear === schedulingYear
    ) {
      return true
    } else {
      return false
    }
  }
  

  async function handleSubmit() {
    if (verifyDates()) {
      if (window.confirm("Deseja confirmar agendamento?")) {
        setHttpRes(1)
        const token = localStorage.getItem('@lj_register:token')
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await api.patch(`/schedule/update/${schedule.id}`)
        setConfirm(true)
        setHttpRes(response.status)
      }
    } else {
      window.alert('Não pode confirmar um agendamento num dia diferente do dia marcado')
    }
  }

  return(
    <ScheduleAdminCardContainer>
          <Span statusColor={schedule.scheduling_state !== 'PENDING' ? schedule.scheduling_state === 'EXPIRED' ? 'red': 'blue' : 'green'}>{translateState(schedule.scheduling_state)}</Span>
          <h3>{schedule.citizen.name}</h3>
          <span>{schedule.citizen.bi}</span>
          <span>
            {translateSituation(schedule.bi_situation)}
            <br />
            <em>{schedule.bi_gv_system_situation}</em>
          </span>
          <span>{String(format(new Date(schedule.scheduling_date), "d ' de ' MMMM'", {
                            locale: ptBR
                        }))}</span>
          <button 
            onClick={handleSubmit}
            disabled={(schedule.scheduling_state === 'CONFIRMED' || schedule.scheduling_state === 'EXPIRED' || httpRes === 1) ?? true}>
              {schedule.scheduling_state === 'CONFIRMED' ? 'Confirmado' : (schedule.scheduling_state === 'EXPIRED' ? 'Cancelado' : 'Confirmar')}
          </button>
    </ScheduleAdminCardContainer>
  )
}