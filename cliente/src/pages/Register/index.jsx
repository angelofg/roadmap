import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './Register.css';
import Campo from '../../components/Campo';
import Boton from '../../components/Boton';
import { userServices } from '../../services/userServices';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEnvio =  handleSubmit( async (data)=> {
        
        const user = data;
        console.log(user);
        await userServices.registrarUsuario(user);
        // navigate('/login');
    });

    // const handleEnvio = async(e) => {
    //     e.preventDefault();

    //     if(username!=="" && password !== ""){
    //         await userServices.registrarUsuario(username, password);
            
    //         navigate('/login');
            
    //     }else{
    //         toast.error('Error!', {description: 'Complete los campos requeridos'});
    //     }
    // };

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
                            message: 'Nombre es requerido',
                        },
                        minLength: {
                            value: 3,
                            message: 'Nombre debe tener al menos 3 caracteres',
                        },
                        maxLength: {
                            value: 20,
                            message: "Nombre debe tener maximo 20 caracteres",
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

                {/* <Campo 
                    placeholder="Nombre de usuario"
                    value={username}
                    actualizarValor={setUsername}
                    required
                />
                <Campo 
                    placeholder="Contraseña"
                    value={password}
                    actualizarValor={setPassword}
                    required
                /> */}
                <Boton>Registrarte</Boton>
            </form>

            {/* {registrado && <Navigate to="/login" replace={true} />}  */}
        </section>
    );
};

export default Register;