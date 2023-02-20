import { Link } from 'react-router-dom'

import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio'
import Image from 'react-bootstrap/Image'
import imgCat1 from '../assets/images/products/cat1.png'
import imgCat2 from '../assets/images/products/cat2.png'
import imgCat3 from '../assets/images/products/cat3.png'
import imgCat4 from '../assets/images/products/cat4.png'
import imgCat5 from '../assets/images/products/cat5.png'
import imgCat6 from '../assets/images/products/cat6.png'
import imgCat7 from '../assets/images/products/cat7.png'
import imgCat8 from '../assets/images/products/cat8.png'
import imgCat9 from '../assets/images/products/cat9.png'
import imgCat10 from '../assets/images/products/cat10.png'

const Home = () => {
    return ( 
        <Container fluid className="my-3">
            <Row className="g-0">
                <Col md={6} className='index-item'>
                        
                    <Ratio aspectRatio={50}>
                        <>
                        <Image rounded fluid src={imgCat4} className="p-2 index-picture" alt="fogonero"/>
                        <Link to='/store' state={{category: 4}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">FOGONEROS</p>
                        </Link>
                        </>
                    </Ratio>
                        
                </Col>
                <Col xs={6} md={3} className='index-item'>
                    <Ratio aspectRatio={'1x1'}>
                        <>
                        <Image rounded fluid src={imgCat5} className="p-2 index-picture" alt="asadores"/>
                        <Link to='/store' state={{category: 5}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">ASADORES</p>
                        </Link>
                        </>
                    </Ratio>
                </Col>
                <Col xs={6} md={3} className='index-item'>
                    <Ratio aspectRatio={'1x1'}>
                        <>
                        <Image rounded fluid src={imgCat3} className="p-2 index-picture" alt="cruces"/>
                        <Link to='/store' state={{category: 3}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">CRUCES</p>
                        </Link>
                        </>
                    </Ratio>
                </Col>
            </Row>
            <Row className="g-0">
                <Col xs={6} md={3} className='index-item'>
                    <Ratio aspectRatio={'1x1'}>
                        <>
                        <Image rounded fluid src={imgCat6} className="p-2 index-picture" alt="discos"/>
                        <Link to='/store' state={{category: 6}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">DISCOS</p>
                        </Link>
                        </>
                    </Ratio>
                </Col>
                <Col xs={6} md={3} className='index-item'>
                    <Ratio aspectRatio={'1x1'}>
                        <>
                        <Image rounded fluid src={imgCat1} className="p-2 index-picture" alt="leñeros"/>
                        <Link to='/store' state={{category: 1}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">LEÑEROS</p>
                        </Link>
                        </>
                    </Ratio>
                </Col>
                <Col md={6} className='index-item'>
                    <Ratio aspectRatio={50}>
                        <>
                        <Image rounded fluid src={imgCat2} className="p-2 index-picture" alt="parrillas"/>
                        <Link to='/store' state={{category: 2}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">PARRILLAS</p>
                        </Link>
                        </>
                    </Ratio>
                </Col>
            </Row>
            <Row className="g-0">
                <Col md={6} className='index-item'>
                    <Ratio aspectRatio={50}>
                        <>
                        <Image rounded fluid src={imgCat8} className="p-2 index-picture" alt="tablas"/>
                        <Link to='/store' state={{category: 8}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">TABLAS</p>
                        </Link>
                        </>
                    </Ratio>
                </Col>
                <Col md={6} className='index-item'>
                    <Ratio aspectRatio={50}>
                        <>
                        <Image rounded fluid src={imgCat7} className="p-2 index-picture" alt="accesorios"/>
                        <Link to='/store' state={{category: 7}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">ACCESORIOS</p>
                        </Link>
                        </>
                    </Ratio>
                </Col>
            </Row>
            <Row className="g-0">
                <Col md={6} className='index-item'>
                    <Ratio aspectRatio={50}>
                        <>
                        <Image rounded fluid src={imgCat9} className="p-2 index-picture" alt="alquileres"/>
                        <Link to='/store' state={{category: 9}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">ALQUILERES</p>
                        </Link>
                        </>
                    </Ratio>
                </Col>
                <Col md={6} className='index-item'>
                    <Ratio aspectRatio={50}>
                        <>
                        <Image rounded fluid src={imgCat10} className="p-2 index-picture" alt="grabados"/>
                        <Link to='/store' state={{category: 10}}>
                        <p className="position-absolute bottom-0 start-0 p-4 text-light fs-2 index-title">GRABADOS</p>
                        </Link>
                        </>
                    </Ratio>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Home;