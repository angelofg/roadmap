import "./Formulario.css";
import { useForm } from 'react-hook-form';
import { productServices } from "../../services/productServices";
import Boton from "../Boton";

const Formulario = (props) => {
  
  const { register, handleSubmit, formState: {errors} } = useForm();

  const fetchProductos = props.fetch;

  const handleEnvio = handleSubmit( async(data) => {
    
    await productServices.addProductos(data.tecnologia,data.item);
    fetchProductos();
    
  });

  return (
    <section className="formulario">
      <form onSubmit={handleEnvio}>
        <h2>Formulario</h2>
        <label htmlFor="tecnologia">Tecnologia</label>
        <input 
          className='input-tecnologia'
          type="text" 
          {...register('tecnologia', {
            required: {
              value: true,
              message: 'Campo tecnologia es requerido',
            },
            minLength: {
              value: 3,
              message: 'Campo tecnologia debe tener al menos 3 caracteres',
            },
            maxLength: {
              value: 20,
              message: "Campo tecnologia debe tener maximo 20 caracteres",
            },
          })}
        />

        { errors.tecnologia && <span>{errors.tecnologia.message }</span>}

        <label htmlFor="item">Item</label>
        <input
          className="input-tecnologia" 
          type="text" 
          {...register('item', {
            required: {
              value: true,
              message: 'Campo item es requerido',
            },
            minLength: {
              value: 3,
              message: 'Campo item debe tener al menos 3 caracteres',
            },
            maxLength: {
              value: 20,
              message: "Campo item debe tener maximo 20 caracteres",
            },
          })}
        />

        { errors.item && <span>{errors.item.message }</span>}

        <Boton>Agregar</Boton>
      </form>
    </section>
  );
};

export default Formulario;
