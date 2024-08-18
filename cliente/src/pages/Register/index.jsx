import { useState } from 'react';
import './Register.css';
import Campo from '../../components/Campo';
import Boton from '../../components/Boton';
import { userServices } from '../../services/userServices';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState();

    const handleEnvio = async(e) => {
        e.preventDefault();
        await userServices.registrarUsuario(username, password)
            .then((data) => setMessage("Usuario Registrado"))
            .catch((err) => setMessage(err));
    };

    return (
        <section className='formulario-registro'>
            <form onSubmit={handleEnvio}>
                <h2>Registrarte</h2>
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
                <Boton>Registrarte</Boton>
                 {message && <p className='text-center'>{message}</p>} 
            </form>
        </section>
    );
};

export default Register;