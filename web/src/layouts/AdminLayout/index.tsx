import { NavLink, Outlet } from "react-router-dom";
import { AdminContainer } from "./styles";
import logo from '../../assets/logo.svg'
import { SignOut } from "phosphor-react";

export function AdminLayout() {
    return (
        <AdminContainer>
            <header>
                <img src={logo} alt="" />
                <nav>
                    <img src={'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_male_user-512.png'} alt="" />
                    <span>Misael Lopes</span>              
                    <NavLink to={''}><SignOut size={24} /> Sair</NavLink>
                </nav>
            </header>
            <section>
                <nav>
                    <NavLink to={'/admin'}>Dashboard</NavLink>
                    <NavLink to={''}>Agendamentos</NavLink>
                </nav>
                <Outlet />
            </section>
        </AdminContainer>
    )
}