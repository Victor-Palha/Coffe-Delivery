import { CoffeContainer, ContainerItens, HomeCoffeTitle, HomeCoffes, HomeContainer, HomeImage, HomeTitles, Item, MainSubtitle, MainTitle, TextForInfo } from "./style";
import coffeImg from '../../assets/CoffeImg.png'
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react";
import { CoffeItem } from "../../components/Coffes";
import { useContext } from "react";
import { CoffeContext} from "../../context/coffeContext";

export function Home(){
    const {coffesItens} = useContext(CoffeContext)
    return(
        <>
        <HomeContainer>
            <HomeTitles>
                <MainTitle>Encontre o café perfeito <br /> para qualquer hora do dia</MainTitle>
                <MainSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</MainSubtitle>

                <ContainerItens>
                    <div>
                        <Item colorbackgroud="yellow-300">
                            <ShoppingCart weight="fill" size={32}/>
                            <TextForInfo>Compra simples e segura</TextForInfo>
                        </Item>
                        <Item colorbackgroud="yellow-200">
                            <Timer weight="fill" size={32}/>
                            <TextForInfo>Entrega rápida e rastreada</TextForInfo>
                        </Item>
                    </div>
                    <div>
                        <Item colorbackgroud="gray-300">
                            <Package weight="fill" size={32}/>
                            <TextForInfo>Embalagem mantém o café intacto</TextForInfo>
                        </Item>
                        <Item colorbackgroud="purple-200">
                            <Coffee weight="fill" size={32}/>
                            <TextForInfo>O café chega fresquinho até você</TextForInfo>
                        </Item>
                    </div>
                </ContainerItens>
            </HomeTitles>
            <HomeImage>
                <img src={coffeImg} alt="Café Coffe Delivery cercado por grãos de café" />
            </HomeImage>
        </HomeContainer>
        <HomeCoffes>
                <HomeCoffeTitle>Nossos cafés</HomeCoffeTitle>
                <CoffeContainer>
                    {coffesItens.map((coffe) => (
                        <CoffeItem key={coffe.id} coffe={coffe}/>
                    ))}
                </CoffeContainer>
        </HomeCoffes>
        </>
    )
}