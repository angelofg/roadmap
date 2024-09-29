import DeleteProduct from "../DeleteProduct";
import EditModal from "../EditModal";
import "./Card.css";

const Card = (props) => {
    const {tecnologia, item, descripcion, ejemplo} = props.datos;

    return (<div className="card">
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
                />
            </div>
            
        </div>
        <div className="info">
              <div className="detalles">
                <h4>{item}</h4> 
                <p>{ "//" + descripcion}</p>
              </div>
              <p className="ejemplo">{ejemplo}</p>
        </div>
        
    </div>)
}

export default Card;