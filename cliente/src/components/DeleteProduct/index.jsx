import "./DeleteProduct.css";
import { IoClose } from "react-icons/io5";
import { productServices } from "../../services/productServices";

const DeleteProduct = (props) => {
  const productos = props.datos;

  return (
    <>
      <IoClose
      onClick={async() => {
        await productServices.deleteProductos(productos._id);
        props.fetch();
        }
      }
      className="botonCerrar"
      size="2rem"
      />
    </>
  );
};

export default DeleteProduct;
