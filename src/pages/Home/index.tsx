import { CoffeContainer, ContainerItens, HomeCoffes, HomeContainer, HomeImage, HomeTitles, Item } from "./style";
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
                <h1>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
                <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <ContainerItens>
                    <div>
                        <Item colorbackgroud="yellow-300">
                            <ShoppingCart weight="fill" size={32}/>
                            <span>Compra simples e segura</span>
                        </Item>
                        <Item colorbackgroud="yellow-200">
                            <Timer weight="fill" size={32}/>
                            <span>Entrega rápida e rastreada</span>
                        </Item>
                    </div>
                    <div>
                        <Item colorbackgroud="gray-300">
                            <Package weight="fill" size={32}/>
                            <span>Embalagem mantém o café intacto</span>
                        </Item>
                        <Item colorbackgroud="purple-200">
                            <Coffee weight="fill" size={32}/>
                            <span>O café chega fresquinho até você</span>
                        </Item>
                    </div>
                </ContainerItens>
            </HomeTitles>
            <HomeImage>
                <img src={coffeImg} alt="Café Coffe Delivery cercado por grãos de café" />
            </HomeImage>
        </HomeContainer>
        <HomeCoffes>
                <h2>Nossos cafés</h2>
                <CoffeContainer>
                    {coffesItens.map((coffe) => (
                        <CoffeItem key={coffe.id} coffe={coffe}/>
                    ))}
                </CoffeContainer>
        </HomeCoffes>
        </>
    )
}