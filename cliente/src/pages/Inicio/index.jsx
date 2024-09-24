import "./Inicio.css";
import { useEffect, useState } from "react";
import ListOptions from "../../components/ListOptions/ListOptions";
import Card from "../../components/Card";
import { productServices } from "../../services/productServices";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [option, setOption] = useState("");

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    const data = await productServices.fetchProductos();
    setProductos(data);
  }

  const updateProductos = async (id, datos) => {
    await productServices.updateProductos(id, datos);
    await fetchProductos();
  }

  //Array tecnologias
  const tecnologias = productos.map(producto => producto.tecnologia);
  //filtro para eliminar duplicidad
  const filtroTecnologia = tecnologias.filter((tecnologia, indice) => tecnologias.indexOf(tecnologia) === indice);
  //filtro para buscar tecnologias segun la opcion seleccionada
  const filtro = productos.filter((producto) =>  producto.tecnologia === option);

  return (
    <section className="vista">
      <div className="lista_opciones">
        <ListOptions 
          valor={option}
          product={filtroTecnologia}
          actualizarValor={setOption}
          actualizarProducto={setProductos}
        />
      </div>
      
      { option === "" ?
        <div className="card_inicio">
        {productos.map((producto, index) => (
          <Card 
            key={index}
            datos={producto}
            fetch={fetchProductos}
            update={updateProductos}
          />
        ))}
      </div>
      :
      <div className="card_inicio">
      {filtro.map((producto, index) => (
        <Card 
          key={index}
          datos={producto}
          fetch={fetchProductos}
          update={updateProductos}
        />
      ))}
      </div>
      }
      

    </section>

  );
};

export default Inicio;
