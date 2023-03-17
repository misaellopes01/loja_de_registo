import { NavLink } from "react-router-dom";
import { ConsultContainer } from "./styles";

export function Consult() {

    return (
        <ConsultContainer>
          <h1>Consultar atendimentos</h1>

          <form action="#" method="post">
            <main>
              <strong>Formulário de consultas de agendamentos</strong>
              <input type="text" name="" id="bi" placeholder="Digite o número do BI ou telemóvel" />
            </main>
            <footer>
              <button type="submit">Consultar</button>
            </footer>
          </form>
        </ConsultContainer>
    )
}