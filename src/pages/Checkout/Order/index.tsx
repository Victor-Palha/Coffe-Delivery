import { useContext, useEffect, useState } from "react";
import { BaseInput, CardHeaderOrder, DescriptionOrderHeader, OrderContainer, OrderInputs, TitleOrderHeader } from "./style";
import { MapPinLine } from "phosphor-react";
import { CoffeContext } from "../../../context/coffeContext";

export function Order(){
    const {setPaymentClientData} = useContext(CoffeContext)
    const [cep, setCep] = useState("")
    const [street, setStreet] = useState("")
    const [number, setNumber] = useState("")
    const [complement, setComplement] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    function handleCep(e: React.ChangeEvent<HTMLInputElement>){
        e.preventDefault()
        setCep(e.target.value)
    }
    function handleStreet(e: React.ChangeEvent<HTMLInputElement>){
        setStreet(e.target.value)
    }
    function handleNumber(e: React.ChangeEvent<HTMLInputElement>){
        setNumber(e.target.value)
    }
    function handleComplement(e: React.ChangeEvent<HTMLInputElement>){
        setComplement(e.target.value)
    }
    function handleNeighborhood(e: React.ChangeEvent<HTMLInputElement>){
        setNeighborhood(e.target.value)
    }
    function handleCity(e: React.ChangeEvent<HTMLInputElement>){
        setCity(e.target.value)
    }
    function handleState(e: React.ChangeEvent<HTMLInputElement>){
        setState(e.target.value)
    }
    useEffect(()=>{
        setPaymentClientData({
            cep,
            street,
            number,
            complement,
            neighborhood,
            city,
            state
        })
    }, [cep, street, number, complement, neighborhood, city, state])
    return (
        <OrderContainer>
            <CardHeaderOrder>
                <MapPinLine size={22}/>
                <div>
                    <TitleOrderHeader>Endereço de Entrega</TitleOrderHeader>
                    <DescriptionOrderHeader>Informe o endereço onde deseja receber seu pedido</DescriptionOrderHeader>
                </div>
            </CardHeaderOrder>

            <OrderInputs>
                <BaseInput placeholder="CEP" type="text" value={cep} onChange={(e)=>handleCep(e)} required pattern="99999-999"/>
                <BaseInput placeholder="Rua" type="text" FilledForm={true} value={street} onChange={(e)=>handleStreet(e)} required/>
                <div>
                    <BaseInput placeholder="Número" type="text" value={number} onChange={(e)=>handleNumber(e)} required/>
                    <BaseInput placeholder="Complemento" type="text" FilledForm={true} value={complement} onChange={(e)=>handleComplement(e)}/>
                </div>
                <div>   
                    <BaseInput placeholder="Bairro" type="text" value={neighborhood} onChange={(e)=>handleNeighborhood(e)} required/>
                    <BaseInput placeholder="Cidade" type="text" value={city} onChange={(e)=>handleCity(e)} required/>
                    <BaseInput placeholder="UF" type="text" value={state} onChange={(e)=>handleState(e)} required/>
                </div>
            </OrderInputs>
        </OrderContainer>
    )
}