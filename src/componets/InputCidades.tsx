import React from "react"
import { useEffect, useState } from "react"
import { FormEnderecoContext } from "../pages/FormEnderecoContext"


export default function() {
    const {uf, setUf, cidade, setCidade} = React.useContext(FormEnderecoContext)
    const [cidades, setCidades] = useState([])

    async function BuscarCidade(){
        if (!uf) return
        const getCidades = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
        const cidades = await getCidades.json()
        setCidades(cidades)
    }
    useEffect(() => {
        BuscarCidade()
    }, [uf])

    const selecionarCidade = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setCidade(ev.currentTarget.value)
    }
    return <>
        {!uf 
            ? <div className="input-container">
                <select className="select-text second-select">
                    <option> Selecione a cidade </option>
                </select>
            </div>
            : <div className="input-container">
                <select className="select-text third-select" onChange={selecionarCidade} value={cidade}>
                    {cidades.map(({ nome }, idx) => <option key={ idx } value={ nome }>{ nome }</option>)}    
                </select>
                </div>
                }
    </>
}