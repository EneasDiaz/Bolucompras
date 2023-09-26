import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../logo/logo";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary NavBar">
            <Container className="contNav">
                <Logo/>
                <div>
                    <ul className="categorias">
                        <li><NavLink to="categoria/Cocina">Cocina</NavLink></li>
                        <li><NavLink to="categoria/Deco">Deco</NavLink></li>
                        <li><NavLink to="categoria/Baño">Baño</NavLink></li>
                    </ul>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;
