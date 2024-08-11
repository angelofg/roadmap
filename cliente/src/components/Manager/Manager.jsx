import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Formulario from "../Formulario/Formulario";
import Mapa from "../Mapa/Mapa";

export const ProductoContext = createContext();

const Manager = () => {
    const [productos, setProductos] = useState([]);
    const [tecnologia, setTecnologia] = useState("");
    const [item, setItem] = useState("");

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
          .then((data) => console.log("datos enviados"))
          .catch((err) => console.log(err));
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
            />
        </div>
    </ProductoContext.Provider>
    );
};

export default Manager;