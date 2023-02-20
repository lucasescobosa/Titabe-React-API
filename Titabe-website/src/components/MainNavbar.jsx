import { useContext, useState } from "react";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { CartIcon } from "./Icons.jsx";
import titabeLogo from "../assets/images/logowhite.png";

const MainNavbar = (props) => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

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
          <Nav className="me-auto mb-lg-0 flex-row justify-content-center">
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
              <Nav.Link href="/contact" className="px-2 text-warning">
                CONTACTO
              </Nav.Link>
            ) : (
              <Nav.Link href="/contact" className="px-2 text-white">
                CONTACTO
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
                <Button variant="warning">
                  <CartIcon/>
                </Button>
              </LinkContainer>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;
