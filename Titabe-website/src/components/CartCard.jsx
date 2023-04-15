import { useCart } from "../hooks/useCart.js"
import { MinusIcon, PlusIcon, CrossIcon } from './Icons.jsx';

import Image from 'react-bootstrap/Image'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CartCard = () => {

    const { cart, addToCart, removeFromCart, decreaseFromCart } = useCart()

    return (
        <>
        {cart.map((item, i) => {
            return(
                <Row className="mb-4 d-flex justify-content-between align-items-center" key={i}>
                <Col sm={12} md={2}>
                    <Image src={`${process.env.SERVER_URI}/images/products/${item.products_images[0].name}`} style={{width: '100%', objectFit: 'contain'}} alt={item.name} />
                </Col>
                <Col sm={12} md={4} className='text-center'>
                    <h6 className="text-muted">{item.subcategories.name}</h6>
                    <h6 className="text-black mb-0">{item.name}</h6>
                </Col>
                <Col sm={12} md={3} className="d-flex justify-content-center">
                    <button className="btn btn-link px-2" onClick={()=>{(item.quantity > 1) ? decreaseFromCart(item) : null}}>
                    <MinusIcon/>
                    </button>

                    <p className='text-center my-auto fw-semibold'>Cant: {item.quantity}</p>

                    <button className="btn btn-link px-2" onClick={()=>{addToCart(item)}}>
                    <PlusIcon/>
                    </button>
                </Col>
                <Col sm={12} md={2} className='text-center'>
                    <h5 className="mb-0">${(item.price * item.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h5>
                </Col> 
                <Col sm={12} md={1} className="text-end">
                    <button className="btn btn-link" onClick={()=>{removeFromCart(item)}}><CrossIcon/></button>
                </Col>
                </Row>
            )
        }
        )}
        </>
     );
}
 
export default CartCard;