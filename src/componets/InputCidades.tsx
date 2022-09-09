import React from "react"
import select from "../sounds/selecionar.wav"
import { useEffect, useState } from "react"
import { FormEnderecoContext } from "../pages/FormEnderecoContext"


export default function() {
    const [cidades, setCidades] = useState([])
    const {uf, setUf, cidade, setCidade} = React.useContext(FormEnderecoContext)
    
    async function BuscarCidade(){
        if (!uf) return
        const requestCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cidades = await requestCidades.json()
        setCidades(cidades)
    }
    useEffect(() => {
        BuscarCidade()
    }, [uf])

    const selecionarCidade = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setCidade(ev.currentTarget.value)
    }
    // const Sound = () => {
    //     const audio = new Audio(select)
    
    return <>
        {!uf 
            ? <div className="input-container">
                <select className="select-text second-select"
                // onClick={ () => {
                //     audio.play()
                // }}
                >
                    <option> Selecione sua cidade </option>
                </select>
            </div>
            : <div className="input-container">
                <select className="select-text third-select" onChange={selecionarCidade} value={cidade}>
                    Selecione
                    {cidades.map(({ nome }, idx) => <option key={ idx } value={ nome }>{ nome }</option>)}    
                </select>
                </div>
                }
    </>
    // }
}