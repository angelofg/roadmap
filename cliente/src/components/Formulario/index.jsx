import "./Formulario.css";
import { useForm } from 'react-hook-form';
import { productServices } from "../../services/productServices";
import Boton from "../Boton";

const Formulario = (props) => {
  
  const { register, handleSubmit, formState: {errors} } = useForm();

  const fetchProductos = props.fetch;

  const handleEnvio = handleSubmit( async(data) => {
    
    await productServices.addProductos(data.tecnologia,data.item,data.descripcion,data.ejemplo);
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

        <label htmlFor="descripcion">Descripcion</label>
        <textarea
          className="input-tecnologia" 
          type="text" 
          rows={5}
          {...register('descripcion', {
            required: {
              value: true,
              message: 'Campo descripcion es requerido',
            },
            minLength: {
              value: 3,
              message: 'Campo descripcion debe tener al menos 3 caracteres',
            },
            maxLength: {
              value: 350,
              message: "Campo descripcion debe tener maximo 350 caracteres",
            },
          })}
        />

        { errors.descripcion && <span>{errors.descripcion.message }</span>}

        <label htmlFor="ejemplo">Ejemplo</label>
        <textarea
          className="input-tecnologia" 
          type="text" 
          rows={5}
          {...register('ejemplo', {
            required: {
              value: true,
              message: 'Campo ejemplo es requerido',
            },
            minLength: {
              value: 3,
              message: 'Campo ejemplo debe tener al menos 3 caracteres',
            },
            maxLength: {
              value: 700,
              message: "Campo ejemplo debe tener maximo 700 caracteres",
            },
          })}
        />

        { errors.ejemplo && <span>{errors.ejemplo.message }</span>}


        <Boton>Agregar</Boton>
      </form>
    </section>
  );
};

export default Formulario;
