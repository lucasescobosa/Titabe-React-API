import { useState, useEffect, useContext } from "react";
import UserContext from "../components/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './Detail.css'
import MainNavbar from "../components/MainNavbar.jsx";
import {LinkContainer} from 'react-router-bootstrap'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';

const Detail = () => {
    const {id} = useParams();
    let navigate = useNavigate();
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [item, setItem] = useState({
        id: null,
        name: null,
        price: 0,
        descriptionLong: '\n',
        products_images: [{main: null, name: null}],
        discount: null,
        offer: null,
        stock: null
    })

    let descriptionItems = item.descriptionLong.split('\n')

    const [mainImage, setMainImage] = useState(null)

    const [cuotas, setCuotas] = useState(6)

    useEffect (() => {
        axios.get(`http://localhost:3001/api/store/detail/${id}`)
        .then((response)=> {
            console.log(response)
            setItem(response.data)
            setMainImage(response.data.products_images[0].name)
        })
        .catch((e)=>console.log(e))
    }, [])

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handleDelete = () => {
        axios
          .delete(`http://localhost:3001/api/store/delete/${id}`)
          .then((response) => {
            console.log(response);
            if (response.data === "Successful") {
              alert("Producto correctamente eliminado!")
              navigate('/store')
            }
          })
          .catch((e) => {
              console.log(e)
          }
          );
      }

    return ( 
        <>
        <MainNavbar current={"store"}/>
        <div style={{paddingTop: '100px'}}>
            <div className="bg-light py-3">
            <Container className="bg-light text-dark my-5">
                <Card className="shadow border border-0">
                    <Row className="g-0">
                        <Col xs={12} md={6} className='border-end'>
                            <Carousel variant='dark' activeIndex={index} onSelect={handleSelect}>
                                {item.products_images.map((image, i)=>{ 
                                    return(
                                        <Carousel.Item key={i}>
                                            <img src={`http://localhost:3001/images/products/${image.name}`} id="main_product_image" width="100%"/>
                                        </Carousel.Item>
                                        )
                                })}
                            </Carousel>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="p-3 right-side">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/" className="link-warning">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="/store" className="link-warning">Store</Breadcrumb.Item>
                                    <Breadcrumb.Item href="/store" className="link-warning">Parrillas</Breadcrumb.Item>
                                </Breadcrumb>
                                <h1 className="detail-title mb-4">{item.name}</h1>
                                <div className="d-flex aligns-items-center justify-content-start border-start border-bottom p-2">
                                    <h1 className="detail-price text-warning">${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h1>
                                    <p className="ms-3 my-auto text-muted"><em>precio exclusivo via transferencia</em></p>
                                </div>
                                <div className="d-flex flex-column aligns-items-center justify-content-start border-start border-bottom p-2 my-3">
                                    <div>
                                        <h6><em>Comprá con tu tarjeta favorita en:</em></h6>
                                    </div>
                                    <div className="d-flex ">
                                    <Form.Select onChange={(e)=>{setCuotas(e.target.value)}} style={{width:'auto'}}>
                                    <option value="6">6</option>
                                    <option value="3">3</option>
                                    </Form.Select>
                                        <h4 className="m-auto mx-2">Cuotas sin interés de:</h4>
                                        <h2 className="detail-price my-auto">${(Math.round(item.price * 1.6 / cuotas)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</h2>
                                    </div>
                                </div>
                                <ul className="mt-4">
                                    {/*map descriptionlong*/}
                                </ul>
                                <div className="buttons d-flex flex-row mt-4 gap-2">
                                    <Button variant="outline-dark" className="w-50 p-2">Comprar ahora</Button>
                                    <Button variant="warning" className="w-50 p-2">Agregar al carrito</Button>
                                </div>
                                {(currentUser.role_id == 1 || currentUser.role_id == 2) ? (
                                    <div className="buttons d-flex flex-row mt-4 gap-2">
                                    <LinkContainer to={`/edit/${id}`}><Button variant="success" className="w-50 p-2">Editar</Button></LinkContainer>
                                    <Button variant="danger" className="w-50 p-2" onClick={handleDelete}>Eliminar</Button>
                                    </div>
                                    ) : (null)
                                }
                            </div>
                            <ul className="mt-4">
                                {descriptionItems.map((item, i) => {
                                    return(
                                        <li type='square' key={i} className="mt-2 pr-3 content detail-description">{item}</li>
                                    )
                                })}
                            </ul>
                        </Col>
                    </Row>
                </Card>
            </Container>
            </div>
        </div>
        </>
     );
}
 
export default Detail;