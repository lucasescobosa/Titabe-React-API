import { useCart } from "../hooks/useCart.js"
import { MinusIcon, PlusIcon, CrossIcon } from './Icons.jsx';

import Image from 'react-bootstrap/Image'

const CartCard = () => {

    const { cart, addToCart, clearCart } = useCart()

    return (
        <>
        {cart.map((item, i) => {
            return(
                <div className="row mb-4 d-flex justify-content-between align-items-center" key={i}>
                <div className="col-md-2 col-lg-2 col-xl-2">
                    <Image src={`${process.env.SERVER_URI}/images/products/${item.products_images[0].name}`} style={{height: '150px', objectFit: 'contain'}} alt={item.name} />
                </div>
                <div className="col-md-3 col-lg-3 col-xl-3">
                    <h6 className="text-muted">Accesorios</h6>
                    <h6 className="text-black mb-0">{item.name}</h6>
                </div>
                <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                    <button className="btn btn-link px-2">
                    <MinusIcon/>
                    </button>

                    <p className='text-center my-auto fw-semibold'>Cant: {item.quantity}</p>

                    <button className="btn btn-link px-2">
                    <PlusIcon/>
                    </button>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                    <h6 className="mb-0">${(item.price * item.quantity).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h6>
                </div>
                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                    <a href="#!" className="text-muted"><CrossIcon/></a>
                </div>
                </div>
            )
        }
        )}
        </>
     );
}
 
export default CartCard;