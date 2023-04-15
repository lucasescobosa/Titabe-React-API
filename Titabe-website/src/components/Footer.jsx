import { useCart } from "../hooks/useCart.js"

const Footer = () => {
    return ( 
        
        <div className="p-3 text-bg-dark">
            <footer className="d-flex flex-wrap justify-content-between align-items-center pt-3 border-top border-secondary mx-auto" style={{maxWidth: '1600px'}}>
            <ul className="nav col-12 col-lg-4 justify-content-center mb-2 mb-lg-0">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Inicio</a></li>
                <li className="nav-item"><a href="/store" className="nav-link px-2 text-muted">Tienda</a></li>
                <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">Contacto</a></li>
                <li className="nav-item"><a href="/aboutus" className="nav-link px-2 text-muted">Nosotros</a></li>
                <li className="nav-item"><a href="faqs" className="nav-link px-2 text-muted">Ayuda</a></li>
            </ul>
        
            <a href="/" className="col-12 col-lg-4 text-decoration-none mb-2 mb-lg-0">
                <h4 className="index-slogan my-auto">~ LA SOLUCIÓN PARA EL ASADOR ~</h4>
            </a>
            <p className="col-12 col-lg-4 mb-0 text-muted text-center mb-2 mb-lg-0">&copy; 2023 TITABÉ - Todos los derechos reservados</p>
        
            </footer>
        </div>
     );
}
 
export default Footer;