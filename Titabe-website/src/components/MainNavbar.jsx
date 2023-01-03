import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import titabeLogo from '../assets/images/logowhite.png'

const MainNavbar = (props) => {
    return(
        <Navbar collapseOnSelect fixed='top' bg="dark" expand='lg' variant="dark" className='p-3'>
            <Container>
                <Navbar.Brand href="/">
                    <img src={titabeLogo} width='100px' alt='logo-titabe'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto mb-lg-0 flex-row justify-content-center">
                        {props.current==="home" ? 
                            <Nav.Link href="/" className="px-2 text-warning">INICIO</Nav.Link>
                            :
                            <Nav.Link href="/" className="px-2 text-white">INICIO</Nav.Link>
                        }
                        {props.current==="store" ? 
                            <Nav.Link href="/store" className="px-2 text-warning">TIENDA</Nav.Link>
                            :
                            <Nav.Link href="/store" className="px-2 text-white">TIENDA</Nav.Link>
                        }
                        {props.current==="store" ? 
                            <Nav.Link href="/contact" className="px-2 text-warning">CONTACTO</Nav.Link>
                            :
                            <Nav.Link href="/contact" className="px-2 text-white">CONTACTO</Nav.Link>
                        }  
                    </Nav>
                    <Form className="me-lg-2 mb-3 mb-lg-0" >
                        <Form.Control
                        type="search"
                        placeholder="Busca tu producto..."
                        className="me-2 text-bg-dark"
                        aria-label="Search"
                        />
                    </Form>
                    <Nav>
                        <div className="d-flex justify-content-center">
                            <Button href='/login' variant="outline-light me-2">Iniciar Sesión</Button>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown" className='me-3'>
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Button variant="warning">
                                <svg className="bi pe-none" width="22" height="22" fill="black" viewBox="0 0 16 16">
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM6.5 7h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1z"/>
                                </svg>                
                            </Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar