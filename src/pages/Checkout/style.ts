import { styled } from "styled-components";

export const CheckoutContainer = styled.form`
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 10rem;
    h2{
        font-family: "Baloo 2", cursive;
        font-weight: 800;
        font-size: 1.125rem;
        color: ${props => props.theme["gray-400"]};
    }
`