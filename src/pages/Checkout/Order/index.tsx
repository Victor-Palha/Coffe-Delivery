import { BaseInput, OrderButtons, OrderContainer, OrderHeader, OrderInputs, OrderPayment } from "./style";
import { MapPinLine, CurrencyDollar, Money, Bank, CreditCard } from "phosphor-react";

export function Order(){
    return (
        <>
        <OrderContainer>
            <OrderHeader>
                <MapPinLine size={22}/>
                <div>
                    <p>Endereço de Entrega</p>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </OrderHeader>
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
                    <BaseInput placeholder="ES" type="text" filled={true}/>
                </div>
            </OrderInputs>
        </OrderContainer>
        <OrderPayment>
            <OrderHeader>
                <CurrencyDollar size={22}/>
                <div>
                    <p>Pagamento</p>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </OrderHeader>
            <OrderButtons>
                <button><CreditCard size={14}/> Cartão de Crédito</button>
                <button><Bank size={14}/> Cartão de Débito</button>
                <button><Money size={14}/> Dinheiro</button>
            </OrderButtons>
        </OrderPayment>
        </>
    )
}