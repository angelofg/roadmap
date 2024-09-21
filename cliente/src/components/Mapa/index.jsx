import "./Mapa.css";
import Card from "../Card";
import { ProductoContext } from "../Manager";
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
          update={props.update}
         />
      ))}
    </div> 
  );
};

export default Mapa;
