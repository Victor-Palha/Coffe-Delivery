import { CardCoffe } from "./CardCoffe";
import { Order } from "./Order";
import { OrderPayment } from "./OrderPayment";
import { CheckoutContainer, TitleCheckoutContainer } from "./style";

export function Checkout(){
    return (
        <CheckoutContainer>
            <div>
                <TitleCheckoutContainer>Complete seu pedido</TitleCheckoutContainer>
                <Order/>
                <OrderPayment/>
            </div>
            <div>
                <TitleCheckoutContainer>Cafés selecionados</TitleCheckoutContainer>
                    <CardCoffe/>
            </div>
        </CheckoutContainer>
    )
}