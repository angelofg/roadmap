import axios from "axios";
import { toast } from 'sonner';

const registrarUsuario = async (user) => {
    try{
        const response = await axios.post("http://127.0.0.1:5000/api/register",{ user });
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
    try{
        const response = await axios.get("http://127.0.0.1:5000/api/logout");
        
        localStorage.clear();
        toast.success(response.data);
    }catch(err){
        toast.success(err);
    }
};

export const userServices = {
    registrarUsuario,
    iniciarSesion,
    cerrarSesion
};