import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';

const SideBarCanvas = ({handleFilters, selectedCategory}) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  
    return (
        <>
        <Button variant="secondary" className="d-lg-none" onClick={handleShow}>
            Filtrar
        </Button>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Categorías</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
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
          </Offcanvas.Body>
        </Offcanvas>
        </>
    );
  }
 
export default SideBarCanvas;