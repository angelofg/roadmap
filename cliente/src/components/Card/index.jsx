import DeleteProduct from "../DeleteProduct";
import EditModal from "../EditModal";
import "./Card.css";
import Badge from 'react-bootstrap/Badge';

const Card = (props) => {
    const {tecnologia, item} = props.datos;

    const texto = item;
    const badge = texto.split(' ');

    return <div className="card">
        <div className="encabezado">
            <h1 className="titulo">{tecnologia}</h1>
            <div className="iconos">
                <EditModal 
                    datos={props.datos}
                    fetch={props.fetch}
                    update={props.update}
                />
                <DeleteProduct 
                    datos={props.datos}
                    fetch={props.fetch} 
                    delete={props.delete}
                />
            </div>
            
        </div>
        <div className="info">
              {badge.map((text, index) => <h4 key={index}><Badge bg="info">{text}</Badge></h4>)}
        </div>
        
    </div>
}

export default Card;