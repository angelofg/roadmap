
const ListOptions = (props) => {

    const productos = props.product;
    
    const handleOption = (e) => {
       props.actualizarValor(e.target.value);
    }

    return (
        <div className="lista-opciones">
            <select value={props.value}  onChange={handleOption}>
                {productos.map(producto => <option key={producto} value={producto.tecnologia}>{producto}</option>)} 
            </select>
        </div>
    );
}

export default ListOptions;