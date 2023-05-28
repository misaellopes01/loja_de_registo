import { useContext } from "react"
import { SchedulingContainer } from "../Scheduling/styles"
import { SettingsContainer } from "./styles"
import { AuthContext } from "../../../contexts/Auth"
import { Trash } from "phosphor-react"


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
 const { userInfo } =  useContext(AuthContext)
  return(
    <SettingsContainer>
      <h1>Definições</h1>
      <section className="profileCard">
        <h2>Alterar Dados de Usuário</h2>
        <div className="card">
          <div className="profilePic">
            <img src={userInfo?.avatar_url} alt="" />
            <input type="file" alt="" />
            <button>Alterar Avatar</button>    
          </div>
          <div className="profileInfo">
            <input type="email" value={userInfo?.email} disabled/>
            <input type="text" value={userInfo?.name}/>
            <input type="text" name="" value={userInfo?.role} id="" />
            <button>Alterar dados</button>
          </div>
          <div className="profilePassword">
            <span>Senha incorreta</span>
            <input type="password" placeholder="Digite a senha atual"/>
            <input type="password" placeholder="Digite a senha nova"/> 
            <button>Alterar senha</button> 
          </div> 
        </div>
      </section>
      <section className="newUserCard">
        <h2>Criar Novo Usuário</h2>
        <div className="userCard">
          <div className="newUserInfo">
              <input type="email" value={''} placeholder="Digite o email"/>
              <input type="text" value={''} placeholder="Digite o nome" />
              <input type="text" value={''} name="" placeholder="Cargo" id="" />
              <input type="password" value={''} name="" placeholder="Digite a senha" id="" />  
              <button>Criar usuário</button>
          </div>
          <div className="listOfUsers">
              <h3>Lista de usuários</h3>
              <div className="user">
                <input type="email" value={userInfo?.email} disabled/>
                <input type="text" value={userInfo?.name} disabled/>
                <button><Trash size={24} /></button>
              </div>
          </div>
        </div>
          
      </section>
       
    </SettingsContainer>
  )
}