import { useState } from "react";
import InputCidades from "../componets/InputCidades";
import InputEstados from "../componets/InputEstados";
import brazil from "../pages/brazil.png";

export default function() {
    const [uf, setUf] = useState("")
    console.log(brazil)

    return <>
    <h1>Cadastro: Dados de Endereço</h1>
        <img src={brazil} width="800" height="500"></img>
        <InputEstados setUf={setUf}></InputEstados>
        <InputCidades uf={uf}></InputCidades>
    </>
}