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
                <input type="range" name="" id=""  min="0" max="1" value={0} />
                <label>Selecionar em caso de novo BI</label>
              </div>
              <input type="text" name="" id="bi" placeholder="Número do BI" />
              <input type="text" name="" id="name" placeholder="Nome completo" />
              <div className="last">
                <input type="number" name="" id="" placeholder="Número de Telemóvel" />
                <select id="BIState" name="BIState">
                  <option value="">Estado do Bilhete</option>
                  <option value="EXPIRED">Expirado</option>
                  <option value="BAD_CONSERVATION">Ma Conservação</option>
                  <option value="LOSS">Perdido</option>
                  <option value="STEALING">Roubo</option>
                  <option value="ENDORSEMENT">Averbamento</option>
                </select>
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