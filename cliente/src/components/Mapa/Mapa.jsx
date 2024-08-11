import "./Mapa.css";
import Card from "../Card/Card";
import { ProductoContext } from "../Manager/Manager";
import { useContext } from "react";

const Mapa = (props) => {

  const productos = useContext(ProductoContext);

  return (
    <div className="mapa">
      {productos.map((producto, index) => (
        <Card 
          key={index}
          datos={producto} 
          fetch={props.fetch} 
          delete={props.delete}
         />
      ))}
    </div>
  );
};

export default Mapa;
