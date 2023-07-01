import { styled } from "styled-components";

export const Button = styled.button`
    border: 0;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    cursor: pointer;
    background-color: ${props => props.theme["white-500"]};
    color: ${props => props.theme["purple-200"]};
`

export const Card = styled.div`
    background-color: ${props => props.theme["white-300"]};
    padding: 2.5rem;
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    font-family: "Baloo 2", cursive;
    margin-bottom: 2rem;
`

