import "./EditModal.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiEdit } from "react-icons/fi";

const EditModal = (props) => {
  
  const { tecnologia, item, descripcion, ejemplo } = props.datos;

  const [show, setShow] = useState(false);
  const [updateItem, setUpdateItem] = useState(item);
  const [updateDescripcion, setUpdateDescripcion] = useState(descripcion);
  const [updateEjemplo, setUpdateEjemplo] = useState(ejemplo);

  const productos = props.datos;
  const updateProductos = props.update;
  
  const handleEnvio = () => {
    const id = productos._id;
    const datos = {
      tecnologia: tecnologia,
      item: updateItem,
      descripcion: updateDescripcion,
      ejemplo: updateEjemplo
    }
    //peticion put axios 
    updateProductos(id, datos);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <FiEdit className="botonEditar" size="2rem" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{tecnologia}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <label htmlFor="Item">Item</label>
          <input 
            className="inputActualizar"
            type="text"
            value={updateItem}
            onChange={e => setUpdateItem(e.target.value)}
          />

          <label htmlFor="Descripcion">Descripcion</label>
          <textarea
            className="inputActualizar"
            type="text"
            value={updateDescripcion}
            onChange={e => setUpdateDescripcion(e.target.value)}
          />

          <label htmlFor="Ejemplo">Ejemplo</label>
          <textarea 
            className="inputActualizar"
            type="text"
            value={updateEjemplo}
            onChange={e => setUpdateEjemplo(e.target.value)}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button 
            variant="primary" 
            onClick={() => {
              handleEnvio(); 
              handleClose();
            }}
            >
            Save Changes
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
