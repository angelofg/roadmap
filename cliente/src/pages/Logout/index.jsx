import { userServices } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
    const navigate = useNavigate();

    const handleClick = async() =>{

        await userServices.cerrarSesion();
        
        navigate('/login');
        setTimeout(()=>
            window.location.reload()
        ,10);
    }

    return (<>
    <div onClick={handleClick}>Cerrar sesion</div>   
    </>)
};

export default Logout;