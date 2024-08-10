import DeleteProduct from "../DeleteProduct/DeleteProduct";
import EditModal from "../EditModal/EditModal";
import "./Card.css";

const Card = (props) => {
    const {tecnologia, item} = props.datos;

    return <div className="card">
        <div className="encabezado d-flex gap-3 justify-content-end">
            <EditModal datos={props.datos}/>
            <DeleteProduct datos={props.datos}/>
        </div>
        <div className="info">
            <h1>{tecnologia}</h1>
            <h4>{item}</h4> 
        </div>
        
    </div>
}

export default Card;