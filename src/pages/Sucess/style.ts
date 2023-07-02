import { styled } from "styled-components";
import { TextL, TextS, TitleL } from "../../styles/fonts";
import { CardHeader } from "../../styles/Inputs";

export const SucessContainer = styled.div`
    display: flex;
    margin: 5rem 10rem;
    justify-content: space-between;
`
export const SucessHeaderTitle = styled(TitleL)`
    color: ${props => props.theme["yellow-300"]};
`
export const SucessDescription = styled.div`

`
export const SucessHeaderSubtitle = styled(TextL)`
    color: ${props => props.theme["gray-300"]};
`
export const SucessHeader = styled.div`
    
`

export const SucessBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid ${props => props.theme["yellow-300"]};
    border-radius: 6px 36px 6px 36px;
    margin-top: 2.5rem;
    padding: 2.5rem;
`
interface svgColors{
    colorbackgroud: "yellow-300" | "yellow-200" | "gray-300" | "purple-200"
}

export const SucessBodyItens = styled(CardHeader)<svgColors>`
    align-items: center;
    svg{
        background-color: ${props => props.theme[props.colorbackgroud]};
        border-radius: 50%;
        color: ${props => props.theme["white-100"]};
        padding: 6px;
        margin-right: 0.75rem;
    }
`
export const SucessBodyTextContainer = styled.div`

`
export const SucessBodyText = styled(TextS)`
    span{
        font-weight: bold;
        color: ${props => props.theme["gray-300"]};
    }
`

export const SucessImage = styled.div``