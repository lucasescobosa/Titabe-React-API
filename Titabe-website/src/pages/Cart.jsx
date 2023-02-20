import MainNavbar from "../components/MainNavbar.jsx";
import Footer from "../components/Footer.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
    return (
        <>
            <MainNavbar current={""}/>
            <div style={{paddingTop: '100px'}}>
                <Container className="py-5 h-100">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col>
                            <Card>
                                <Card.Body className="p-0">
                                    <Row className="g-0">
                                        <Col xs={12} lg={8}>
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Carrito de compras</h1>
                                                <h6 className="mb-0 text-muted">3 artículos</h6>
                                                </div>
                                                <hr className="my-4"/>
                            
                                                <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                <div className="col-md-2 col-lg-2 col-xl-2">
                                                    <h3>imagen producto</h3>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-3">
                                                    <h6 className="text-muted">Accesorios</h6>
                                                    <h6 className="text-black mb-0">Pala Reforzada</h6>
                                                </div>
                                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                    <button className="btn btn-link px-2"
                                                    >
                                                    <i className="fas fa-minus"></i>
                                                    </button>
                            
                                                    <input id="form1" min="0" name="quantity" value="1" type="number"
                                                    className="form-control form-control-sm" />
                            
                                                    <button className="btn btn-link px-2"
                                                    >
                                                    <i className="fas fa-plus"></i>
                                                    </button>
                                                </div>
                                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                    <h6 className="mb-0">$ 2.092</h6>
                                                </div>
                                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                    <a href="#!" className="text-muted"><i className="fas fa-times"></i></a>
                                                </div>
                                                </div>
                            
                                                <hr className="my-4"/>
                            
                                                
                            
                                                <hr className="my-4"/>
                            
                                                <div className="pt-5">
                                                <h6 className="mb-0"><a href="/products" className="text-body"><i
                                                        className="fas fa-long-arrow-alt-left me-2"></i>Volver a Productos</a></h6>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} lg={4} className="bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Resumen</h3>
                                            <hr className="my-4"/>
                        
                                            <div className="d-flex justify-content-between mb-4">
                                            <h5 className="text-uppercase">subtotal</h5>
                                            <h5>$ 27.238</h5>
                                            </div>
                        
                                            <h5 className="text-uppercase mb-3">Envío</h5>
                        
                                            <div className="mb-4 pb-2">
                                            <select className="form-select">
                                                <option selected value="1">Retiro por tienda</option>
                                                <option value="2">Envío a domicilio</option>
                                                <option value="3">Envío por correo</option>
                                                <option value="4">Otro</option>
                                            </select>
                                            </div>
                        
                                            <h5 className="text-uppercase mb-3">medio de pago</h5>
                        
                                            <div className="mb-4 pb-2">
                                                <select className="form-select">
                                                <option selected value="1">Transferencia</option>
                                                <option value="2">Efectivo</option>
                                                <option value="3">Tarjeta de crédito</option>
                                                </select>
                                            </div>

                                            <hr className="my-4"/>
                        
                                            <div className="d-flex justify-content-between mb-5">
                                            <h5 className="text-uppercase">precio total</h5>
                                            <h5>$102.000</h5>
                                            </div>
                        
                                            <button type="button" className="btn btn-warning btn-block w-100 btn-lg">Ir al pago</button>
                        
                                        </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                </div>
            <Footer/>
        </>
     );
}
 
export default Cart;