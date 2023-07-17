import { styled } from "styled-components";
import { Card, CardHeader } from "../../../styles/Inputs";
import { TextM, TextS } from "../../../styles/fonts";

export const OrderContainer = styled(Card)`
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    @media (max-width: 764px){
        width: 90vw;
    }
    @media (max-width: 500px){
        border-radius: 0px;
        width: 100%;
    }
`

export const CardHeaderOrder = styled(CardHeader)`
    svg{
        color: ${props => props.theme["yellow-300"]};
        margin-right: 0.5rem;

    @media (max-width: 500px){
        margin-right: 0rem;
    }
    }
`
export const TitleOrderHeader = styled(TextM)`
    color: ${props => props.theme["gray-400"]};
`
export const DescriptionOrderHeader = styled(TextS)`
    color: ${props => props.theme["gray-300"]};
`

interface BaseButtonProps {
    FilledForm?: boolean;
}

export const BaseInput = styled.input<BaseButtonProps>`
    padding: 0.9rem;
    background-color: ${props => props.theme["white-400"]};
    color: ${props => props.theme["gray-300"]};
    margin: ${props => props.FilledForm ? "1rem 0" : "1rem 1rem 1rem 0"};
    width: ${props => props.FilledForm ? "100%" : "auto"};
    border: 1.5px solid ${props => props.theme["white-500"]};
    border-radius: 8px;
    font-size: 0.875rem;

    @media (max-width: 764px){
        margin: 1rem 10px;
        width: 100%;
        padding: .8rem;
        div{
            display: flex;
            flex-wrap: wrap;
        }
    }
`

export const OrderInputs = styled.div`
    div{
        display: flex;
    }
    @media (max-width: 764px){
        width: 100%;
    }
`