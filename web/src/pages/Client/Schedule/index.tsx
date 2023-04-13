import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { api } from "../../../lib/api";
import { ScheduleContainer } from "./styles";
import { validatePhoneNumber, validateBI } from "../../../utils/validation";

export enum StateBI {
  EXPIRED = 'EXPIRED',
  BAD_CONSERVATION = 'BAD_CONSERVATION',
  ENDORSEMENT = 'ENDORSEMENT',
  LOSS = 'LOSS',
  STEALING = 'STEALING',
  NEW = 'NEW',
}
interface CreateScheduleDto {
  name: string;
  phone: number;
  bi?: string;
  bi_situation?: string;
  bi_gv_system_situation?: string;
}


export function Schedule() {
    const [ifNew, setIfNew] = useState<number>(0)
    const [BINumber, setBINumber] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [phone, setPhone] = useState<number>(0)
    const [BIState, setBIState] = useState<string>('Estado do Bilhete')
    const [govSystemState, setGovSystemState] = useState<string>('')
    const [schedule, setSchedule] = useState<CreateScheduleDto>()
    const [allowButton, setAllowButton] = useState<boolean>(false)
    const navigate = useNavigate();

    function handleIfNew() {
      ifNew === 0 ? setIfNew(1) : setIfNew(0) 
    }
    function handleBINumber(event: any) {
      setBINumber(event.target.value)
    }
    function handleName(event: any) {
      setName(event.target.value)
    }
    function handlePhone(event: any) {
      setPhone(Number(event.target.value)) 
    }
    function handleBIState(event: any) {
      setBIState(event.target.value) 
    }
    
    async function handleSubmit() {
      await api.post('/schedule/create', schedule)
      navigate('/schedule/done', { replace: true });
    }
  
    async function getResponseFromGov() {
      
      const response = await axios.post('https://bi-bs.minjusdh.gov.ao/pims-backend/api/v1/progress', 
      {
        affairsType:"IDCard",
        affairsReceipt: BINumber,
        captchaValue:""}
      )
      setGovSystemState(response.data.affairsProgressState)
    }
      
    const validation = govSystemState === 'notInfo' ? false : true

    useEffect(() => {
      function verifyData() {
        if (ifNew === 1 && validatePhoneNumber(String(phone)) && name.length >= 10) {
          setBIState('Estado do Bilhete')  
        } else if(ifNew === 0 && validatePhoneNumber(String(phone)) && name.length >= 10 && validateBI(BINumber) && validation && (BIState !== 'Estado do Bilhete')) {
          setAllowButton(true)
        } else (
          setAllowButton(false)
        )
      }
      function handleSchedule() {
        setSchedule({
          name,
          phone,
          bi: BINumber || 'Tratar novo',
          bi_situation: BIState || StateBI.NEW,
          bi_gv_system_situation: govSystemState === 'notInfo' ? 'Inexistente' : govSystemState
        })   
      }
      verifyData()
      
      handleSchedule()
    }, [BINumber, govSystemState, name, phone, BIState, validation, ifNew])

    return (
        <ScheduleContainer>
          <h1>Agendar atendimento</h1>

          <form onSubmit={e => e.preventDefault()} method="get">
            <main>
              <strong>Formulário de Agendamento</strong>
              <span>Preencha os campos</span>
              <div className="option">
                <input type="range" name="" id=""  min="0" max="1" defaultValue={ifNew} onChange={handleIfNew} />
                <label>Selecionar em caso de novo BI</label>
              </div>
              <div className="bi">
              <input type="text" name="" id="bi" onChange={handleBINumber} onBlur={() => getResponseFromGov()} placeholder="Número do BI" disabled={ifNew === 1} />
              <span style={validation === true ? {color: 'green'} : {color: 'red'}}>{govSystemState !== '' ? (validation === true ? 'Valido' : 'Invalido') : ''}</span>
              </div>
              <input type="text" name="" id="name" onChange={handleName} placeholder="Nome completo" />
              <div className="last">
                <input type="text" name="" id="" minLength={9} onChange={handlePhone} maxLength={9} placeholder="Número de Telemóvel" />
                <select id="BIState" name="BIState" value={BIState} onChange={handleBIState} disabled={ifNew === 1}>
                  <option value="Estado do Bilhete">Estado do Bilhete</option>
                  <option value={StateBI.EXPIRED}>Expirado</option>
                  <option value={StateBI.BAD_CONSERVATION}>Ma Conservação</option>
                  <option value={StateBI.LOSS}>Perdido</option>
                  <option value={StateBI.STEALING}>Roubo</option>
                  <option value={StateBI.ENDORSEMENT}>Averbamento</option>
                </select>
              </div>
            </main>
            <footer>
              <NavLink to='/'>Cancelar</NavLink>
              <button 
                disabled={!allowButton}
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </footer>
          </form>
        </ScheduleContainer>
    )
}