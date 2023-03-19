import { ScheduleCard } from "../../../components/ScheduleCard";
import { ResultContainer, Span } from "./styles";

export interface ScheduleProps {
    name: string
    state: string
    bi_state: string
    date: string
}

const schedule: ScheduleProps[] = [
  {
    name: 'Teresa Pinto',
    bi_state: 'Averbamento',
    date: '20/03/2023',
    state: 'pending'
  },
  {
    name: 'Teresa Pinto',
    bi_state: 'Averbamento',
    date: '17/03/2023',
    state: 'expired'
  },
  {
    name: 'Teresa Pinto',
    bi_state: 'Expirado',
    date: '10/03/2023',
    state: 'confirmed'
  }
]

export function Result() {

    return (
        <ResultContainer>
          <h1>Resultados de agendamentos</h1>
          <div className="colors">
            <Span statusColor="red">Cancelado</Span>
            <Span statusColor="green">Pendente</Span>
            <Span statusColor="blue">Atendido</Span>
          </div>
          <section>
            {schedule.map((item) => (
              <ScheduleCard schedule={item} />
            ))}
          </section>

        </ResultContainer>
    )
}