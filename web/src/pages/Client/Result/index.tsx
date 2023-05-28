import { api } from "../../../lib/api";
import { ScheduleCard } from "../../../components/ScheduleCard";
import { ResultContainer, Span } from "./styles";
import { useEffect, useState } from "react";
import { useSearchContext } from "../../../contexts/SearchContext";

export interface ScheduleProps {
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


export function Result() {

    const [scheduleData, setScheduleData] = useState<ScheduleProps[]>([])
    const { consultData } = useSearchContext()

    useEffect(() => {
      async function getSchedules() {
        try {
          const response = await api.post('/schedule/citizen/many', { bi_phone: consultData })
          
          setScheduleData(response.data)
        }
        catch (error) {
          console.log(error);
        }
      }
      getSchedules() 
    }, [])
    return (
        <ResultContainer>
          <h1>Resultados de agendamentos</h1>
          <div className="colors">
            <Span statusColor="red">Cancelado</Span>
            <Span statusColor="green">Pendente</Span>
            <Span statusColor="blue">Atendido</Span>
          </div>
          <section>
            {scheduleData.length > 0 ? scheduleData.map((item) => (
              <ScheduleCard key={item.id} schedule={item} />
            )) : <span>Nenhum agendamento encontrado para {consultData}</span>}
          </section>

        </ResultContainer>
    )
}