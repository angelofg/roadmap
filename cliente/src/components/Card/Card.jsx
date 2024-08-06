import Boton from "../Boton/Boton";
import "./Card.css";

const Card = (props) => {
    const { tecnologia, item } = props.datos;

    return <div className="card">
        <div className="encabezado">
            <button>Editar</button>
        </div>
        <div className="info">
            <h1>{tecnologia}</h1>
            <h4>{item}</h4> 
        </div>

        
    </div>
}

export default Card;