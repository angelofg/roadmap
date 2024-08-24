import { useState } from 'react';
import './Register.css';
import Campo from '../../components/Campo';
import Boton from '../../components/Boton';
import { userServices } from '../../services/userServices';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registrado, setRegistrado] = useState(false);

    const handleEnvio = async(e) => {
        e.preventDefault();
        await userServices.registrarUsuario(username, password)
            .then((data) => setRegistrado(true))
            .catch((err) => console.log(err));
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
                 {registrado && <Navigate to="/login" replace={true} />} 
            </form>
        </section>
    );
};

export default Register;