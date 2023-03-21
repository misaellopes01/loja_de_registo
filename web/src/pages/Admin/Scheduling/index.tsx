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

        <div className="scheduleCard">
          <Span statusColor="blue">Atendido</Span>
          <h3>Misael Lopes</h3>
          <span>006758522BA042</span>
          <span>Expirado</span>
          <button>Confirmar</button>
        </div>
      </section>
    </SchedulingContainer>
  )
}