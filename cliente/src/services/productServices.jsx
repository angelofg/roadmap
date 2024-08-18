import axios from "axios";

const fetchProductos = async () => {
    return await axios.get("http://127.0.0.1:5000/api/productos")
    .then((res) => (res.data))
    .catch((err) => console.log(err));
};

const addProductos = async (tecnologia,item) => {
    return await axios
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

const updateProductos = async (id, data) => {
    await axios
        .put(`http://127.0.0.1:5000/api/productos/${id}`, data)
        .then((data) => console.log("Producto actualizado"))
        .catch((err) => console.log(err));
    await fetchProductos();
};

export const productServices = {
    fetchProductos,
    addProductos,
    deleteProductos,
    updateProductos
};
