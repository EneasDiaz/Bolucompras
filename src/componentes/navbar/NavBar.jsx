import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css"
import CartWidget from "../CartWidget/CartWidget";
import ListEnlaces from "../ListEnlaces/ListEnlaces";
import Logo from "../logo/logo";


const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary NavBar">
            <Container>
                <Logo/>
                <ListEnlaces/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;
