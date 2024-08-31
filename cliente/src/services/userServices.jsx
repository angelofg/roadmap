import axios from "axios";
import { toast } from 'sonner';

const registrarUsuario = async (username, password) => {
    try{
        const response = await axios.post("http://127.0.0.1:5000/api/register",{ username, password });
        toast.success(response.data);
    }catch(err){
        toast.error(err.response.data);
    }
        
};

const iniciarSesion = async (username, password) => {
    try{
        const response = await axios.post("http://127.0.0.1:5000/api/login", { username, password });
        
        localStorage.setItem('token', response.data.token);
        toast.success(username, {description: ' ha iniciado sesion'});
    } catch(err){
        toast.error(err.response.data);
    } 
        
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