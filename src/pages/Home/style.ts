import {styled} from "styled-components"

export const HomeContainer = styled.section`
display: flex;
padding: 5.75rem 10rem;
justify-content: space-between;

`
export const HomeTitles = styled.div`
margin-right: 3.5rem;
width: 588px;
h1{
    font-family: "Baloo 2", cursive;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    text-shadow: 0px 4px 6px ${props => props.theme["gray-200"]};
}
p{
    margin-top: 1rem;
    font-family: "Roboto", monospace;
    font-weight: 400;
    font-size: 1.25rem;
    color: ${props => props.theme["gray-400"]};
    line-height: 1.3;
}
`
interface svgColors{
    colorbackgroud: "yellow-300" | "yellow-200" | "gray-300" | "purple-200"
}
export const ContainerItens = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    div:first-child{
        margin-right: 1.25rem;
    }
`
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
    span{
        font-family: "Roboto", monospace;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${props => props.theme["gray-300"]};
    }
`

export const HomeImage = styled.div`
    img{
        filter: drop-shadow(-50px 50px 100px ${props => props.theme["yellow-200"]});
    }
`

export const HomeCoffes = styled.main`
    padding: 0px 10rem;
    
    h2{
        font-size: 2rem;
        font-family: "Baloo 2", cursive;
        font-weight: 800;
        line-height: 130%;
        margin-bottom: 4.4rem;
    }
`

export const CoffeContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-evenly;
`