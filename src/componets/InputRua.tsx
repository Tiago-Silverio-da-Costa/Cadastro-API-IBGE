import React, { useEffect, useState } from "react";
import { FormEnderecoContext } from "../pages/FormEnderecoContext";



export default function () {
    const { uf, setUf, cidade, setCidade, rua, setRua} = React.useContext(FormEnderecoContext)
    const [ruas, setRuas] = useState([])

    async function BuscarRuas() {
        if (!rua) return
        const getRua = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`)
        const setRua = await getRua.json()
        // setRua(setRua[1])
        setRua(rua)
    }

    useEffect(() => {
        BuscarRuas()
    }, [rua])
    const getRua = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setRua(ev.currentTarget.value)
    }

    return <>
        {!rua 
            ?<div className="input-container">
                <select className="select-text quad-select" value={rua} onChange={() => getRua}>
                    <option> Selecione sua rua</option>
                </select>
            </div>
            :<div className="input-container">
                <select className="select-text quad-select" value={rua} onChange={() => getRua}>
                    {ruas.map(({ nome }, idx) => <option key={ idx } value={ nome }> { nome } </option>)}
                </select>
            </div>
        }
    </>
}