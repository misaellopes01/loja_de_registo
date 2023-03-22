import { Span } from "../../pages/Client/Result/styles";
import { ScheduleAdminCardContainer } from "./styles";


export function ScheduleAdminCard(){

  return(
    <ScheduleAdminCardContainer>
          <Span statusColor="green">Pendente</Span>
          <h3>Misael Lopes</h3>
          <span>006758522BA042</span>
          <span>
            Expirado
            <br />
            <em>Entregue</em>
          </span>
          <span>23/03/2023</span>
          <button>Confirmar</button>
    </ScheduleAdminCardContainer>
  )
}