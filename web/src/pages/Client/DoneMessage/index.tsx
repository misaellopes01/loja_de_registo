import { NavLink, useNavigate } from "react-router-dom";
import { useSearchContext } from "../../../contexts/SearchContext";
import { ConsultContainer } from "./styles";
import message from './../../../assets/success.svg'

export function DoneMessage() {

  const navigate = useNavigate();

  async function handleSubmit() {
    navigate('/consult', { replace: true });
  }
    return (
        <ConsultContainer>
          <h1>Agendamento feito com sucesso!</h1>
          <img src={message} alt="" />
          <div className="">
            <span>Pode consultar usando o número do BI ou Telemóvel</span>
            <button onClick={handleSubmit}>Consultar</button>
          </div>
        </ConsultContainer>
    )
}