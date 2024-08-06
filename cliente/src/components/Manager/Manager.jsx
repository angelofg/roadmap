import { useState } from "react";
import Formulario from "../Formulario/Formulario";
import Mapa from "../Mapa/Mapa";

const Manager = () => {
    const [informacion, setInformacion ] = useState([]);

    const registrar = (info) => {
        setInformacion([...informacion, info]);
    }

    return (<div>
        <Formulario 
            registrar={registrar}
        />

        <Mapa 
            informacion={informacion}
        />
    </div>
    );
};

export default Manager;