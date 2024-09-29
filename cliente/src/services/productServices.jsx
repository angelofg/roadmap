import axios from "axios";
import { toast } from "sonner"

const fetchProductos = async () => {
    return await axios.get("http://127.0.0.1:5000/api/productos")
    .then((res) => (res.data))
    .catch((err) => console.log(err));
};

const addProductos = async (tecnologia,item,descripcion,ejemplo) => {
    return await axios
        .post("http://127.0.0.1:5000/api/productos", {
        tecnologia: tecnologia,
        item: item,
        descripcion: descripcion,
        ejemplo: ejemplo
        })
        .then((data) => toast.success('Tarjeta Agregada!'))
        .catch((err) => console.log(err));
};
    
const deleteProductos = async (id) => {
await axios
    .delete(`http://127.0.0.1:5000/api/productos/${id}`)
    .then((data) => toast.warning('Tarjeta Eliminada.'))
    .catch((err) => console.log(err));

};

const updateProductos = async (id, data) => {
    await axios
        .put(`http://127.0.0.1:5000/api/productos/${id}`, data)
        .then((data) => toast.info('Tarjeta Actualizada.'))
        .catch((err) => console.log(err));
    await fetchProductos();
};

export const productServices = {
    fetchProductos,
    addProductos,
    deleteProductos,
    updateProductos
};
