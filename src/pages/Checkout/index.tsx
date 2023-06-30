import { Order } from "./Order";
import { CheckoutContainer } from "./style";

export function Checkout(){
    return (
        <CheckoutContainer>
            <div>
                <h2>Complete seu pedido</h2>
                <Order/>
            </div>
            <div>
                <h2>Cafés selecionados</h2>

            </div>
        </CheckoutContainer>
    )
}