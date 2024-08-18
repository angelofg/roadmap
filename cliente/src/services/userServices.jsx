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

export const userServices = {
    registrarUsuario
};