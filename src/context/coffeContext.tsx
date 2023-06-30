import { ReactNode, createContext, useState } from "react";
//Imgs
import eTradicional from "../assets/eTradicional.png";
import eAmericano from "../assets/eAmericano.png";
import Capuccino from "../assets/Capuccino.png";
import Arabe from "../assets/Arabe.png";
import Macchiato from "../assets/Macchiato.png";
import cLatte from "../assets/cLatte.png";
import cLeite from "../assets/cLeite.png";
import cQuente from "../assets/cQuente.png";
import Cubano from "../assets/Cubano.png";
import eCremoso from "../assets/eCremoso.png";
import eGelado from "../assets/eGelado.png";
import Havaiano from "../assets/Havaiano.png";
import irlandes from "../assets/Irlandes.png";
import Mochaccino from "../assets/Mochaccino.png";


export interface Coffe{
    id: string,
    name: string,
    imgPath: string,
    description: string,
    label: string[],
    price: string
}
interface CoffeContextData{
    coffesItens: Coffe[]
}
interface CoffeContextProviderProps{
    children: ReactNode
}

export const CoffeContext = createContext({} as CoffeContextData)
export function CoffeContextProvider({children}: CoffeContextProviderProps){
    const [coffesItens] = useState<Coffe[]>([{
        id: "1",
        name: "Expresso Tradicional",
        imgPath: eTradicional,
        description: "O tradicional café feito com água quente e grãos moídos",
        label: ["Tradicional"],
        price: "9.90"
    },{
        id: "2",
        name: "Expresso Americano",
        imgPath: eAmericano,
        description: "Expresso diluído, menos intenso que o tradicional",
        label: ["Tradicional"],
        price: "9.90"
    },{
        id: "3",
        name: "Expresso Cremoso",
        imgPath: eCremoso,
        description: "Café expresso tradicional com espuma cremosa",
        label: ["Tradicional"],
        price: "9.90"
    },{
        id: "4",
        name: "Expresso Gelado",
        imgPath: eGelado,
        description: "Bebida preparada com café expresso e cubos de gelo",
        label: ["Tradicional", "Gelado"],
        price: "9.90"
    },{
        id: "5",
        name: "Café com Leite",
        imgPath: cLeite,
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        label: ["Tradicional", "Com Leite"],
        price: "9.90"
    },{
        id: "6",
        name: "Latte",
        imgPath: cLatte,
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        label: ["Tradicional", "Com Leite"],
        price: "9.90"
    },{
        id: "7",
        name: "Capuccino",
        imgPath: Capuccino,
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        label: ["Tradicional", "Com Leite"],
        price: "9.90"
    },{
        id: "8",
        name: "Mochaccino",
        imgPath: Mochaccino,
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        label: ["Tradicional", "Com Leite"],
        price: "9.90"
    },{
        id: "14",
        name: "Macchiato",
        imgPath: Macchiato,
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        label: ["Tradicional", "Com Leite"],
        price: "9.90"
    },{
        id: "9",
        name: "Chocolate Quente",
        imgPath: cQuente,
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        label: ["Especial", "Com Leite"],
        price: "9.90"
    },{
        id: "10",
        name: "Cubano",
        imgPath: Cubano,
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        label: ["Especial", "Alcoólico", "Gelado"],
        price: "9.90"
    },{
        id: "11",
        name: "Havaiano",
        imgPath: Havaiano,
        description: "Bebida adocicada preparada com café e leite de coco",
        label: ["Especial"],
        price: "9.90"
    },{
        id: "12",
        name: "Árabe",
        imgPath: Arabe,
        description: "Bebida preparada com grãos de café árabe e especiarias",
        label: ["Especial"],
        price: "9.90"
    },{
        id: "13",
        name: "Irlandês",
        imgPath: irlandes,
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        label: ["Especial", "Alcoólico"],
        price: "9.90"
    }])

    return(
        <CoffeContext.Provider value={{coffesItens}}>
            {children}
        </CoffeContext.Provider>
    )
}