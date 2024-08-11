import { useContext } from "react";
import { ProductoContext } from "../Manager/Manager";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import EditModal from "../EditModal/EditModal";
import "./Card.css";

const Card = (props) => {
    const {tecnologia, item} = props.datos;
    // const fetchProductos = props.fetch;

    // const productos = useContext(ProductoContext);
    // const fetchProductos = useContext(ProductoContext);

    return <div className="card">
        <div className="encabezado">
            <h1>{tecnologia}</h1>
            <div className="iconos">
                <EditModal 
                    fetch={props.fetch} 
                    datos={props.datos}
                />
                <DeleteProduct 
                    fetch={props.fetch} 
                    datos={props.datos}
                />
            </div>
            
        </div>
        <div className="info">
            <h4>{item}</h4> 
        </div>
        
    </div>
}

export default Card;