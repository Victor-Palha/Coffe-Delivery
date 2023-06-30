import { styled } from "styled-components";

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
    span{
        margin-right: 0.25rem;
        font-size: 0.625rem;
        font-family: "Roboto", monospace;
        font-weight: 700;
        line-height: 1.3;
        text-transform: uppercase;
        color: ${props => props.theme["yellow-300"]};
        padding: 0.25rem 0.5rem;
        border-radius: 8px;
        background-color: ${props => props.theme["yellow-100"]};
    }
`

export const CoffeDescription = styled.div`
text-align: center;
    h3{
        color: ${props => props.theme["gray-400"]};
        font-size: 20px;
        font-family: "Baloo 2", cursive;
        font-weight: 700;
        line-height: 130%;
        margin-bottom: 0.5rem ;
    }
    p{
        color: ${props => props.theme["gray-200"]};
        font-size: 0.875rem;
        font-family: "Roboto", monospace;
        line-height: 1.3;
        margin: 0px 1.25rem;
    }
`

export const CoffePrice = styled.form`
    margin: 2.0625rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input[type=number]{
        width: 4.5rem;
        height: 2.375rem;
    }
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
const BaseButton = styled.button`
    border: 0;
    border-radius: 6px;
    padding: 0.5rem;
    color: ${props => props.theme["white-100"]};
    background-color: ${props => props.theme["purple-300"]};
    cursor: pointer;
`

export const AddToCart = styled(BaseButton)`

`

export const CoffeCounter = styled.div`
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 8px;
    background-color: ${props => props.theme["white-500"]};
    p{
        font-size: 1rem;
        font-family: "Roboto", monospace;
        line-height: 1.3;
        color: ${props => props.theme["gray-500"]};
        margin: 0px 0.25rem;
    }
`
export const ButtonsCounter = styled(BaseButton)`
        background-color: ${props => props.theme["white-500"]};
        color: ${props => props.theme["purple-200"]};
        height: 2.6rem;
`