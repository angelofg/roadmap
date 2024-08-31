import { useState } from 'react';
import './Login.css';
import Campo from '../../components/Campo';
import Boton from '../../components/Boton';
import { userServices } from '../../services/userServices';
import { toast } from 'sonner';
// import { Navigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [logeado, setLogeado] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        
        if(username!=="" && password !== ""){
            await userServices.iniciarSesion(username, password);
        } else {
            toast.error('Error', {description: 'Complete los campos requeridos'});
        }
        
    };

    return (
        <section className='formulario-sesion'>
            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesion</h2>
                <Campo 
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
                />
                <Boton>Iniciar sesion</Boton>
            </form>

             {/* {logeado && <Navigate to="/manager" replace={true} />}  */}         
        </section>
    );
};

export default Login;