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
  // const [filteredScheduleData, setFilteredScheduleData] = useState<ScheduleProps[]>([])
  const [search, setSearch] = useState<string>('')
  const { confirm, setConfirm } = useSearchContext()
  

    useEffect(() => {
      const token = localStorage.getItem('@lj_register:token')
      async function getSchedules() {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`
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

    const filteredScheduleData = search.length > 0 ? scheduleData.filter(schedule => schedule.scheduling_state === search || schedule.citizen.name === search || schedule.citizen.phone === Number(search) || schedule.citizen.bi === search || new Date(schedule.scheduling_date).toLocaleDateString("en-US") === new Date(search).toLocaleDateString("en-US")) : []

  return(
    <SchedulingContainer>
      <h1>Agendamentos</h1>
      <section>
        <div className="search">
          <h2>Filtros</h2>
          <div className="contentForm">
            <select id="scheduleState" onChange={(e: any) => setSearch(e.target.value)} name="scheduleState">
                    <option value="">Selecionar Estado</option>
                    <option value="PENDING">Pendente</option>
                    <option value="CONFIRMED">Atendido</option>
                    <option value="EXPIRED">Cancelado</option>
            </select>
            <em>ou</em>
            <input type="text" value={search} onChange={(e: any) => setSearch(e.target.value)} placeholder="Bilhete / Número / Nome" />
            <em>ou</em>
            <input type="date" value={search} onChange={(e: any) => setSearch(e.target.value)} min="2023-01-01" name="" id="" />
          </div>
        </div>
        <div className="scheduleHeader">
          <strong>Estado da marcação</strong>
          <strong>Nome Completo</strong>
          <strong>Bilhete de Identidade</strong>
          <strong>Motivo</strong>
          <strong>Data</strong>
        </div>

        {search.length > 0 ? (
          filteredScheduleData.map((item) => (
            <ScheduleAdminCard key={item.id} schedule={item} />
          ))
        ) : (
          scheduleData.map((item) => (
            <ScheduleAdminCard key={item.id} schedule={item} />
          ))
        )}
      </section>
      <div className="control" style={{ display: 'none'}}>
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