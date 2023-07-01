import { styled } from "styled-components";
import { Button, Card } from "../../../styles/Inputs";
import { TextL, TextM, TextS } from "../../../styles/fonts";

export const CardCoffeContainer = styled(Card)`
    border-radius: 6px 44px 6px 44px;
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
    cursor: pointer;
    margin-left: 0.5rem;
    color: ${props => props.theme["gray-300"]};
    svg{
        color: ${props => props.theme["purple-300"]};
        margin-right: 0.25rem;
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