import "./Mapa.css";
import Card from "../Card/Card";
import { ProductoContext } from "../Manager/Manager";
import { useContext } from "react";

const Mapa = (props) => {

  const productos = useContext(ProductoContext);
  // const fetchProductos = useContext(ProductoContext);

  return (
    <div className="mapa">
      {productos.map((producto, index) => (
        <Card fetch={props.fetch} datos={producto} key={index} />
      ))}
    </div>
  );
};

export default Mapa;
