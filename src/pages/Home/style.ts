import {styled} from "styled-components"
import { TextL, TextM, TitleL, TitleXL } from "../../styles/fonts"

export const HomeContainer = styled.section`
    display: flex;
    padding: 5.75rem 10rem;
    justify-content: space-between;
    flex-wrap: wrap;

    @media (max-width: 1440px){
        justify-content: center;
    }

    @media (max-width: 922px){
        padding: 5.75rem 5rem;
    }
    @media (max-width: 500px){
        padding: 3rem 2rem;
    }
`
export const HomeTitles = styled.div`
    margin-right: 3.5rem;
    width: 588px;
`
export const MainTitle = styled(TitleXL)`
    text-shadow: 0px 4px 6px ${props => props.theme["gray-200"]};
`
export const MainSubtitle = styled(TextL)`
    margin-top: 1rem;
    color: ${props => props.theme["gray-400"]};
`

export const ContainerItens = styled.div`
    margin-top: 4.10rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    div:first-child{
        margin-right: 1.25rem;
    }
`


interface svgColors{
    colorbackgroud: "yellow-300" | "yellow-200" | "gray-300" | "purple-200"
}
export const Item = styled.div<svgColors>`
    margin-top: 1.25rem;
    display: flex;
    align-items: center;
    svg{
        background-color: ${props => props.theme[props.colorbackgroud]};
        border-radius: 50%;
        color: ${props => props.theme["white-100"]};
        padding: 8px;
        margin-right: 0.75rem;
    }
`

export const TextForInfo = styled(TextM)`
    color: ${props => props.theme["gray-300"]};
`

export const HomeImage = styled.div`
    img{
        filter: drop-shadow(-50px 50px 100px ${props => props.theme["yellow-200"]});

    @media (max-width: 1440px){
        margin-top: 5rem;
        filter: drop-shadow(-10px 10px 100px ${props => props.theme["yellow-200"]});
    }
    @media (max-width: 922px){
        width: 20rem;
    }
    }
`

export const HomeCoffes = styled.main`
    padding: 0px 10rem;
    @media (max-width: 1440px){
        padding: 0px 5rem;
    }
`

export const HomeCoffeTitle = styled(TitleL)`
    color: ${props => props.theme["gray-400"]};
    margin-bottom: 4.4rem;
`

export const CoffeContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-evenly;
`