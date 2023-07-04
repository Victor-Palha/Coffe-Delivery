import { styled } from "styled-components";
import { TextM } from "../../styles/fonts";
import { Button } from "../../styles/Inputs";

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    background-color: ${props => props.theme["white-500"]};
    button{
        border: 0;
        border-radius: 6px;
        padding: 0.75rem 0.5rem;
        cursor: pointer;
        background-color: ${props => props.theme["white-500"]};
        color: ${props => props.theme["purple-200"]};
        &:hover{
            color: ${props => props.theme["purple-300"]};
        }
    }
`
export const ButtonCounter = styled(Button)`

`

export const TextCounterCoffer = styled(TextM)`
    color: ${props => props.theme["gray-500"]};
`
