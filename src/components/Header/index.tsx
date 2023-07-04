import { HeaderCartAmout, HeaderContainer, HeaderNav } from "./styles"
import {ShoppingCart, MapPin } from "phosphor-react"
import imgLogo from "../../assets/Logo.svg"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CoffeContext } from "../../context/coffeContext"

export function Header(){
    const {coffeCart} = useContext(CoffeContext)
    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={imgLogo} alt="Logo" />
            </NavLink> 
            <HeaderNav>
                <p><MapPin size={22} weight="fill" /> Belém, PA</p>
                <NavLink to="/checkout">
                    <ShoppingCart size={20} weight="fill"/>
                    {coffeCart.length > 0 && (
                        <HeaderCartAmout>{coffeCart.length}</HeaderCartAmout>
                    )}
                </NavLink>
            </HeaderNav>
        </HeaderContainer>
    )
}