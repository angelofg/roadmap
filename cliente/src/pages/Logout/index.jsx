import { userServices } from "../../services/userServices";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
    const navigate = useNavigate();

    const handleClick = async() =>{

        await userServices.cerrarSesion();
        
        navigate('/login');
        window.location.reload();
    }

    return (<>
    <div onClick={handleClick}>Cerrar sesion</div>   
    </>)
};

export default Logout;