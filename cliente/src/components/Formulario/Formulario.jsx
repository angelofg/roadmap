import "./Formulario.css";
import Campo from "../Campo/Campo";
import Boton from "../Boton/Boton";
import { useState } from "react";

const Formulario = (props) => {
    const [tecnologia, setTecnologia] = useState('');
    const [item, setItem] = useState('');

    const { registrar } = props;

    const handleEnvio = (e) => {
        e.preventDefault();
        
        let datosAEnviar = {
            tecnologia,
            item
        }
        
        registrar(datosAEnviar);
    }

    return <section className="formulario">
        <form onSubmit={handleEnvio}>
            <h2>Formulario</h2>
            <Campo 
                titulo='Tecnologia' 
                valor={tecnologia}
                placeholder='Titulo de la tegnologia'
                actualizarValor ={setTecnologia}
            /> 
            <Campo 
                titulo='Item' 
                valor={item}
                placeholder='Digite el item' 
                actualizarValor={setItem}
            />
            <Boton>Agregar</Boton> 
        </form>
    </section>
}

export default Formulario;