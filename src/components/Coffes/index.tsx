import { AddToCart, CoffeContainerItem, CoffeDescription, CoffeDescriptionText, CoffeImage, CoffeLabel, CoffePrice, Label, NameCoffe } from "./styles";
import { ShoppingCartSimple} from "phosphor-react";
import { Coffe } from "../../context/coffeContext";
import { ButtonCoffe } from "../ButtonCoffe";

interface CoffeItemProps{
    coffe: Coffe
}
export function CoffeItem({coffe}: CoffeItemProps){
    return(
        <CoffeContainerItem>

            <CoffeImage>
                <img src={coffe.imgPath}/>
                <CoffeLabel>
                    {coffe.label.map((coffeLabel)=>(
                    <Label key={coffeLabel}>{coffeLabel}</Label>
                    ))}
                </CoffeLabel>
            </CoffeImage>

            <CoffeDescription>
                <NameCoffe>{coffe.name}</NameCoffe>
                <CoffeDescriptionText>{coffe.description}</CoffeDescriptionText>
            </CoffeDescription>
            
            <CoffePrice>
                <p>R$ <span>{coffe.price.toString().replace(".", ",")}</span></p>
                <ButtonCoffe/>
                <AddToCart><ShoppingCartSimple weight="fill" size={22}/></AddToCart>
            </CoffePrice>

        </CoffeContainerItem>
    )
}