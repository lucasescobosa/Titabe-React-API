import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// Modal para recuperar contraseña
const RecoveryPassword = () => {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const [email, setEmail] = useState();
    const handleSubmit1 = (event) => {
        event.preventDefault();
        setEmail(event.target.elements.email.value)
        setShow1(false);
        setShow2(true);
    }
    const handleSubmit2 = (event) => {
        event.preventDefault();
        console.log(event.target.elements.code.value)
        setShow2(false);
        setShow3(true);
    }
    const handleSubmit3 = (event) => {
        event.preventDefault();
        console.log(event.target.elements.password.value)
        setShow3(false);
    }
    return (
        <>
        <Button variant="link"
                        className="text-decoration-none text-secondary"
                        onClick={()=>{setShow1(true)}}
                      >
                        ¿Olvidaste tu clave?
        </Button>
        {/* Modal send code*/}
        <Modal
            show={show1} onHide={()=>setShow1(false)}
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Recuperá tu clave
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleSubmit1}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingresa tu correo:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name='email'
                    autoFocus
                />
                </Form.Group>
                <Button variant="warning" type="submit" style={{float: 'right', marginTop: '10px'}}>
                    Enviar
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
        {/* Modal verify code*/}
        <Modal
            show={show2} onHide={()=>setShow2(false)}
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Recuperá tu clave
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleSubmit2}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingresá el código recibido en {email}:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="1234"
                    name='code'
                    autoFocus
                />
                </Form.Group>
                <Button variant="warning" type="submit" style={{float: 'right', marginTop: '10px'}}>
                    Enviar
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
        {/* Modal change password*/}
        <Modal
            show={show3} onHide={()=>setShow3(false)}
            centered
        >
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Recuperá tu clave
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={handleSubmit3}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Ingrese su nueva contraseña:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="********"
                    name='password'
                    autoFocus
                />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Repita la contraseña:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="********"
                    name='passwordCheck'
                />
                </Form.Group>
                <Button variant="warning" type="submit" style={{float: 'right', marginTop: '10px'}}>
                    Enviar
                </Button>
            </Form>
            </Modal.Body>
        </Modal>
        </>
  )
}
export default RecoveryPassword;