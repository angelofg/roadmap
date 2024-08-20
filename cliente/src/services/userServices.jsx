import axios from "axios";

const registrarUsuario = async (username, password) => {
    await axios
        .post("http://127.0.0.1:5000/api/register",{
            username,
            password,
        })
        .then((data) => console.log("Registro exitoso."))
        .catch((err) => console.log(err));
};

const iniciarSesion = async (username, password) => {
    try {
        const response = await axios.post("http://127.0.0.1:5000/api/login", {
            username,
            password,
        });
        localStorage.setItem('token', response.data.token);
        console.log('Inicio de sesion exitoso');
    } catch (error){
        console.log('Error en el inicio de sesion');
    }
}

export const userServices = {
    registrarUsuario,
    iniciarSesion
};