import "./Campo.css";

const Campo = (props) => {

    const handleCambio = (e) => {
        props.actualizarValor(e.target.value);
    }

    return <div className="campo">
        <label>{props.titulo}</label>
        <input 
            id="input-campo"
            type="text"
            placeholder={props.placeholder} 
            value={props.valor}
            onChange={handleCambio}
            minLength={2}
            maxLength={60}
        />
    </div>
}

export default Campo;