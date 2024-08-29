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

const cerrarSesion = async() => {
    await axios.get("http://127.0.0.1:5000/api/logout")
    .then((data) => console.log(data.data))
    .catch((err) => console.log(err));
};

export const userServices = {
    registrarUsuario,
    iniciarSesion,
    cerrarSesion
};