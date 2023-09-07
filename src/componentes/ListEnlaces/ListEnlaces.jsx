import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './ListEnlaces.css'

const ListEnlaces = () => {
    return (
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link className="Enlace" href="#productos">Productos</Nav.Link>
                <Nav.Link className="Enlace"  href="#contacto">Contacto</Nav.Link>
                <Nav.Link className="Enlace"  href="#nosotros">Nosotros</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    );
};

export default ListEnlaces