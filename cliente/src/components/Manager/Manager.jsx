import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Formulario from "../Formulario/Formulario";
import Mapa from "../Mapa/Mapa";

export const ProductoContext = createContext();

const Manager = () => {
    const [productos, setProductos] = useState([]);
    const [tecnologia, setTecnologia] = useState("");
    const [item, setItem] = useState("");
    //const [actualizar, setActualizar] = useState(item);

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        const response = await axios.get("http://127.0.0.1:5000/api/productos");
        setProductos(response.data);
    };

    const addProductos = async () => {
        await axios
          .post("http://127.0.0.1:5000/api/productos", {
            tecnologia: tecnologia,
            item: item,
          })
          .then((data) => console.log("Datos enviados"))
          .catch((err) => console.log(err));
      };

    const deleteProductos = async (id) => {
    await axios
        .delete(`http://127.0.0.1:5000/api/productos/${id}`)
        .then((data) => console.log("Producto eliminado"))
        .catch((err) => console.log(err));
    await fetchProductos();
    };
    
    const updateProductos = async (id,data) => {
        await axios
          .put(`http://127.0.0.1:5000/api/productos/${id}`, data)
          .then((data) => console.log("Producto actualizado"))
          .catch((err) => console.log(err));
        await fetchProductos();
    };

    return (
    <ProductoContext.Provider value={productos}>
        <div>
            <Formulario 
                actualizarTec={setTecnologia} 
                actualizarItem={setItem}
                add={addProductos}
                fetch={fetchProductos}
            />
            <Mapa 
                fetch={fetchProductos}
                delete={deleteProductos}
                update={updateProductos}
            />
        </div>
    </ProductoContext.Provider>
    );
};

export default Manager;