import ReactDOM from "react-dom";

import FormEnderecoContext from "./FormEnderecoContext";
import InputCEP from "../componets/InputCEP";
import InputCidades from "../componets/InputCidades";
import InputEstados from "../componets/InputEstados";
import InputRua from "../componets/InputRua";

import send from "../sounds/coin.mp3"
import title from "../sounds/enviar.mp3"
import img from "../sounds/digitar.wav"

import brazil from "../pages/brazil.png";

export default function () {
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        console.log('form submitted ✅');
    }
    
    const Sound = () => {
        const audioSend = new Audio(send)
        const audioTitle = new Audio(title)
        const audioImg = new Audio(img)
    

    return (
        <FormEnderecoContext>
        <p
        onClick={
            () => {
                audioTitle.play()
                }}>
    <span className="colors-title" style={{ color: '#0B9BD7' }}>C</span>
    <span className="colors-title" style={{ color: '#FACF07' }}>a</span>
    <span className="colors-title" style={{ color: '#E52927' }}>d</span>
    <span className="colors-title" style={{ color: '#45AF4A' }}>a</span>
    <span className="colors-title" style={{ color: '#FACF07' }}>s</span>
    <span className="colors-title" style={{ color: '#E52927' }}>t</span>
    <span className="colors-title" style={{ color: '#45AF4A' }}>r</span>
    <span className="colors-title" style={{ color: '#FACF07' }}>o</span>
    </p> 
        <img src={brazil} width="800" height="500"
        onClick={
            () => {
                audioImg.play()
                }}></img>
            <form className="container" onSubmit={handleSubmit}>
                <div className="headline">
                    <div className="ladoAlado">
                        <InputEstados/>
                        <InputCidades/>
                    </div>
                </div>
                <InputRua/>
                <InputCEP/>
                
                <div className="input-cont">
                    <input className="input-block" placeholder="Complemento"/>
                </div>  
                
    
                <button className="btn-send" onClick={
                    () => {
                        audioSend.play()
                        }}
                        >
                    Enviar
                </button>
            </form>
        </FormEnderecoContext>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Sound />, rootElement);
}