import { HeaderContainer } from "./styles";
import { Timer } from 'phosphor-react'

import logo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    console.log(isOpen)

    return (
        <HeaderContainer>
            <img src={logo} alt="" />
            <button onClick={handleToggle}>Menu</button>
            <nav>
               <NavLink to='/'>Início</NavLink>
               <NavLink to='/consult'>Consultar</NavLink>
               <NavLink to='/schedule'>
                    <Timer size={16} weight='bold' />
                    Agendar
                </NavLink>              
            </nav>
            {isOpen && (
                <div className="toggle">
                    <NavLink to='/'>Início</NavLink>
                    <NavLink to='/consult'>Consultar</NavLink>
                    <NavLink to='/schedule'>
                        <Timer size={16} weight='bold' />
                        Agendar
                    </NavLink>              
                </div>
            )}
        </HeaderContainer>
    )
}