import './Head.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logout from '../../pages/Logout';
import { Toaster } from 'sonner';

const Head = () => {

  const token = localStorage.getItem('token');
 
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand as={Link} to="/">RoadMap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              { !token ?
                <Nav className="justify-content-end flex-grow-1 p-3">
                  <Nav.Link as={Link} to="/login">Iniciar sesion</Nav.Link>
                  <Nav.Link as={Link} to="/register">Crear cuenta nueva</Nav.Link>
                </Nav>
                :
                <Nav className="justify-content-end flex-grow-1 p-3">
                <Nav.Link as={Link} to="/manager">Manager productos</Nav.Link>
                  <Nav.Link as={Link} to="/login"><Logout /></Nav.Link>
                </Nav>
              }
              <Toaster richColors position="top-left" />
            </Navbar.Collapse>
          </Container>
          
        </Navbar>
      );
}

export default Head;