import { ArrowLeft, ArrowRight } from "phosphor-react";
import { ScheduleAdminCard } from "../../../components/ScheduleAdminCard";
import { Span } from "../../Client/Result/styles";
import { SchedulingContainer } from "./styles";


export function Scheduling(){
  
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
          <strong>Nome</strong>
          <strong>Bilhete de Identidade</strong>
          <strong>Motivo</strong>
          <strong>Data</strong>
        </div>

        <ScheduleAdminCard />
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