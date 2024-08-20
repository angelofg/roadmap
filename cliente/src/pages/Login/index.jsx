import { useState } from 'react';
import './Login.css';
import Campo from '../../components/Campo';
import Boton from '../../components/Boton';
import { userServices } from '../../services/userServices';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState([]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        await userServices.iniciarSesion(username, password);
    }

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
                {/* {message && <p className='text-center'>{message}</p>} */}
            </form>
            
        </section>
    );
};

export default Login;