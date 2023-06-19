import { HeaderContainer, HeaderNav } from "./styles"
import {ShoppingCart, MapPin } from "phosphor-react"
import imgLogo from "../../assets/Logo.svg"

export function Header(){
    return (
        <HeaderContainer>
            <img src={imgLogo} alt="Logo" />
            <HeaderNav>
                <p><MapPin size={22} weight="fill" /> Belém, PA</p>
                <button><ShoppingCart size={22} weight="fill"/></button>
            </HeaderNav>
        </HeaderContainer>
    )
}