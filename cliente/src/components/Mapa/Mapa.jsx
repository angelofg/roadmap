import "./Mapa.css";
import Card from "../Card/Card";

const Mapa = (props) => {
    const { informacion } = props;
    
    return <div className="mapa">
        {informacion.map((info, index) => <Card 
            datos={info}
            key={index}
            />)
        }
        
    </div>
}

export default Mapa;