import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { CardHeaderPayment, DescriptionOrderPaymenteHeader, OrderPaymenteContainer, PaymentOption, PaymentOptionsContainer, TitleOrderPaymenteHeader } from "./style";
import { MouseEvent, useContext, useState } from "react";
import { CoffeContext } from "../../../context/coffeContext";

export function OrderPayment(){
    const {paymentClientData, setPaymentClientData} = useContext(CoffeContext)
    const [paymentMethod, setPaymentMethod] = useState<"Cartão de Crédito" | "Cartão de Débito" | "Dinheiro">()

    function handlePaymentOption(e:MouseEvent, paymentOption: "Cartão de Crédito" | "Cartão de Débito" | "Dinheiro"){
        e.preventDefault()
        const payment = paymentOption
        setPaymentMethod(payment)
        setPaymentClientData({
            ...paymentClientData,
            paymentMethod: payment
        })
    }

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
                <PaymentOption onClick={
                    (e)=>handlePaymentOption(e, "Cartão de Crédito")} 
                    selected={paymentMethod == "Cartão de Crédito" ? true : false
                }><CreditCard/> CARTÃO DE CRÉDITO</PaymentOption>
                <PaymentOption onClick={
                    (e)=>handlePaymentOption(e, "Cartão de Débito")}
                    selected={paymentMethod == "Cartão de Débito" ? true : false
                }><Bank/> CARTÃO DE DÉBITO</PaymentOption>
                <PaymentOption onClick={
                    (e)=>handlePaymentOption(e, "Dinheiro")}
                    selected={paymentMethod == "Dinheiro" ? true : false
                    }><Money/> DINHEIRO</PaymentOption>
            </PaymentOptionsContainer>
        </OrderPaymenteContainer>
    )
}