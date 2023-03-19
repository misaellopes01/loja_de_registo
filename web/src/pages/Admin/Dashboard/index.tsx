import { Bell, BellSimpleRinging, BellSimpleSlash, Clock } from "phosphor-react";
import { DashboardContainer } from "./styles";


export function Dashboard(){
  return(
    <DashboardContainer>
      <h1>Estatísticas</h1>
      <section>
        <div className="card">
          <strong>Total</strong>
          <div>
            <Bell size={64} weight='fill' color="#FFDC00"/>
            <span>50</span>
          </div>
        </div>
        <div className="card">
          <strong>Pendentes</strong>
          <div>
            <Clock size={64} weight='fill' color="#21A700" />
            <span>20</span>
          </div>
        </div>
        <div className="card">
          <strong>Atendidos</strong>
          <div>
            <BellSimpleRinging size={64} weight='fill' color="#003D99" />
            <span>18</span>
          </div>
        </div>
        <div className="card">
          <strong>Cancelados</strong>
          <div>
            <BellSimpleSlash size={64} weight='fill' color="#AA0E0D" />
            <span>12</span>
          </div>
        </div>
      </section>
    </DashboardContainer>
  )
}