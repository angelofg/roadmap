import { useForm } from 'react-hook-form';
import './Login.css';
import Boton from '../../components/Boton';
import { userServices } from '../../services/userServices';
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const { register, handleSubmit, formState: {errors} } = useForm();

    const navigate = useNavigate();

    const handleEnvio = handleSubmit( async (data) => {
        const user = data;
        await userServices.iniciarSesion(user);
        navigate('/manager');
        
        setTimeout(()=>
            window.location.reload()
        ,10);
        
    });

    return (
        <section className='formulario-sesion'>
            <form onSubmit={handleEnvio}>
                <h2>Iniciar Sesion</h2>
                <label htmlFor="username">Usuario</label>
                <input 
                    className='input-sesion'
                    type="text" 
                    placeholder='Digite el nombre de usuario' 
                    {...register('username', {
                        required: {
                            value: true,
                            message: 'Usuario es requerido',
                        },
                        minLength: {
                            value: 3,
                            message: 'Usuario debe tener al menos 3 caracteres',
                        },
                        maxLength: {
                            value: 20,
                            message: "Usuario debe tener maximo 20 caracteres",
                        },
                    })}
                />

                { errors.username && <span>{ errors.username.message }</span> }

                <label htmlFor="password">Password</label>
                <input 
                    className='input-sesion'
                    type="password" 
                    placeholder='Digite su password' 
                    {...register('password', {
                        required: {
                            value: true,
                            message: 'Password es requerido',
                        },
                        minLength: {
                            value: 6,
                            message: 'Password debe tener al menos 6 caracteres',
                        },
                    })}
                />

                { errors.password && <span>{ errors.password.message }</span> }

                <Boton>Iniciar sesion</Boton>
            </form>
        </section>
    );
};

export default Login;