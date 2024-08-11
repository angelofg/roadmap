import "./DeleteProduct.css";
import axios from "axios";
import { ProductoContext } from "../Manager/Manager";
import { useContext } from "react";
import { IoClose } from "react-icons/io5";

const DeleteProduct = (props) => {
  const productos = props.datos;
  const fetchProductos = props.fetch;

  const deleteProductos = async (id) => {
    await axios
      .delete(`http://127.0.0.1:5000/api/productos/${id}`)
      .then((data) => console.log("Producto eliminado"))
      .catch((err) => console.log(err));
    await fetchProductos();
  };

  return (
    <IoClose
      onClick={() => deleteProductos(productos._id)}
      className="botonCerrar"
      size="2rem"
    />
  );
};

export default DeleteProduct;
