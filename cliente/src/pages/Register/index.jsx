import { useForm } from 'react-hook-form';
import './Register.css';
import Boton from '../../components/Boton';
import { userServices } from '../../services/userServices';
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const navigate = useNavigate();

    const handleEnvio =  handleSubmit( async (data)=> {
        const user = data;
        await userServices.registrarUsuario(user);
        navigate('/login');
    });

    return (
        <section className='formulario-registro'>
            <form onSubmit={handleEnvio}>
                <h2>Registrarte</h2>
                <label htmlFor="username">Usuario</label>
                <input 
                    className='input-registro'
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

                {errors.username && <span>{errors.username.message}</span>}

                <label htmlFor="password">Password</label>
                <input 
                    className='input-registro'
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

                {errors.password && <span>{errors.password.message}</span>}

                <label htmlFor="confirmarPassword">Confirmar Password</label>
                <input 
                    className='input-registro'
                    type="password" 
                    placeholder='Confirme su password' 
                    {...register('confirmarPassword', {
                        required: {
                            value: true,
                            message: 'Confirmar password es requerido',
                        },
                        validate: (value) => value === watch('password') || 'Password no coincide',
                    })}    
                />

                {errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span>}

                <Boton>Registrarte</Boton>
            </form>

        </section>
    );
};

export default Register;