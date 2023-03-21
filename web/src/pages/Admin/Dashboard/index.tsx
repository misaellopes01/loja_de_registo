import { Bell, BellSimpleRinging, BellSimpleSlash, Clock } from "phosphor-react";
import { DashboardContainer } from "./styles";


export function Dashboard(){
  const sizeIcon = 84
  return(
    <DashboardContainer>
      <h1>Estatísticas</h1>
      <section>
        <div className="card">
          <strong>Total</strong>
          <div>
            <Bell size={sizeIcon} weight='fill' color="#FFDC00"/>
            <span>50</span>
          </div>
        </div>
        <div className="card">
          <strong>Pendentes</strong>
          <div>
            <Clock size={sizeIcon} weight='fill' color="#21A700" />
            <span>20</span>
          </div>
        </div>
        <div className="card">
          <strong>Atendidos</strong>
          <div>
            <BellSimpleRinging size={sizeIcon} weight='fill' color="#003D99" />
            <span>18</span>
          </div>
        </div>
        <div className="card">
          <strong>Cancelados</strong>
          <div>
            <BellSimpleSlash size={sizeIcon} weight='fill' color="#AA0E0D" />
            <span>12</span>
          </div>
        </div>
      </section>
    </DashboardContainer>
  )
}