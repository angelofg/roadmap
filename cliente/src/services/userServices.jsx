import axios from "axios";

const registrarUsuario = async (username, password) => {
    await axios
        .post("http://127.0.0.1:5000/api/register",{
            username,
            password
        })
        .then((data) => console.log("Usuario Registrado"))
        .catch((err) => console.log(err));
        
};

const iniciarSesion = async (username, password) => {
        await axios
            .post("http://127.0.0.1:5000/api/login", {
            username,
            password
        })
        .then((data) => console.log("Inicio de sesion exitoso"))
        .catch((err) => console.log(err));
    // localStorage.setItem('token', response.data.token);     
}

export const userServices = {
    registrarUsuario,
    iniciarSesion
};