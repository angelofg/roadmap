import "./Manager.css";
import { createContext, useState, useEffect } from "react";
import Formulario from "../Formulario";
import Mapa from "../Mapa";
import { productServices } from "../../services/productServices";
import { toast } from "sonner";

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
    }; 

    const addProductos = async () => {
        if(tecnologia!=="" && item!==""){
            await productServices.addProductos(tecnologia,item);
            await fetchProductos();
        }else{
            toast.error('Error', {description: 'Complete los campos requeridos'});
        }
        
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