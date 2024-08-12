import DeleteProduct from "../DeleteProduct/DeleteProduct";
import EditModal from "../EditModal/EditModal";
import "./Card.css";

const Card = (props) => {
    const {tecnologia, item} = props.datos;
   
    return <div className="card">
        <div className="encabezado">
            <h1>{tecnologia}</h1>
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
            <h4>{item}</h4> 
        </div>
        
    </div>
}

export default Card;