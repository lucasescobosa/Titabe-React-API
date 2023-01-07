import { useState } from "react";

import MainNavbar from "../components/MainNavbar.jsx";
import Footer from "../components/Footer.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Collapse from 'react-bootstrap/Collapse';

const Store = () => {
    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return ( 
        <>
        <MainNavbar current={"store"}/>
        <div style={{paddingTop: '100px'}}>
            <Container fluid className="m-3 bg-light">
                <Row>
                    <Col xs={12} lg={3} className='pt-4 px-4 border-end border-secondary-subtle'>
                        <p className="fs-4 fw-bold">Categorias</p>
                        <hr/>
                        <p className="fs-5 fw-semibold">Productos</p>
                        <ul className="list-unstyled mb-4">
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">Leñeros/Braseros/Diablitos<span className="float-end">20</span></a></li>
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">Parrillas<span className="float-end">20</span></a></li>
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">A la Cruz<span className="float-end">20</span></a></li>
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">Fogoneros<span className="float-end">20</span></a></li>
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">Asadores<span className="float-end">20</span></a></li>
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">Discos<span className="float-end">20</span></a></li>
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">Accesorios<span className="float-end">20</span></a></li>
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">Tablas<span className="float-end">20</span></a></li>
                        </ul>
                        <hr/>
                        <p className="fs-5 fw-semibold">Servicios</p>
                        <ul className="list-unstyled text-start text-secondary">
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">Alquileres<span className="float-end">20</span></a></li>
                            <li className="my-2"><a className="d-block text-decoration-none text-secondary" href="#">Grabados<span className="float-end">20</span></a></li>
                        </ul>
                    </Col>
                    <Col xs={12} lg={9} className='ps-2'>
                        <div className="d-flex justify-content-between pt-3 pb-4 px-4 border-bottom border-secondary-subtle">
                            <Button variant="primary" className="" onClick={handleShow}>
                                Filtrar
                            </Button>
                            <div className="d-flex">
                                <p className="fs-6 m-auto pe-2">Ordenar por:</p>
                                <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Dropdown Button
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer/>
        </>
     );
}
 
export default Store;