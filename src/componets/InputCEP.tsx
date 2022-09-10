import React, { useEffect, useState } from "react"
import { FormEnderecoContext } from "../pages/FormEnderecoContext"


export default function () {
    const {setCEP, CEP, setCidade, setUf, setRua} = React.useContext(FormEnderecoContext)
    const [error, setError] = useState(false)

    const atualizaCEP = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if (ev.currentTarget.value.length < 9) return
        setCEP(ev.currentTarget.value)
        BuscarEndereco(ev.currentTarget.value)
    }

    const BuscarEndereco = async (cep: string) => {
        const requestCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const responseCep = await requestCep.json()
        if (responseCep.error) {
            setError(responseCep.error)
            return
        }

        setError(false)
        setUf(responseCep.uf)
        setCidade(responseCep.localidade)
        setRua(responseCep.logradouro)
    }
    
    const CepMask = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
        ev.currentTarget.value = ev.currentTarget.value.replace(/^(\d{5})(\d{3})/, "$1-$2")
    }

    return <>

        <div className="input-container">
            <input className="input-block" maxLength={8} type="text" placeholder="Insira o CEP" onKeyUp = 
            {
                (ev) => {
                CepMask(ev)
                atualizaCEP(ev)
            } }/> 
        </div>
        <span className="error">
            {error
                ? "Nenhum endereço encontrado"
            : " "
            }
        </span>
    </>
}
