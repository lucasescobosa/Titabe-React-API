import { useState, useMemo, useEffect } from "react";
import { useLocation } from 'react-router-dom'
import axios from "axios";

import StoreCard from "../components/StoreCard.jsx";
import SideBar from "../components/SideBar.jsx";
import SideBarCanvas from "../components/SidebarCanvas.jsx";
import MainNavbar from "../components/MainNavbar.jsx";
import Footer from "../components/Footer.jsx";
import { useFilters } from "../hooks/useFilters.js";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';



const Store = () => {

    const location = useLocation()

    const [items, setItems] = useState([])
    const { filters, setFilters, filterItems } = useFilters()

    const [selectedCategory, setSelectedCategory] = useState()
    const [searchFilter, setSearchFilter] = useState()

    useEffect (() => {
        axios.get(`${process.env.SERVER_URI}/api/store/`)
        .then((response)=> {
            setItems(response.data)
        })
        .catch((e)=>console.log(e))  
    }, [])

    
    const filteredItems = filterItems(items)

    useEffect (()=> {
        if(location.state){
            
            if(location.state.category){
                setFilters({...filters, category: location.state.category, search: null})}
                window.history.replaceState({}, document.title)
            
            if(location.state.filter){
                setFilters({...filters, category: null, search: location.state.filter})}
                window.history.replaceState({}, document.title)
            }
            
    }, [location.state])

    return ( 
        <>
        <MainNavbar current={"store"}/>
            <div style={{paddingTop: '100px'}}>
                <Container fluid className="bg-light">
                    <Row className="mx-lg-5">
                        <SideBar/>
                        <Col xs={12} lg={9} className='ps-2'>
                            <div className="d-flex justify-content-between py-3 px-sm-4 border-bottom border-secondary-subtle">
                                <div>
                                <SideBarCanvas/>
                                </div>
                                <div className="d-flex flex-wrap align-items-center justify-content-end">
                                    <div><label htmlFor="filterSort" className="pe-2">Ordenar por:</label></div>
                                    <div>
                                        <Form onChange={(e)=>{setFilters({...filters, order: e.target.value})}}>
                                        <Form.Select size="sm" id="filterSort">
                                            <option value="offers">Ofertas</option>
                                            <option value="priceAsc">Precio: Menor a Mayor</option>
                                            <option value="priceDesc">Precio: Mayor a Menor</option>
                                        </Form.Select>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <Row className="p-4">
                                <StoreCard items={filteredItems}/>
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