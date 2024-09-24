import "./Manager.css";
import { createContext, useState, useEffect } from "react";
import Formulario from "../Formulario";
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

    return (
    <ProductoContext.Provider value={productos}>
        <main className="main-container">
            <section className="agregar">
                <Formulario 
                    fetch={fetchProductos}
                />
            </section>
        </main>
    </ProductoContext.Provider>
    );
};

export default Manager;