import { toast } from "sonner";
import { userServices } from "../../services/userServices";

const Logout = (props) => {

    const handleClick = async () =>{
       
        await userServices.cerrarSesion();
        
        toast.success("Sesion Cerrada");
    }

    return (<>
    <div onClick={handleClick}>{props.children}</div>
        
        
    </>)
};

export default Logout;