import "./Manager.css";
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import Formulario from "../Formulario/Formulario";
import Mapa from "../Mapa/Mapa";
import { productServices } from "../../services/productServices";

export const ProductoContext = createContext();

const Manager = () => {
    const [productos, setProductos] = useState([]);
    const [tecnologia, setTecnologia] = useState("");
    const [item, setItem] = useState("");

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async() => {
       const data = await productServices.fetchProductos();
       setProductos(data);
    //    console.log(data);
    }; 

    // console.log(productos);

    const addProductos = async () => {
        await productServices.addProductos(tecnologia,item);
        fetchProductos();
    }
      
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
        <main className="main-container">
            <section className="agregar">
                <Formulario 
                    actualizarTec={setTecnologia} 
                    actualizarItem={setItem}
                    add={addProductos}
                    fetch={fetchProductos}
                />
            </section>
            
            <section className="lista">
                <div className="product-container">
                <Mapa 
                    fetch={fetchProductos}
                    delete={deleteProductos}
                    update={updateProductos}
                />
                </div>
            </section>
            
        </main>
    </ProductoContext.Provider>
    );
};

export default Manager;