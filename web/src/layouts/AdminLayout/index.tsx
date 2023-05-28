import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Calendar, Gauge, GearSix, SignOut } from "phosphor-react";
import { AdminContainer } from "./styles";
import { AuthContext } from "../../contexts/Auth";

import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.png'

export function AdminLayout() {
    const { userInfo, signOut  } = useContext(AuthContext)
    return (
        <AdminContainer>
            <header>
                <img src={logo} alt="" />
                <nav>
                    <img src={userInfo?.avatar_url ?? avatar} alt="" />
                    <span>{userInfo?.name}</span>              
                    <button onClick={() => signOut()}><SignOut size={24} />Sair</button>
                </nav>
            </header>
            <section>
                <nav>
                    <NavLink to={'/admin'}><Gauge size={24} /> Dashboard</NavLink>
                    <NavLink to={'/admin/scheduling'}><Calendar size={24} /> Agendamentos</NavLink>
                    <NavLink className='setting' to={'/admin/settings'}><GearSix size={24} /> Definições</NavLink>
                </nav>
                <Outlet />
            </section>
           <footer>
                <p>Loja de Registo - Lobito. &copy; Todos Direitos Reservados </p>
                <p>Ministério da Justiça e Direitos Humanos – MINJUSDH</p>
           </footer>
        </AdminContainer>
    )
}