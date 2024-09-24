import "./Inicio.css";
import { useEffect, useState } from "react";
import ListOptions from "../../components/ListOptions/ListOptions";
import Card from "../../components/Card";
import { productServices } from "../../services/productServices";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [option, setOption] = useState([]);

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
  const filtro = productos.filter((producto) => producto.tecnologia === option);

  return (
    <>
      <ListOptions 
        valor={option}
        product={filtroTecnologia}
        actualizarValor={setOption}
        actualizarProducto={setProductos}
      />

      <div className="lista">
        {filtro.map((producto, index) => (
          <Card 
            key={index}
            datos={producto}
            fetch={fetchProductos}
            update={updateProductos}
          />
        ))}
      </div>

    </>

  );
};

export default Inicio;
