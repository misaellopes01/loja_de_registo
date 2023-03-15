import { NavLink } from "react-router-dom";
import { ScheduleContainer } from "./styles";

export function Schedule() {

    return (
        <ScheduleContainer>
          <h1>Agendar atendimento</h1>

          <form action="#" method="post">
            <main>
              <strong>Formulário de Agendamento</strong>
              <span>Preencha os campos</span>
              <div className="option">
                <input type="range" name="" id=""  min="0" max="1" />
                <label>Selecionar em caso de novo BI</label>
              </div>
              <input type="text" name="" id="" />
              <input type="text" name="" id="" />
              <div className="last">
                <input type="number" name="" id="" />
                <input type="text" name="" id="" />
              </div>
            </main>
            <footer>
              <NavLink to='/'>Cancelar</NavLink>
              <button type="submit">Enviar</button>
            </footer>
          </form>
        </ScheduleContainer>
    )
}