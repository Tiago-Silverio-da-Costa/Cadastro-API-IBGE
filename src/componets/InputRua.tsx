import React, { useEffect, useState } from "react";
import { FormEnderecoContext } from "../pages/FormEnderecoContext";



export default function () {
    const { uf, setUf, cidade, setCidade, rua, setRua} = React.useContext(FormEnderecoContext)

    const buscarRuas = async (ev: React.KeyboardEvent<HTMLInputElement>) => {
        const getRua = await fetch(`https://viacep.com.br/ws/${uf}/${cidade}/${rua}/json/`)
        const ruas = await getRua.json()
        setRua(ruas[1])
    }

    

    const getRua = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setRua(ev.currentTarget.value)
    }

    return <>
            <div className="input-cont">
            <input className="input-block" value={rua} onChange={(ev) => getRua(ev)} onKeyUp={buscarRuas} type="text" placeholder="Insira a rua"/>
        
        </div>      
    </>
}