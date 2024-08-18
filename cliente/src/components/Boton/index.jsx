import './Boton.css';

const Boton = (props) => {
    return <button type='submit' className="boton">{props.children}</button>
}

export default Boton;