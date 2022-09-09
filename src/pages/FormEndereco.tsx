import FormEnderecoContextProvider from "./FormEnderecoContext";
import InputCEP from "../componets/InputCEP";
import InputCidades from "../componets/InputCidades";
import InputEstados from "../componets/InputEstados";
import brazil from "../pages/brazil.png";
import InputRua from "../componets/InputRua";
import send from "../sounds/enviar.wav"
import ReactDOM from "react-dom";

export default function () {
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        console.log('form submitted ✅');
    }
    
    const Sound = () => {
        const audio = new Audio(send)
    

    return (
        <FormEnderecoContextProvider>
        <p>
    <span className="colors-title" style={{ color: '#0B9BD7' }}>C</span>
    <span className="colors-title" style={{ color: '#FACF07' }}>a</span>
    <span className="colors-title" style={{ color: '#E52927' }}>d</span>
    <span className="colors-title" style={{ color: '#45AF4A' }}>a</span>
    <span className="colors-title" style={{ color: '#FACF07' }}>s</span>
    <span className="colors-title" style={{ color: '#E52927' }}>t</span>
    <span className="colors-title" style={{ color: '#45AF4A' }}>r</span>
    <span className="colors-title" style={{ color: '#FACF07' }}>o</span>
    </p> 
        <img src={brazil} width="800" height="500"></img>
            <form className="container" onSubmit={handleSubmit}>
                <InputEstados/>
                <InputCidades/>
                <InputCEP/>
                <InputRua/>

                
    
                <button className="btn-send" onClick={
                    () => {
                        audio.play()
                        }}
                        >
                Enviar
                </button>
            </form>
        </FormEnderecoContextProvider>
    )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Sound />, rootElement);
}