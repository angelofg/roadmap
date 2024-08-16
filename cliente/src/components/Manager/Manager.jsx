import "./Manager.css";
import { createContext, useState, useEffect } from "react";
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
        //console.log(data);
    }; 

    // console.log(productos);

    const addProductos = async () => {
        await productServices.addProductos(tecnologia,item);
        await fetchProductos();
    };
      
    const deleteProductos = async (id) => {
        await productServices.deleteProductos(id);
        await fetchProductos();
    };
    
    const updateProductos = async (id, datos) => {
        await productServices.updateProductos(id, datos);
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