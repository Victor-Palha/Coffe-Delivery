import { CardCoffeContainer, CoffeOrderItem, CoffeInfo, ButtonRemove, CoffeName, CoffePrice, CoffeOrderItemSeparate, TotalPrice, Values, FinalValue, ButtonFinish, ButtonContainer, ButtonCounter, TextCounterCoffer } from "./style";
import { Minus, Plus, Trash } from "phosphor-react";
import { CoffeContext } from "../../../context/coffeContext";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom"
import { toast } from "react-toastify";


export function CardCoffe(){
    const [redirect, setRedirect] = useState(false)
    const [totalValue, setTotalValue]= useState(0)
    const {coffeCart, reduceAmountCoffeCart, deleteFromCart, paymentClientData} = useContext(CoffeContext)
    useEffect(()=>{
        if(coffeCart.length > 0){
            const total = coffeCart.map(coffe =>{
                return parseFloat(coffe.price) * coffe.amount
            }).reduce((acc, curr) => acc + curr)
            setTotalValue(total)
        }
    }, [coffeCart])

    function AddOrReduceAmountCoffe(id: string, amount: number){
        if(amount < 1){
            deleteFromCart(id)
            return
        }
        const newCoffeCart = coffeCart.map((coffe)=>{
            if(coffe.id === id){
                return {
                    ...coffe,
                    amount: amount
                }
            }else{
                return coffe
            }
        })
        reduceAmountCoffeCart(newCoffeCart)
    }

    function RemoveFromCart(id: string){
        deleteFromCart(id)
    }

    function FinishOrder(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
        e.preventDefault()
        if(coffeCart.length < 1){
            toast.error("Adicione itens ao carrinho!")
            return setRedirect(false)
        }
        
        switch(true){
            case !paymentClientData.cep:
                toast.error("Preencha todos os campos!")
                return setRedirect(false) 
            case !paymentClientData.street:
                toast.error("Preencha todos os campos!")
                return setRedirect(false)
            case !paymentClientData.number:
                toast.error("Preencha todos os campos!")
                return setRedirect(false)
            case !paymentClientData.neighborhood:
                toast.error("Preencha todos os campos!")
                return setRedirect(false)
            case !paymentClientData.city:
                toast.error("Preencha todos os campos!")
                return setRedirect(false)
            case !paymentClientData.state:
                toast.error("Preencha todos os campos!")
                return setRedirect(false)
            case !paymentClientData.paymentMethod:
                toast.error("Preencha todos os campos!")
                return false
        }
        return setRedirect(true)
    }

    return (
        <CardCoffeContainer>
            {redirect && <Navigate to="/sucess"/>}
            {coffeCart.map(coffe => (
                <>
                    <CoffeOrderItem>
                        <img src={coffe.imgPath} alt="" />
                        <CoffeInfo>
                            <CoffeName>{coffe.name}</CoffeName>
                            <div>
                            <ButtonContainer>
                                <ButtonCounter type="button" onClick={(e)=>{
                                        e.preventDefault()
                                        AddOrReduceAmountCoffe(coffe.id ,coffe.amount - 1)
                                        
                                    }}>
                                    <Minus/>
                                </ButtonCounter>
                                    <TextCounterCoffer>{coffe.amount}</TextCounterCoffer>
                                <ButtonCounter type="button" onClick={(e)=>{
                                        e.preventDefault()
                                        AddOrReduceAmountCoffe(coffe.id ,coffe.amount + 1)
                                    }}>
                                    <Plus/>
                                </ButtonCounter>
                            </ButtonContainer>
                                <ButtonRemove onClick={(e)=>{
                                    e.preventDefault()
                                    RemoveFromCart(coffe.id)
                                }}><Trash/> Remover</ButtonRemove>
                            </div>
                        </CoffeInfo>
                        <CoffePrice>R$ {String(parseFloat(coffe.price) * coffe.amount).replace(".", ",").substring(0, 5)}</CoffePrice>
                    </CoffeOrderItem>
                    <CoffeOrderItemSeparate/>
                </>
            ))}
            <TotalPrice>
                <div>
                    <Values>Total de itens</Values>
                    <Values>R$ {String(totalValue).substring(0, 5)}</Values>
                </div>
                <div>
                    <Values>Entrega</Values>
                    <Values>R$ 3,99</Values>
                </div>
                <div>
                    <FinalValue>Total</FinalValue>
                    <FinalValue>R$ {String(totalValue + 3.99).substring(0, 5)}</FinalValue>
                </div>
                <ButtonFinish onClick={(e)=>{
                    FinishOrder(e)
                }}>confirmar pedido</ButtonFinish>
            </TotalPrice>

        </CardCoffeContainer>
    )
}