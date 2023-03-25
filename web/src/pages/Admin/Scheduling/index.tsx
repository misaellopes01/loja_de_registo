import { ArrowLeft, ArrowRight } from "phosphor-react";
import { useEffect, useState } from "react";
import { ScheduleAdminCard } from "../../../components/ScheduleAdminCard";
import { useSearchContext } from "../../../contexts/SearchContext";
import { api } from "../../../lib/api";
import { Span } from "../../Client/Result/styles";
import { SchedulingContainer } from "./styles";

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

export function Scheduling(){

  const [scheduleData, setScheduleData] = useState<ScheduleProps[]>([])
  const { confirm, setConfirm } = useSearchContext()

    useEffect(() => {
      async function getSchedules() {
        try {
          const response = await api.get('/schedule/all')
          setScheduleData(response.data)
        }
        catch (error) {
          console.log(error);
        }
      }
      getSchedules() 
      setConfirm(false)
    }, [confirm])

  return(
    <SchedulingContainer>
      <h1>Agendamentos</h1>
      <section>
        <div className="search">
          <h2>Filtros</h2>
          <div className="contentForm">
            <select id="scheduleState" name="scheduleState">
                    <option value="">Selecionar Estado</option>
                    <option value="pending">Pendente</option>
                    <option value="confirmed">Atendido</option>
                    <option value="canceled">Cancelado</option>
            </select>
            <em>ou</em>
            <input type="text" placeholder="Bilhete / Número / Nome" />
            <em>ou</em>
            <input type="date" min="2023-01-01" name="" id="" />
          </div>
        </div>
        <div className="scheduleHeader">
          <strong>Estado da marcação</strong>
          <strong>Nome Completo</strong>
          <strong>Bilhete de Identidade</strong>
          <strong>Motivo</strong>
          <strong>Data</strong>
        </div>

        {scheduleData.map((item) => (
          <ScheduleAdminCard key={item.id} schedule={item} />
        ))}
      </section>
      <div className="control">
          <button>
            <ArrowLeft size={24} />
          </button>
          <span>
            <strong>1 </strong>
            de
            <strong> 10</strong>
            </span>
          <button>
            <ArrowRight size={24} />
          </button>
      </div>
    </SchedulingContainer>
  )
}