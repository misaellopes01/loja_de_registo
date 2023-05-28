import { SchedulingContainer } from "../Scheduling/styles"
import { SettingsContainer } from "./styles"


interface ScheduleProps {
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

export function Settings(){

  return(
    <SettingsContainer>
      <h1>Definições</h1>
      <section className="profileCard">
        <h2>Alterar Dados de Usuário</h2>
      </section>
      <section className="newUserCard">
        <h2>Criar Novo Usuário</h2>
      </section>
       
    </SettingsContainer>
  )
}