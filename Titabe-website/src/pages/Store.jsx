import { useState, useMemo, useEffect } from "react";
import StoreCard from "../components/StoreCard.jsx";
import axios from "axios";
import { useLocation } from 'react-router-dom'

import MainNavbar from "../components/MainNavbar.jsx";
import Footer from "../components/Footer.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import Figure from 'react-bootstrap/Figure';
import Card from 'react-bootstrap/Card';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Collapse from 'react-bootstrap/Collapse';


const Store = () => {

    const [items, setItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()

    useEffect (() => {
        axios.get('http://localhost:3001/api/store/')
        .then((response)=> {
            console.log(response)
            setItems(response.data)
        })
        .catch((e)=>console.log(e))

    }, [])

    const getFilteredItems = () => {
        if(!selectedCategory){
            return items
        }
        return items.filter((item) => item.subcategory_id === selectedCategory)
    }

    var filteredItems = useMemo(getFilteredItems, [selectedCategory, items])

    const handleFilters = (event) => {
        event.preventDefault()
        setSelectedCategory(event.target.value)
    }

    const [show, setShow] = useState(false);
    const [open, setOpen] = useState(true);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return ( 
        <>
        <MainNavbar current={"store"}/>
        <div style={{paddingTop: '100px'}}>
            <Container fluid className="bg-light">
                <Row className="mx-5">
                    <Col xs={12} lg={3} className='pt-4 px-4 border-end border-secondary-subtle'>
                        <p className="fs-4 fw-bold">Categorias</p>
                        <hr className="text-secondary"/>
                        <p className="fs-5 fw-semibold">Productos</p>
                        <ul className="list-unstyled mb-4">
                            { selectedCategory===1 
                            ?<li className="my-2 text-warning" value={1} onClick={handleFilters} style={{cursor: 'pointer'}}>Leñeros/Braseros/Diablitos</li>
                            :<li className="my-2 text-secondary" value={1} onClick={handleFilters} style={{cursor: 'pointer'}}>Leñeros/Braseros/Diablitos</li>
                            }
                            { selectedCategory===2 
                            ?<li className="my-2 text-warning" value={2} onClick={handleFilters} style={{cursor: 'pointer'}}>Parrillas</li>
                            :<li className="my-2 text-secondary" value={2} onClick={handleFilters} style={{cursor: 'pointer'}}>Parrillas</li>
                            }
                            { selectedCategory===3 
                            ?<li className="my-2 text-warning" value={3} onClick={handleFilters} style={{cursor: 'pointer'}}>A la Cruz</li>
                            :<li className="my-2 text-secondary" value={3} onClick={handleFilters} style={{cursor: 'pointer'}}>A la Cruz</li>
                            }
                            { selectedCategory===4 
                            ?<li className="my-2 text-warning" value={4} onClick={handleFilters} style={{cursor: 'pointer'}}>Fogoneros</li>
                            :<li className="my-2 text-secondary" value={4} onClick={handleFilters} style={{cursor: 'pointer'}}>Fogoneros</li>
                            }
                            { selectedCategory===5 
                            ?<li className="my-2 text-warning" value={5} onClick={handleFilters} style={{cursor: 'pointer'}}>Asadores</li>
                            :<li className="my-2 text-secondary" value={5} onClick={handleFilters} style={{cursor: 'pointer'}}>Asadores</li>
                            }
                            { selectedCategory===6 
                            ?<li className="my-2 text-warning" value={6} onClick={handleFilters} style={{cursor: 'pointer'}}>Discos</li>
                            :<li className="my-2 text-secondary" value={6} onClick={handleFilters} style={{cursor: 'pointer'}}>Discos</li>
                            }
                            { selectedCategory===7 
                            ?<li className="my-2 text-warning" value={7} onClick={handleFilters} style={{cursor: 'pointer'}}>Accesorios</li>
                            :<li className="my-2 text-secondary" value={7} onClick={handleFilters} style={{cursor: 'pointer'}}>Accesorios</li>
                            }
                            { selectedCategory===8 
                            ?<li className="my-2 text-warning" value={8} onClick={handleFilters} style={{cursor: 'pointer'}}>Tablas</li>
                            :<li className="my-2 text-secondary" value={8} onClick={handleFilters} style={{cursor: 'pointer'}}>Tablas</li>
                            }
                        </ul>
                        <hr className="text-secondary"/>
                        <p className="fs-5 fw-semibold">Servicios</p>
                        <ul className="list-unstyled text-start text-secondary">
                            { selectedCategory===9 
                            ?<li className="my-2 text-warning" value={9} onClick={handleFilters} style={{cursor: 'pointer'}}>Alquileres</li>
                            :<li className="my-2 text-secondary" value={9} onClick={handleFilters} style={{cursor: 'pointer'}}>Alquileres</li>
                            }
                            { selectedCategory===10 
                            ?<li className="my-2 text-warning" value={10} onClick={handleFilters} style={{cursor: 'pointer'}}>Grabados</li>
                            :<li className="my-2 text-secondary" value={10} onClick={handleFilters} style={{cursor: 'pointer'}}>Grabados</li>
                            }
                        </ul>
                    </Col>
                    <Col xs={12} lg={9} className='ps-2'>
                        <div className="d-flex justify-content-between pt-3 pb-4 px-4 border-bottom border-secondary-subtle">
                            <Button variant="secondary" className="" onClick={handleShow}>
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
                        <Row className="p-4">
                        {filteredItems.map((item, i) => (<StoreCard {...item} key={i}/>))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <Footer/>
        </>
     );
}
 
export default Store;