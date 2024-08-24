import { useState } from 'react';
import './Login.css';
import Campo from '../../components/Campo';
import Boton from '../../components/Boton';
import { userServices } from '../../services/userServices';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [logeado, setLogeado] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        await userServices.iniciarSesion(username, password)
            .then((data) => setLogeado(true))
            .catch((err) => console.log(err));
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
                {logeado && <Navigate to="/manager" replace={true} />}
            </form>
        </section>
    );
};

export default Login;