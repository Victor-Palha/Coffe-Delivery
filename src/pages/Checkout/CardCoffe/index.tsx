import { CardCoffeContainer, CoffeOrderItem, CoffeInfo, ButtonRemove, CoffeName, CoffePrice, CoffeOrderItemSeparate, TotalPrice, Values, FinalValue, ButtonFinish } from "./style";
import coffeImg from "../../../assets/eTradicional.png";
import { Trash } from "phosphor-react";
import { ButtonCoffe } from "../../../components/ButtonCoffe";

export function CardCoffe(){
    return (
        <CardCoffeContainer>
            <CoffeOrderItem>
                <img src={coffeImg} alt="" />
                <CoffeInfo>
                    <CoffeName>Expresso Tradicional</CoffeName>
                    <div>
                        <ButtonCoffe/>
                        <ButtonRemove><Trash/> Remover</ButtonRemove>
                    </div>
                </CoffeInfo>
                <CoffePrice>R$ 5,00</CoffePrice>
            </CoffeOrderItem>
            <CoffeOrderItemSeparate/>
            <TotalPrice>
                <div>
                    <Values>Total de itens</Values>
                    <Values>R$ 5,00</Values>
                </div>
                <div>
                    <Values>Entrega</Values>
                    <Values>R$ 3,99</Values>
                </div>
                <div>
                    <FinalValue>Total</FinalValue>
                    <FinalValue>R$ 8,99</FinalValue>
                </div>
                <ButtonFinish>confirmar pedido</ButtonFinish>
            </TotalPrice>

        </CardCoffeContainer>
    )
}