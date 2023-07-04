import { Minus, Plus } from "phosphor-react";
import { ButtonContainer, ButtonCounter, TextCounterCoffer } from "./style";

interface ButtonCoffeProps{
    amount: number
    handleModifyAmountCoffe: (amount: number ) => void
}
export function ButtonCoffe(props: ButtonCoffeProps){

    return (
        <ButtonContainer>
            <ButtonCounter type="button" onClick={(e)=>{
                    e.preventDefault()
                    props.handleModifyAmountCoffe(props.amount - 1)
                    
                }}>
                <Minus/>
            </ButtonCounter>
                <TextCounterCoffer>{props.amount}</TextCounterCoffer>
            <ButtonCounter type="button" onClick={(e)=>{
                    e.preventDefault()
                    props.handleModifyAmountCoffe(props.amount + 1)
                }}>
                <Plus/>
            </ButtonCounter>
        </ButtonContainer>
    )
}