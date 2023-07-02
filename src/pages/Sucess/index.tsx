import { SucessBody, SucessBodyItens, SucessBodyText, SucessBodyTextContainer, SucessContainer, SucessDescription, SucessHeader, SucessHeaderSubtitle, SucessHeaderTitle, SucessImage } from "./style";
import ImgSucess from '../../assets/Illustration.png';
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function Sucess(){
    return (
        <SucessContainer>
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
                                Entrega em <span>Rua João Daniel Martinelli, 102</span> 
                            </SucessBodyText>
                            <SucessBodyText>
                                Farrapos - Porto Alegre, RS
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
                                <span>Cartão de Crédito</span>
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