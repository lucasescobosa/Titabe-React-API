import { useCart } from "../hooks/useCart.js"
import MainNavbar from "../components/MainNavbar.jsx";
import Footer from "../components/Footer.jsx";
import CartCard from "../components/CartCard.jsx";
import { ArrowLeftIcon } from "../components/Icons.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {

    const { cart, addToCart, clearCart } = useCart()
    
    const totalItems = cart.reduce(function(acum, obj){ return acum + obj.quantity }, 0)
    const subtotalPrice = cart.reduce(function(acum, obj){ return acum + (obj.quantity * obj.price) }, 0)

    return (
        <>
            <MainNavbar current={""}/>
            <div style={{paddingTop: '100px'}}>
                <Container className="py-3 h-100">
                    <Row className="d-flex justify-content-center align-items-center h-100">
                        <Col>
                            <Card>
                                <Card.Body className="p-0">
                                    <Row className="g-0">
                                        <Col xs={12} lg={8}>
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold my-auto text-black">Carrito de compras</h1>
                                                <h6 className="my-auto text-muted">{totalItems} artículos</h6>
                                                </div>
                                                <hr className="my-4"/>
                            
                                                <CartCard/>
                            
                                                <hr className="my-4"/>
                            
                                                <div className="pt-3">
                                                    <h6 className="mb-0">
                                                    <a href="/store" className="text-body"><ArrowLeftIcon/> Volver a Tienda</a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs={12} lg={4} className="bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Resumen</h3>
                                            <hr className="my-4"/>
                        
                                            <div className="d-flex justify-content-between mb-4">
                                            <h5 className="text-uppercase">subtotal</h5>
                                            <h5>${subtotalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h5>
                                            </div>
                        
                                            <h5 className=" mb-3">Envío GRATIS a toda Argentina</h5>
                        
                                            <div className="mb-4 pb-2">
                                            <select className="form-select">
                                                <option value="1">Retiro por tienda (Córdoba Capital)</option>
                                                <option value="2">Envío a domicilio mediante Correo Argentino</option>
                                            </select>
                                            </div>
                        
                                            <h5 className="text-uppercase mb-3">medio de pago</h5>
                        
                                            <div className="mb-4 pb-2">
                                                <select className="form-select">
                                                <option value="1">Transferencia</option>
                                                <option value="2">Efectivo (solo Córdoba)</option>
                                                <option value="3">Tarjeta de crédito</option>
                                                </select>
                                            </div>

                                            <hr className="my-4"/>
                        
                                            <div className="d-flex justify-content-between mb-5">
                                            <h5 className="text-uppercase">precio total</h5>
                                            <h5>$</h5>
                                            </div>
                        
                                            <button type="button" className="btn btn-warning btn-block w-100 btn-lg" onClick={clearCart}>Confirmar pedido</button>
                        
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