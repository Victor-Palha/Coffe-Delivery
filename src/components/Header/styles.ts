import {styled} from "styled-components"

export const HeaderContainer = styled.header`
    padding: 2.06rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const HeaderNav = styled.nav`
    display: flex;
    align-items: center;
    p{
        border: 0;
        background-color: ${props => props.theme["purple-100"]};
        color: ${props => props.theme["purple-300"]};
        border-radius: 6px;
        font-family: "Roboto", sans-serif;
        display: flex;
        align-items: center;
        margin-right: 0.75rem;
        padding: 0.5rem;
        svg{
            margin-right: 0.25rem;
        }
    }

    a{
        display: flex;
        border: 0;
        border-radius: 6px;
        padding: 0.5rem 0.6rem;
        color: ${props => props.theme["yellow-300"]};
        background-color: ${props => props.theme["yellow-100"]};
        cursor: pointer;
    }

`
export const HeaderCartAmout = styled.span`
    margin-left: 1.25rem;
    top: 2rem;
    background-color: ${props => props.theme["yellow-300"]};
    color: ${props => props.theme["white-100"]};
    font-family: "Roboto", sans-serif;
    z-index: 999;
    position: absolute;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.10rem 0.30rem;
`