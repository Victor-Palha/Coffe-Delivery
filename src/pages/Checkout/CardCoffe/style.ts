import { styled } from "styled-components";
import { Button, Card } from "../../../styles/Inputs";
import { TextL, TextM, TextS } from "../../../styles/fonts";

export const CardCoffeContainer = styled(Card)`
    border-radius: 6px 44px 6px 44px;
    min-width: 27.1875rem;
`

export const CoffeOrderItem = styled.div`
display: flex;
justify-content: space-between;
color: ${props => props.theme["gray-300"]};
img{
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
}
`
export const CoffeInfo = styled.div`
display: flex;
align-items: center;
flex-direction: column;
div{
    display: flex;
}
`

export const CoffePrice = styled(TextM)`
    font-weight: 800;
    margin-left: 3.12rem;
`

export const CoffeName = styled(TextM)`
    margin-bottom: 0.5rem;
`

export const ButtonRemove = styled(Button)`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 0.5rem;
    color: ${props => props.theme["gray-300"]};
    transition: 0.5s;
    svg{
        color: ${props => props.theme["purple-300"]};
        margin-right: 0.25rem;
        transition: 0.5s;
    }
    &:hover{
        color: crimson;
        svg{
            color: crimson;
        }
    }
`

export const CoffeOrderItemSeparate = styled.div`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme["white-500"]};
    margin: 1.5rem 0;
`

export const TotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const Values = styled(TextS)`
    margin-bottom: 0.75rem;
    color: ${props => props.theme["gray-300"]};
`
export const FinalValue = styled(TextL)`
    color: ${props => props.theme["gray-400"]};
    font-weight: 800;
`
export const ButtonFinish = styled(Button)`
    background-color: ${props => props.theme["yellow-200"]};
    color: ${props => props.theme["white-100"]};
    text-transform: uppercase;
    font-weight: 800;
    margin-top: 1.25rem;
`

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
