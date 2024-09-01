import "./Formulario.css";
import Campo from "../Campo";
import Boton from "../Boton";
import { useContext } from "react";
import { ProductoContext } from "../Manager";

const Formulario = (props) => {
  const {tecnologia, item} = useContext(ProductoContext);

  const addProductos = props.add;
  const fetchProductos = props.fetch;
  
  const handleEnvio = async (e) => {
    e.preventDefault();
      addProductos();
      fetchProductos();    
  };

  return (
    <section className="formulario">
      <form onSubmit={handleEnvio}>
        <h2>Formulario</h2>
        <Campo
          titulo="Tecnologia"
          valor={tecnologia}
          placeholder="Titulo de la tecnologia"
          actualizarValor={props.actualizarTec}
        />
        <Campo
          titulo="Item"
          valor={item}
          placeholder="Digite el item"
          actualizarValor={props.actualizarItem}
        />
        <Boton>Agregar</Boton>
      </form>
    </section>
  );
};

export default Formulario;
