import MainNavbar from "../components/MainNavbar.jsx";
//import ContactForm from "../components/ContactForm.jsx";
import Footer from "../components/Footer.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AboutusImage from "../assets/images/aboutus.png";

const Contact = () => {
    return (
        <>
            <MainNavbar current={"aboutus"}/>
            <div style={{paddingTop: '100px'}}>
            <div className="bg-light text-dark" style={{ padding: "5em 0" }}>
                <Container className="px-3 mx-auto">
                    <Row className="justify-content-center">
                    <Col md={12} lg={10} className="px-3">
                        <Row className="rounded shadow bg-white">
                        <Col md={5} className="px-0">
                            <Image
                            fluid
                            src={AboutusImage}
                            className="w-100 h-100 rounded-start"
                            alt="aboutus-image"
                            style={{ objectFit: "cover" }}
                            />
                        </Col>
                        <Col md={7} className="p-4 p-md-5">
                                <h1 className="index-title">Nuestra Historia</h1>
                                <h5>"Iván y Germán, hermanos creadores de la Pyme familiar TITABÉ. 
                                    La misma está enfocada en la calidad de los productos que ofrece y la atención personalizada, teniendo como objetivo fundamental lograr la total satisfacción del cliente. 
                                    Trabajamos con seriedad y abocamos nuestro entusiasmo y labor creando valor compartido que beneficie a la sociedad por medio de nuestras acciones en el trabajo diario.
                                    La innovación, el uso de recursos disponibles y la aplicación de nuevas tecnologías convergen en la presentación de los productos que fabricamos. 
                                    A través de nuestro Slogan “La solución para el asador”, hacemos foco en brindarle a nuestros clientes un producto/servicio para reunir a los más queridos a la pasión que nos une, hacer comidas asadas."
                                    </h5>
                        </Col>
                        </Row>
                    </Col>
                    </Row>
                </Container>
                </div>
            </div>
            <Footer/>
        </>
     );
}

export default Contact;