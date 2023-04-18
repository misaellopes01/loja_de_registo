import { NavLink, Outlet } from "react-router-dom";
import { AdminContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { SignOut } from "phosphor-react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth";

export function AdminLayout() {
    const { userInfo, signOut  } = useContext(AuthContext)
    return (
        <AdminContainer>
            <header>
                <img src={logo} alt="" />
                <nav>
                    <img src={userInfo?.avatar_url} alt="" />
                    <span>{userInfo?.name}</span>              
                    <button onClick={() => signOut()}><SignOut size={24} />Sair</button>
                </nav>
            </header>
            <section>
                <nav>
                    <NavLink to={'/admin'}>Dashboard</NavLink>
                    <NavLink to={'/admin/scheduling'}>Agendamentos</NavLink>
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