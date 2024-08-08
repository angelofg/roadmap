import "./EditModal.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FiEdit } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const EditModal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { tecnologia, item } = props.datos;

  return (
    <div className="d-flex gap-3 justify-content-end">
      <FiEdit className="botonEditar" size="2rem" onClick={handleShow} />
      
      <IoClose className="botonCerrar" size="2rem" onClick={handleShow} />
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{tecnologia}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{item}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditModal;
