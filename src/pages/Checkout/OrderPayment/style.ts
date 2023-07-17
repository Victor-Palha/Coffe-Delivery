import { styled } from "styled-components";
import { Button, Card, CardHeader } from "../../../styles/Inputs";
import { TextM, TextS } from "../../../styles/fonts";

export const OrderPaymenteContainer = styled(Card)`
    border-radius: 6px;
`
export const CardHeaderPayment = styled(CardHeader)`
    svg{
        color: ${props => props.theme["purple-200"]};
        margin-right: 0.5rem;
    }
`
export const TitleOrderPaymenteHeader = styled(TextM)`
    color: ${props => props.theme["gray-400"]};
`
export const DescriptionOrderPaymenteHeader = styled(TextS)`
    color: ${props => props.theme["gray-300"]};
`

export const PaymentOptionsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 640px){
        flex-direction: column;
    }
`

interface PaymenteOptionProps {
    selected?: boolean
}
export const PaymentOption = styled(Button)<PaymenteOptionProps>`
    padding: 1rem;
    display: flex;
    align-items: center;
    background-color: ${props => props.selected ? props.theme["purple-100"] : props.theme["white-500"]};
    border: 1px solid ${props => props.selected ? props.theme["purple-200"] : "none"};
    color: ${props => props.theme["gray-300"]};
    svg{
        color: ${props => props.theme["purple-200"]};
        margin-right: 0.5rem;
    }
    transition: 0.2s;
    &:hover{
        background-color: ${props => props.theme["gray-100"]};
    }

    @media (max-width: 640px){
        margin: .5rem 0;
    }
`