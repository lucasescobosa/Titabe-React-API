import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../hooks/useCart.js"
import './StoreCard.css'

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';

const StoreCard = ({items}) => {
    const { addToCart } = useCart()
    return ( 
        <>
        {items.map((item, i) => {
            return (
            <Col xs={12} sm={6} lg={4} className='mb-4' key={i}>
                <Card bg="light" className="h-100 shadow store-card position-relative">
                    <Card.Img variant="top" src={`${process.env.SERVER_URI}/images/products/${item.products_images[0].name}`} style={{height: '250px', objectFit: 'contain'}} alt={item.name} />
                    <Card.Body className="text-center d-flex flex-column">
                        <Card.Title className="card-product-title fs-3">{item.name}</Card.Title>
                        <Card.Subtitle className="card-product-subtitle mb-3 text-muted">{item.descriptionShort}</Card.Subtitle>
                        {(item.price == 0)?
                        (
                            <Button onClick={() => addToCart(item)} variant="outline-secondary" className="w-100 mt-auto" style={{zIndex: 2, position: 'relative'}}>Consultar</Button>
                        ):(
                            <>
                            <Card.Text className="card-product-price fs-2 fw-bold mb-0">${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</Card.Text>
                            <Card.Text className="mt-0 fs-6 text-muted fw-light"><em>(exclusivo vía transferencia)</em></Card.Text>
                            {(item.stock)?
                            (
                                <Button onClick={() => addToCart(item)} variant="outline-warning" className="w-100 mt-auto" style={{zIndex: 2, position: 'relative'}}>Agregar al carrito</Button>
                            ):(
                                <Button onClick={() => addToCart(item)} variant="outline-secondary disabled" className="w-100 mt-auto" style={{zIndex: 2, position: 'relative'}}>Sin Stock</Button>
                            )}
                            </>          
                        )}
                    </Card.Body>
                    <Link to={`/detail/${item.id}`} className='stretched-link'/>
                    {(item.discount > 0)?
                    (
                        <h5><span class="position-absolute top-0 start-50 translate-middle badge bg-success">
                            -{item.discount}%
                        </span></h5>
                    ):(null)}
                </Card>
            </Col>
            )
        })}
        </>
    );
}
 
export default StoreCard;