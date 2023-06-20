import { useContext, useEffect, useState } from "react"
import { SchedulingContainer } from "../Scheduling/styles"
import { SettingsContainer } from "./styles"
import { AuthContext, UserResponse } from "../../../contexts/Auth"
import { Trash, WarningCircle } from "phosphor-react"
import { api } from "../../../lib/api"


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

interface UsersProps {
  admin: boolean
  id: string
  email: string
  name: string
}

export function Settings(){

  const { userInfo } =  useContext(AuthContext)
  const [password, setPassword] = useState<string>('')
  const [newPassword, setNewPassword] = useState<string>('')
  const [name, setName] = useState<string>(userInfo?.name || 'Nome Completo')
  const [avatarFile, setAvatarFile] = useState<any>()

  const [users, setUsers] = useState<UsersProps[]>([])

  const [newUserEmail, setNewUserEmail] = useState<string>('')
  const [newUserName, setNewUserName] = useState<string>('')
  const [newUserRole, setNewUserRole] = useState<string>('')
  const [newUserPassword, setNewUserPassword] = useState<string>('')
  const handleChangeName = async () => {
    const token = localStorage.getItem('@lj_register:token')
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    const response = await api.patch('/user/profile/update', { name })
    const userData = await api.get<UserResponse>('/user/me')
    const user = userData.data        
    const userJSON = JSON.stringify(user)
    localStorage.setItem('@lj_register:user', userJSON)
    alert(response.data)
    window.location.href = '/admin/settings'
  }

  const handleChangePassword = async () => {
    const token = localStorage.getItem('@lj_register:token')
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    try {
      const response = await api.patch('/user/profile/update', { password, new_password: newPassword })
      alert(response.data)
    } catch (error) {
      alert('Palavra passe incorreta!')
    }
  }
  const validateName = ( name === 'Nome Completo' || name === userInfo?.name) ?? true


  const updateAvatar = async () => {
    try {
      const formData = new FormData();
      formData.append('file', avatarFile);
      const token = localStorage.getItem('@lj_register:token')
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      const response = await api.patch('/user/avatar/update', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const userData = await api.get<UserResponse>('/user/me')
      const user = userData.data        
      const userJSON = JSON.stringify(user)
      localStorage.setItem('@lj_register:user', userJSON)
      window.location.href = '/admin/settings'
      
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  };

  useEffect(() => {
    async function getUsers() {
      const token = localStorage.getItem('@lj_register:token')
      api.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await api.get('/user/all')
        setUsers(response.data)
    }
    getUsers()
  }, [users])

  const handleDeleteUser = async (id: string) => {
      if (window.confirm("Confirmação de eliminação de usuário!")) {
        const token = localStorage.getItem('@lj_register:token')
        api.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await api.delete(`/user/delete/${id}`)
      }
  }

  const handleCreateNewUser = async () => {
    const token = localStorage.getItem('@lj_register:token')
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    try {
      await api.post('/user/create', {
        name: newUserName,
        email: newUserEmail,
        role: newUserRole,
        password: newUserPassword
      })
      alert('Usuário criado com sucesso')
    } catch (error) {
      alert('Erro ao criar usuário')
    }
    
  }
  
  return(
    <SettingsContainer>
      <h1>Definições</h1>
      <section className="profileCard">
        <h2>Alterar Dados de Usuário</h2>
        <div className="card">
          <div className="profilePic">
            <img src={userInfo?.avatar_url} alt="" />
            <input type="file" accept=".jpg, .jpeg, .png" onChange={(event) => setAvatarFile(event.target.files![0])} alt="" />
            <button disabled={!avatarFile} onClick={updateAvatar}>Alterar Avatar</button>    
          </div>
          <div className="profileInfo">
            <input type="email" defaultValue={userInfo?.email} disabled/>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={name}/>
            <input type="text" defaultValue={userInfo?.role} disabled  />
            <button disabled={validateName} onClick={handleChangeName}>Alterar nome</button>
          </div>
          <div className="profilePassword">
            <span>Senha</span>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Digite a senha atual"/>
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Digite a senha nova (8 caracteres no mínimo)"/> 
            <button disabled={newPassword.length <= 7 ?? true} onClick={handleChangePassword}>Alterar senha</button> 
          </div> 
        </div>
      </section>
     {userInfo?.admin &&  <section className="newUserCard">
        <h2>Criar Novo Usuário <em style={{fontSize: '0.875rem', color: '#121214', fontWeight: '400'}}>{userInfo?.admin ? 'Administrador' : 'Somente o administrador tem permissão para usar esta secção'}</em></h2>
        <div className="userCard">
          <div className="newUserInfo">
              <input type="email" value={newUserEmail} onChange={(e) => setNewUserEmail(e.target.value)} placeholder="Digite o email"  />
              <input type="text" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} placeholder="Primeiro e último nome"  />
              <input type="text" value={newUserRole} onChange={(e) => setNewUserRole(e.target.value)} name="" placeholder="Cargo"  />
              <input type="password" value={newUserPassword} onChange={(e) => setNewUserPassword(e.target.value)} name="" placeholder="Digite a senha"  />  
              <button disabled={(newUserEmail === '' && newUserName === '' && newUserRole === '' && newUserPassword === '') ?? true} onClick={handleCreateNewUser}>Criar usuário</button>
          </div>
          <div className="listOfUsers">
              <h3>Lista de usuários</h3>
              {users.map((user) => {
                return(<div className="user" key={user.id}>
                <input type="email" defaultValue={user.email} disabled/>
                <input type="text" defaultValue={user.name} disabled/>
                <button disabled={(user.admin || !userInfo?.admin) ?? true} onClick={() => handleDeleteUser(user.id)}>{(user.admin || !userInfo?.admin) ? <WarningCircle size={24} /> : <Trash size={24} />}</button>
              </div>)
              })}
              
          </div>
        </div>
          
      </section>

     }
       
    </SettingsContainer>
  )
}