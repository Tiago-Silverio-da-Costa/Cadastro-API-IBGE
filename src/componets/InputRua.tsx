import React from "react";
import { FormEnderecoContext } from "../pages/FormEnderecoContext";



export default function () {
    const { uf, setUf, cidade, setCidade, rua, setRua} = React.useContext(FormEnderecoContext)

    const BuscarRuas = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
        const requestRua = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${ev.currentTarget.value}/json/`)
        const responseRua = await requestRua.json()
        setRua(responseRua[1])
    }
    const selecioneRua = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setRua(ev.currentTarget.value)
    }

    return <>
        <div className="input-container">
            <input className="input-block" value={rua} onChange={(ev) => selecioneRua(ev)} onKeyUp={BuscarRuas} type="text" placeholder="Insira a rua"/>
        </div>
    </>
}