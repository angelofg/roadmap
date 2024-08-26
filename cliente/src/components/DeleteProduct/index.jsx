import "./DeleteProduct.css";
import { IoClose } from "react-icons/io5";
import { toast } from "sonner";

const DeleteProduct = (props) => {
  const productos = props.datos;
  const deleteProductos = props.delete;

  return (
    <>
      <IoClose
      onClick={() => {
        deleteProductos(productos._id)
        toast.warning('Tarjeta Eliminada.');
        }
      }
      className="botonCerrar"
      size="2rem"
      />
    </>
  );
};

export default DeleteProduct;
