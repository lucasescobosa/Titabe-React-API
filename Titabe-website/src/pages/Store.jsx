import { useState, useMemo, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import axios from "axios";

import StoreCard from "../components/StoreCard.jsx";
import SideBar from "../components/SideBar.jsx";
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

    const location = useLocation()

    const [items, setItems] = useState([])
    const [selectedCategory, setSelectedCategory] = useState()

    useEffect (() => {
        axios.get('http://localhost:3001/api/store/')
        .then((response)=> {
            console.log(response)
            setItems(response.data)
        })
        .catch((e)=>console.log(e))

        {(location.state)?setSelectedCategory(location.state.category):null}
        
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
                        <SideBar handleFilters={handleFilters} selectedCategory={selectedCategory}/>
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