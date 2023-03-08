import { HeaderContainer } from "./styles";
import { Timer } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { Link, NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <nav>
               <Link to={'#'}>Início</Link>
               <Link to={'#'}>Consultar</Link>
               <Link to={'#'}>
                    <Timer size={16} weight='bold' />
                    Agendar
                </Link>              
            </nav>
        </HeaderContainer>
    )
}