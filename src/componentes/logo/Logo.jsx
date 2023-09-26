import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Logo.css'
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div>
            <NavLink to='/'>
            <Container>
                <Navbar.Brand className='logo'>
                    <img
                        alt="logo bolucompra"
                        src="./src/assets/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                    Bolucompras
                </Navbar.Brand>
            </Container>
            </NavLink>
        </div>
);
}

export default Logo;