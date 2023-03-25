import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../../contexts/SearchContext";
import { ConsultContainer } from "./styles";

export function validateString(inputStr: string): boolean {
  const pattern = /^\d{9}[a-zA-Z]{2}\d{3}$/;
  return pattern.test(inputStr);
}
export function validatePhoneNumber(inputStr: string): boolean {
  const pattern = /^(92|93|94|91|99|95)\d{7}$/;
  const validate = pattern.test(inputStr);
  const number = !isNaN(Number(inputStr))
  if (validate && number) {
    return true
  } else {
    return false
  }
}

export function Consult() {
  const navigate = useNavigate();
  const [valid, setValid] = useState<string>('')
  const { consultData, setConsultData } = useSearchContext()
  

  function handleConsultState(event: any) {
    event.preventDefault();
    const data = event.target.value
    setConsultData(data)
  }
  useEffect(() => {
    const validateBI = validateString(consultData)
    const validateNumber = validatePhoneNumber(consultData)
    if (validateBI || validateNumber) {
      setValid('Valido')
    } else if (consultData === '') {
      setValid('')
    } else {
      setValid('Invalido')
    }
  }, [valid, consultData])

  async function handleSubmit() {
    
    navigate('/consult/result', { replace: true });
  }

    return (
        <ConsultContainer>
          <h1>Consultar atendimentos</h1>

          <form onSubmit={e => e.preventDefault()} method="get">
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
              <span style={{ color: `${valid === 'Valido' ? 'green' : 'red'}`}}>{valid}</span>
            </main>
            <footer>
              <button 
                type="submit"
                onClick={handleSubmit}
                disabled={valid === 'Invalido' || valid === '' && true}
              >
                Consultar
              </button>
            </footer>
          </form>
        </ConsultContainer>
    )
}