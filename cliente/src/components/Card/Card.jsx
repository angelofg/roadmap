import DeleteProduct from "../DeleteProduct/DeleteProduct";
import EditModal from "../EditModal/EditModal";
import "./Card.css";

const Card = (props) => {
    const {tecnologia, item} = props.datos;
    const fetchProductos = props.fetch;

    return <div className="card">
        <div className="encabezado">
            <h1>{tecnologia}</h1>
            <div className="iconos">
                <EditModal fetch={fetchProductos} datos={props.datos}/>
                <DeleteProduct fetch={fetchProductos} datos={props.datos}/>
            </div>
            
        </div>
        <div className="info">
            <h4>{item}</h4> 
        </div>
        
    </div>
}

export default Card;