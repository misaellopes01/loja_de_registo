import { NavLink } from "react-router-dom";
import { useSearchContext } from "../../../contexts/SearchContext";
import { ConsultContainer } from "./styles";

export function Consult() {

  const { consultData, setConsultData } = useSearchContext()

    function handleConsultState(event: any) {
      event.preventDefault();
      setConsultData(event.target.value)
    }

    return (
        <ConsultContainer>
          <h1>Consultar atendimentos</h1>

          <form action="/result" onSubmit={e => e.preventDefault()} method="get">
            <main>
              <strong>Formulário de consultas de agendamentos</strong>
              <input 
                type="text" 
                name=""
                value={consultData} 
                id="bi_phone" 
                placeholder="Digite o número do BI ou telemóvel"
                minLength={9}
                maxLength={14}
                onChange={handleConsultState}
              />
            </main>
            <footer>
              <NavLink 
                type="submit"
                to={'result'}
              >
                Consultar
              </NavLink>
            </footer>
          </form>
        </ConsultContainer>
    )
}