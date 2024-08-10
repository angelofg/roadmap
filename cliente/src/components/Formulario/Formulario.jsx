import "./Formulario.css";
import Campo from "../Campo/Campo";
import Boton from "../Boton/Boton";
import { useState } from "react";
import axios from "axios";

const Formulario = () => {
  const [tecnologia, setTecnologia] = useState("");
  const [item, setItem] = useState("");

  const handleEnvio = async (e) => {
    e.preventDefault();
    addProductos();
  };

  const addProductos = async () => {
    await axios
      .post("http://127.0.0.1:5000/api/productos", {
        tecnologia: tecnologia,
        item: item,
      })
      .then((data) => console.log("datos enviados"))
      .catch((err) => console.log(err));
  };

  return (
    <section className="formulario">
      <form onSubmit={handleEnvio}>
        <h2>Formulario</h2>
        <Campo
          titulo="Tecnologia"
          valor={tecnologia}
          placeholder="Titulo de la tegnologia"
          actualizarValor={setTecnologia}
        />
        <Campo
          titulo="Item"
          valor={item}
          placeholder="Digite el item"
          actualizarValor={setItem}
        />
        <Boton>Agregar</Boton>
      </form>
    </section>
  );
};

export default Formulario;
