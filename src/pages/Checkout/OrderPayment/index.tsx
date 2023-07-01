import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { CardHeaderPayment, DescriptionOrderPaymenteHeader, OrderPaymenteContainer, PaymentOption, PaymentOptionsContainer, TitleOrderPaymenteHeader } from "./style";

export function OrderPayment(){
    return (
        <OrderPaymenteContainer>
            <CardHeaderPayment>
                <CurrencyDollar size={22}/>
                <div>
                    <TitleOrderPaymenteHeader>Pagamento</TitleOrderPaymenteHeader>
                    <DescriptionOrderPaymenteHeader>
                        O pagamento é feito na entrega. Escolha a forma que deseja pagar
                    </DescriptionOrderPaymenteHeader>
                </div>
            </CardHeaderPayment>
            <PaymentOptionsContainer>
                <PaymentOption><CreditCard/> CARTÃO DE CRÉDITO</PaymentOption>
                <PaymentOption><Bank/> CARTÃO DE DÉBITO</PaymentOption>
                <PaymentOption><Money/> DINHEIRO</PaymentOption>
            </PaymentOptionsContainer>
        </OrderPaymenteContainer>
    )
}