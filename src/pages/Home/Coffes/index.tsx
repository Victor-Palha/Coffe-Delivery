import { AddToCart, CoffeContainerItem, CoffeDescription, CoffeDescriptionText, CoffeImage, CoffeLabel, CoffePrice, Label, NameCoffe } from "./styles";
import { ShoppingCartSimple} from "phosphor-react";
import { Coffe, CoffeContext } from "../../../context/coffeContext";
import { ButtonCoffe } from "../../../components/ButtonCoffe";
import { useContext } from "react";
import { toast } from "react-toastify";

interface CoffeItemProps{
    coffe: Coffe
}
export function CoffeItem({coffe}: CoffeItemProps){
    const {AddCoffeToCart, alterCoffeAmount} = useContext(CoffeContext)
    
    function handleModifyAmountCoffe(amount: number){
        if(amount >= 1){
            alterCoffeAmount(coffe.id, amount)
        }else{
            return
        }
    }

    function handleCoffeeToCart(coffe: Coffe){
        AddCoffeToCart(coffe)
    }
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
                <ButtonCoffe amount={coffe.amount} handleModifyAmountCoffe={handleModifyAmountCoffe}/>
                <AddToCart type="button" onClick={(e)=>{
                    e.preventDefault()
                    toast.success(`Adicionado ${coffe.name} ao carrinho`)
                    // toast(`Adicionado ${coffe.name} ao carrinho`)
                    handleCoffeeToCart(coffe)
                }}>
                    <ShoppingCartSimple weight="fill" size={22}/>
                </AddToCart>
            </CoffePrice>

        </CoffeContainerItem>
    )
}