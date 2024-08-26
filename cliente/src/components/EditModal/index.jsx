import "./EditModal.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiEdit } from "react-icons/fi";
import { toast } from "sonner";


const EditModal = (props) => {
  
  const { tecnologia, item } = props.datos;

  const [show, setShow] = useState(false);
  const [actualizar, setActualizar] = useState(item);

  const productos = props.datos;
  const updateProductos = props.update;
  
  const handleEnvio = () => {
    const id = productos._id;
    const datos = {
      tecnologia: tecnologia,
      item: actualizar
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
            onClick={() => {
              handleEnvio(); 
              handleClose();
              toast.info('Tarjeta Actualizada.');
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
