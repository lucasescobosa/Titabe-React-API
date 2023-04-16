import { useContext, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'
import { useCart } from "../hooks/useCart.js"
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio'

import { CartIcon, Whatsapp, Instagram, Facebook, Gmail } from "./Icons.jsx";
import titabeLogo from "../assets/images/logowhite.png";

const MainNavbar = (props) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { cart } = useCart()
    
  const totalItems = cart.reduce(function(acum, obj){ return acum + obj.quantity }, 0)

  const logout = () => {
    localStorage.removeItem("accessToken")
    setCurrentUser({
      email: "",
      fullName: "", 
      id: 0, 
      logged: false 
    })
    window.location.reload(false)
  }

  const [seachText, setSearchText] = useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/store', {state:{filter: seachText}})
    setSearchText('')
  }

  //Modal
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      bg="dark"
      expand="lg"
      variant="dark"
      className="p-3"
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={titabeLogo} width="100px" alt="logo-titabe" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mb-lg-0 flex-row justify-content-center flex-wrap">
            {props.current === "home" ? (
              <Nav.Link href="/" className="px-2 text-warning">
                INICIO
              </Nav.Link>
            ) : (
              <Nav.Link href="/" className="px-2 text-white">
                INICIO
              </Nav.Link>
            )}
            {props.current === "store" ? (
              <Nav.Link href="/store" className="px-2 text-warning">
                TIENDA
              </Nav.Link>
            ) : (
              <Nav.Link href="/store" className="px-2 text-white">
                TIENDA
              </Nav.Link>
            )}
            {props.current === "contact" ? (
              <Nav.Link  className="px-2 text-warning" onClick={()=> handleShow()}>
                CONTACTO
              </Nav.Link>
            ) : (
              <Nav.Link  className="px-2 text-white" onClick={()=> handleShow()}>
                CONTACTO
              </Nav.Link>
            )}
            {props.current === "aboutus" ? (
              <Nav.Link href="/aboutus" className="px-2 text-warning">
                NOSOTROS
              </Nav.Link>
            ) : (
              <Nav.Link href="/aboutus" className="px-2 text-white">
                NOSOTROS
              </Nav.Link>
            )}
            {props.current === "faqs" ? (
              <Nav.Link href="/faqs" className="px-2 text-warning">
                AYUDA
              </Nav.Link>
            ) : (
              <Nav.Link href="/faqs" className="px-2 text-white">
                AYUDA
              </Nav.Link>
            )}
          </Nav>
          <Form className="me-lg-2 mb-3 mb-lg-0" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Busca tu producto..."
              className="me-2 text-bg-dark"
              aria-label="Search"
              name="search"
              value={seachText}
              onChange={handleChange}  
            />
          </Form>
          <Nav>
            <div className="d-flex justify-content-center">
              {currentUser.logged ? (
                <NavDropdown
                  title={
                    <svg
                      className="bi pe-none"
                      width="30"
                      height="30"
                      fill="white"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                      />
                    </svg>
                  }
                  id="collasible-nav-dropdown"
                  className="me-2"
                >
                  <NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>
                    Cerrar Sesión
                  </NavDropdown.Item>
                  
                  {(currentUser.role_id == 1 || currentUser.role_id == 2) ? (
                      <LinkContainer to='/create'>
                        <NavDropdown.Item>
                        Crear Producto
                        </NavDropdown.Item>
                      </LinkContainer>
                  ) : (null)
                  }

                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    {currentUser.fullName}
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Button href="/login" variant="outline-light me-2">
                  Iniciar Sesión
                </Button>
              )}
              <LinkContainer to='/cart'>
                <Button variant="warning" className="position-relative">
                  <CartIcon/>
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                </Button>
              </LinkContainer>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    <Modal show={show} onHide={() => setShow(false)} >
    <Modal.Header closeButton className="p-5" style={{backgroundColor: 'rgb(248,249,250)'}}>
      <Modal.Title className="fw-bold">CONECTA CON NOSOTROS!</Modal.Title>
    </Modal.Header>
    <Modal.Body className="px-5 py-3" style={{backgroundColor: 'rgb(248,249,250)'}}>
      <Container fluid>
        <Row>
          <h5 className="text-muted text-center">Contactanos por nuestras redes sociales:</h5>
        </Row>
        <Row style={{backgroundColor: 'white'}}>
          <Col xs={4} className="border rounded">
            <Ratio aspectRatio={'1x1'}>
              <a href="http://api.whatsapp.com/send?phone=5493513323046" className="p-3 text-center text-decoration-none" style={{color: '#25D366'}}>
                <Whatsapp/>
                <p className="text-muted">Whatsapp</p>
              </a>
            </Ratio>
          </Col>
          <Col xs={4} className="border rounded">
            <Ratio aspectRatio={'1x1'}>
            <a href="https://www.instagram.com/titabe.cba/?hl=es" className="p-3 text-center text-decoration-none" style={{color: '#F56040'}}>
                <Instagram/>
                <p className="text-muted">Instagram</p>
              </a>
            </Ratio>
          </Col>
          <Col xs={4} className="border rounded">
            <Ratio aspectRatio={'1x1'}>
            <a href="https://www.facebook.com/titabe.cba" className="p-3 text-center text-decoration-none" style={{color: '#4267B2'}}>
                <Facebook/>
                <p className="text-muted">Facebook</p>
              </a>
            </Ratio>
          </Col>
        </Row>
        <Row className="mt-3" >
          <h5 className="text-muted text-center">O dejanos tus dudas y te responderemos a la brevedad:</h5>
        </Row>
        <Row style={{backgroundColor: 'white'}} className="border rounded">
          <Col xs={4} >
                <div className="p-3 text-center my-auto" style={{color: '#F4B400'}}>
                  <Gmail/>
                  <p className="text-muted">Mail</p>
                </div>
            </Col>
            <Col xs={8} >
              <Form className="p-3">
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Consulta</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button>Enviar</Button>
            </Form>
            </Col>
        </Row>
      </Container>
    </Modal.Body>
    </Modal>
    </Navbar>
  );
};

export default MainNavbar;
