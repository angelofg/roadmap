import axios from "axios";
import "./EditModal.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiEdit } from "react-icons/fi";
import Campo from "../Campo/Campo";

const EditModal = (props) => {
  const { tecnologia, item } = props.datos;
  const fetchProductos = props.fetch;

  const [show, setShow] = useState(false);
  const [actualizar, setActualizar] = useState(item);

  let datosActualizar = props.datos;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateProductos = async (id) => {
    await axios
      .put(`http://127.0.0.1:5000/api/productos/${id}`, {tecnologia:tecnologia, item:actualizar})
      .then((data) => console.log("Producto actualizado"))
      .catch((err) => console.log(err));
      fetchProductos();
  };

  return (
    <div>
      <FiEdit className="botonEditar" size="2rem" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{tecnologia}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input 
            className="inputActualizar"
            type="text"
            value={actualizar}
            onChange={e => setActualizar(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button 
            variant="primary" 
            onClick={() => {updateProductos(datosActualizar._id); handleClose();}}
            >
            Save Changes
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
