import { styled } from "styled-components";

export const OrderContainer = styled.div`
    margin-top: 0.9375rem;
    background-color: ${props => props.theme["white-300"]};
    padding: 2.5rem;
    border-radius: 6px;
`

export const OrderHeader = styled.div`
    display: flex;
    flex-direction: row;
    svg{
        color: ${props => props.theme["yellow-300"]};
    }
    div{
        font-family: "Baloo 2", cursive;
        margin-left: 0.5rem;
        p{
            color: ${props => props.theme["gray-400"]};
            font-size: 1rem;
        }
        span{
            color: ${props => props.theme["gray-300"]};
            font-size: 0.875rem;
        }
    }
`
interface BaseButtonProps {
    filled?: boolean;
}

export const BaseInput = styled.input<BaseButtonProps>`
    padding: 0.875rem;
    background-color: ${props => props.theme["white-400"]};
    color: ${props => props.theme["gray-300"]};
    margin: ${props => props.filled ? "1rem 0" : "1rem 1rem 1rem 0"};
    width: ${props => props.filled ? "100%" : "auto"};
    border: 1px solid ${props => props.theme["white-500"]};
    border-radius: 8px;
    font-size: 0.875rem;
`

export const OrderInputs = styled.div`
    div{
        display: flex;
    }
`

export const OrderPayment = styled.div`
    margin-top: 0.75rem;
    background-color: ${props => props.theme["white-300"]};
    padding: 2.5rem;
    border-radius: 6px;
`

export const OrderButtons = styled.div`
display: flex;
justify-content: space-between;
margin-top: 2rem;
button{
    display: flex;
    align-items: center;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    width: 30%;
    svg{
        color: ${props => props.theme["purple-300"]};
        margin-right: 0.75rem;
    }
    font-size: 0.75rem;
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;
}
`