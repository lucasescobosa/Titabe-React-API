import titabeLogo from '../assets/images/logowhite.png'
import { useCart } from "../hooks/useCart.js"

const Footer = () => {
    const { cart } = useCart()
    return ( 
        
        <div className="p-3 text-bg-dark">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
            <p className="col-md-4 mb-0 text-muted">&copy; 2022 TITABÉ - Todos los derechos reservados</p>
        
            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img className="bi me-2" width="80" aria-label="Bootstrap" src={titabeLogo} alt="logo"/>
            </a>
        
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Features</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Pricing</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
            </ul>
            </footer>
        </div>
     );
}
 
export default Footer;