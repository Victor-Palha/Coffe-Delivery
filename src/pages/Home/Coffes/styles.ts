import { styled } from "styled-components";
import { Tag, TextS, TitleS } from "../../../styles/fonts";
import { Button } from "../../../styles/Inputs";

export const CoffeContainerItem = styled.div`
    background-color: ${props => props.theme["white-300"]};
    width: 16rem;
    border-radius: 6px 36px;
    padding-bottom: 0.5rem; 
    margin-right: 2rem;
    margin-bottom: 2.5rem;
`

export const CoffeImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        margin-top: -1.25rem;
    }
    margin-bottom: 1rem;
`

export const CoffeLabel = styled.div`
    margin-top: 0.75rem;
`
export const Label = styled(Tag)`
    margin-right: 0.25rem;
    text-transform: uppercase;
    color: ${props => props.theme["yellow-300"]};
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    background-color: ${props => props.theme["yellow-100"]};
`

export const CoffeDescription = styled.div`
    text-align: center;
`
export const NameCoffe = styled(TitleS)`
    color: ${props => props.theme["gray-400"]};
    margin-bottom: 0.5rem ;
`
export const CoffeDescriptionText = styled(TextS)`
    color: ${props => props.theme["gray-200"]};
    margin: 0px 1.25rem;
`

export const CoffePrice = styled.form`
    margin: 2.0625rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        font-size: 0.875rem;
        font-family: "Roboto", monospace;
        line-height: 1.3;
        color: ${props => props.theme["gray-300"]};
        span{
            font-weight: 700;
            font-size: 1.5rem;
            font-family: "Baloo 2", cursive;
        }
    }
`

export const AddToCart = styled(Button)`
    background-color: ${props => props.theme["purple-300"]};
    color: ${props => props.theme["white-300"]};
    padding: 0.5rem;
`