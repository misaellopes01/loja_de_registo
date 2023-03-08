import { HeaderContainer } from "./styles";
import { ShoppingCart, MapPin } from 'phosphor-react'

import logoCoffeeDelivery from '../../assets/coffee-delivery-logo.svg'
import { Link, NavLink } from "react-router-dom";

export function Header() {
    return (
        <HeaderContainer>
            <nav>
                <h1>DSPLIT - Usuários </h1>                
            </nav>
        </HeaderContainer>
    )
}