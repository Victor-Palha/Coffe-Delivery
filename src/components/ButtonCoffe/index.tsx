import { Minus, Plus } from "phosphor-react";
import { ButtonContainer, ButtonCounter, TextCounterCoffer } from "./style";

export function ButtonCoffe(){
    return (
        <ButtonContainer>
            <ButtonCounter>
                <Minus/>
            </ButtonCounter>
                <TextCounterCoffer>1</TextCounterCoffer>
            <ButtonCounter>
                <Plus/>
            </ButtonCounter>
        </ButtonContainer>
    )
}