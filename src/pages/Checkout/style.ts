import { styled } from "styled-components";
import { TitleXS } from "../../styles/fonts";

export const CheckoutContainer = styled.form`
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 10rem;

    @media (max-width: 1516px){
        margin: 2.5rem 2rem;
    }

    @media (max-width: 1248px){
        flex-wrap: wrap;
        justify-content: center;
    }

    @media (max-width: 500px){
        margin: 2.5rem 0rem;
    }
`
export const TitleCheckoutContainer = styled(TitleXS)`
    color: ${props => props.theme["gray-400"]};

    @media (max-width: 1248px){
        margin-top: 2rem;
    }
    @media (max-width: 500px){
        margin: 1.5rem 2rem;
    }
`