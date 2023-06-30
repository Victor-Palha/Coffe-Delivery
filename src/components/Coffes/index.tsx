import { AddToCart, ButtonsCounter, CoffeContainerItem, CoffeCounter, CoffeDescription, CoffeImage, CoffeLabel, CoffePrice } from "./styles";
import { ShoppingCartSimple, Plus, Minus } from "phosphor-react";
import { Coffe } from "../../context/coffeContext";

interface CoffeItemProps{
    coffe: Coffe
}
export function CoffeItem({coffe}: CoffeItemProps){
    return(
        <CoffeContainerItem>
            <CoffeImage>
                <img src={coffe.imgPath} alt="" />
                <CoffeLabel>
                    {coffe.label.map((coffeLabel)=>(
                    <span key={coffeLabel}>{coffeLabel}</span>
                    ))}
                </CoffeLabel>
            </CoffeImage>
            <CoffeDescription>
                <h3>{coffe.name}</h3>
                <p>{coffe.description}</p>
            </CoffeDescription>
            <CoffePrice>
                <p>R$ <span>{coffe.price.toString().replace(".", ",")}</span></p>
                <CoffeCounter>
                    <ButtonsCounter><Minus/></ButtonsCounter>
                    <p>1</p>
                    <ButtonsCounter><Plus/></ButtonsCounter>
                </CoffeCounter>
                <AddToCart><ShoppingCartSimple weight="fill" size={22}/></AddToCart>
            </CoffePrice>
        </CoffeContainerItem>
    )
}