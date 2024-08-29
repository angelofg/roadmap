import './Head.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from '../../pages/Logout';
import { Toaster } from 'sonner';

const Head = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">RoadMap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Nav.Link as={Link} to="/login">Iniciar sesion</Nav.Link>
              <Nav.Link as={Link} to="/register">Crear cuenta nueva</Nav.Link>
              <Nav.Link as={Link} to="/manager">Manager productos</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/logout"><Logout>Cerrar sesion</Logout></Nav.Link>
                <Toaster richColors position="top-center" />
              </Nav>
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
      );
}

export default Head;