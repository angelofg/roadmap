import "./Mapa.css";
import Card from "../Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const Mapa = (props) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
       const response = await axios.get('http://127.0.0.1:5000/api/productos');
       setProductos(response.data);
    }
    
    return <div className="mapa">
        {productos.map((producto, index) =>  (<Card 
            datos={producto}
            key={index}
        />))}

        
    </div>
}

export default Mapa;