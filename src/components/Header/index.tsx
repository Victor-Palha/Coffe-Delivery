import { HeaderContainer, HeaderNav } from "./styles"
import {ShoppingCart, MapPin } from "phosphor-react"
import imgLogo from "../../assets/Logo.svg"
import { NavLink } from "react-router-dom"

export function Header(){
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={imgLogo} alt="Logo" />
            </NavLink> 
            <HeaderNav>
                <p><MapPin size={22} weight="fill" /> Belém, PA</p>
                <NavLink to="/checkout"><ShoppingCart size={20} weight="fill"/></NavLink>
            </HeaderNav>
        </HeaderContainer>
    )
}