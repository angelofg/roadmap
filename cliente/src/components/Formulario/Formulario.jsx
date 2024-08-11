import "./Formulario.css";
import Campo from "../Campo/Campo";
import Boton from "../Boton/Boton";
import { useContext } from "react";
import { ProductoContext } from "../Manager/Manager";

const Formulario = (props) => {
  const {tecnologia, item} = useContext(ProductoContext);

  const addProductos = props.add;
  const fetchProductos = props.fetch;

  const handleEnvio = async (e) => {
    e.preventDefault();
    await addProductos();
    await fetchProductos();
  };

  return (
    <section className="formulario">
      <form onSubmit={handleEnvio}>
        <h2>Formulario</h2>
        <Campo
          titulo="Tecnologia"
          valor={tecnologia}
          placeholder="Titulo de la tegnologia"
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
