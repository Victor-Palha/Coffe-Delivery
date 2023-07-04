import { SucessBody, SucessBodyItens, SucessBodyText, SucessBodyTextContainer, SucessContainer, SucessDescription, SucessHeader, SucessHeaderSubtitle, SucessHeaderTitle, SucessImage } from "./style";
import ImgSucess from '../../assets/Illustration.png';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CoffeContext } from "../../context/coffeContext";
import { Navigate } from "react-router-dom";

export function Sucess(){
    const {paymentClientData, coffeCart} = useContext(CoffeContext)
    return (
        <SucessContainer>
            {coffeCart.length < 1 && <Navigate to="/checkout" />}
            <SucessDescription>
                <SucessHeader>
                    <SucessHeaderTitle>Uhu! Pedido confirmado</SucessHeaderTitle>
                    <SucessHeaderSubtitle>Agora é só aguardar que logo o café chegará até você</SucessHeaderSubtitle>
                </SucessHeader>
                <SucessBody>
                    <SucessBodyItens colorbackgroud="purple-200">
                        <MapPin size={30} weight="fill" />
                        <SucessBodyTextContainer>
                            <SucessBodyText>
                                Entrega em <span>{paymentClientData.street}, {paymentClientData.number}</span> 
                            </SucessBodyText>
                            <SucessBodyText>
                                {paymentClientData.neighborhood} - {paymentClientData.city}, {paymentClientData.state}
                            </SucessBodyText>
                        </SucessBodyTextContainer>
                    </SucessBodyItens>
                    <SucessBodyItens colorbackgroud="yellow-200">
                        <Timer size={30} weight="fill" />
                        <SucessBodyTextContainer>
                            <SucessBodyText>
                                Previsão de entrega 
                            </SucessBodyText>
                            <SucessBodyText>
                                <span>20 min - 30 min </span>
                            </SucessBodyText>
                        </SucessBodyTextContainer>
                    </SucessBodyItens>
                    <SucessBodyItens colorbackgroud="yellow-300">
                        <CurrencyDollar size={30} weight="fill" />
                        <SucessBodyTextContainer>
                            <SucessBodyText>
                                Pagamento na entrega 
                            </SucessBodyText>
                            <SucessBodyText>
                                <span>{paymentClientData.paymentMethod}</span>
                            </SucessBodyText>
                        </SucessBodyTextContainer>
                    </SucessBodyItens>
                </SucessBody>
            </SucessDescription>
            <SucessImage>
                <img src={ImgSucess} alt="" />
            </SucessImage>
        </SucessContainer>
    )
}