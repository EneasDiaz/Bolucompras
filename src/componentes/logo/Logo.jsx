import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Logo.css'

const Logo = () => {
    return (
        <div>
            <Container>
                <Navbar.Brand href="#home" className='logo'>
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
        </div>
);
}

export default Logo;