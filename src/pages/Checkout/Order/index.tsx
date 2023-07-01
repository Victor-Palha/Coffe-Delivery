import { BaseInput, CardHeaderOrder, DescriptionOrderHeader, OrderContainer, OrderInputs, TitleOrderHeader } from "./style";
import { MapPinLine } from "phosphor-react";

export function Order(){
    return (
        <OrderContainer>
            <CardHeaderOrder>
                <MapPinLine size={22}/>
                <div>
                    <TitleOrderHeader>Endereço de Entrega</TitleOrderHeader>
                    <DescriptionOrderHeader>Informe o endereço onde deseja receber seu pedido</DescriptionOrderHeader>
                </div>
            </CardHeaderOrder>

            <OrderInputs>
                <BaseInput placeholder="CEP" type="text"/>
                <BaseInput placeholder="Rua" type="text" filled={true}/>
                <div>
                    <BaseInput placeholder="Número" type="text"/>
                    <BaseInput placeholder="Complemento" type="text" filled={true}/>
                </div>
                <div>   
                    <BaseInput placeholder="Bairro" type="text"/>
                    <BaseInput placeholder="Cidade" type="text"/>
                    <BaseInput placeholder="UF" type="text"/>
                </div>
            </OrderInputs>
        </OrderContainer>
    )
}