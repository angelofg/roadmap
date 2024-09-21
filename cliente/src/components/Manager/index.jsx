import "./Manager.css";
import { createContext, useState, useEffect } from "react";
import Formulario from "../Formulario";
import Mapa from "../Mapa";
import { productServices } from "../../services/productServices";

export const ProductoContext = createContext();

const Manager = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async() => {
        const data = await productServices.fetchProductos();
        setProductos(data);
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
                    fetch={fetchProductos}
                />
            </section>
            
            <section className="lista">
                <div className="product-container">
                <Mapa 
                    fetch={fetchProductos}
                    update={updateProductos}
                />
                </div>
            </section>
            
        </main>
    </ProductoContext.Provider>
    );
};

export default Manager;