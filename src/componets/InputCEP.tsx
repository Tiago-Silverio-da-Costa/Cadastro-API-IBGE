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
        const requestCode = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const responseCode = await requestCode.json()
        if (responseCode.error) {
            setError(responseCode.error)
            return
        }

        setError(false)
        setUf(responseCode.uf)
        setCidade(responseCode.localidade)
        setRua(responseCode.logradouro)
    }
    
    const codeMask = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        ev.currentTarget.value = ev.currentTarget.value.replace(/\D/g, "")
        ev.currentTarget.value = ev.currentTarget.value.replace(/^(\d{5})(\d{3})/, "$1-$2")
    }

    return <>

        <div className="input-container">
            <label htmlFor="input-code"></label>
            <input className="input-block" maxLength={8} type="text" placeholder="Insira o CEP" onKeyUp = 
            {
                (ev) => {
                codeMask(ev)
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
