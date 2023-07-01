import { styled } from "styled-components";
import { TitleXS } from "../../styles/fonts";

export const CheckoutContainer = styled.form`
    display: flex;
    justify-content: space-between;
    margin: 2.5rem 10rem;
`
export const TitleCheckoutContainer = styled(TitleXS)`
    color: ${props => props.theme["gray-400"]}
`