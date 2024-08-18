import { useState } from 'react';
import './Login.css';
import Campo from '../../components/Campo';
import Boton from '../../components/Boton';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        const datos = [username , password];
        setMessage(datos);
        console.log(datos);
    }

    return (
        <section className='formulario-sesion'>
            <form onSubmit={handleSubmit}>
                <h2>Iniciar Sesion</h2>
                <Campo 
                    type="text"
                    placeholder="Nombre de usuario"
                    value={username}
                    actualizarValor={setUsername}
                    required
                />
                <Campo 
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    actualizarValor={setPassword}
                    required
                />
                <Boton>Iniciar sesion</Boton>
                {message && <p>{message}</p>}
            </form>
            
        </section>
    )
}

export default Login;