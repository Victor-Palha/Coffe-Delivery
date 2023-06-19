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

    button{
        border: 0;
        border-radius: 6px;
        padding: 0.5rem;
        color: ${props => props.theme["yellow-300"]};
        background-color: ${props => props.theme["yellow-100"]};
        cursor: pointer;
    }

`