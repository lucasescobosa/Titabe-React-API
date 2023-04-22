import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserContext from '../components/UserContext'
import RecoveryPassword from '../components/RecoveryPassword.jsx'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import FormImage from "../assets/images/main-background.jpg";
import { useContext, useState } from "react";

const LoginForm = () => {
  let navigate = useNavigate();


    const {setCurrentUser} = useContext(UserContext)

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .max(50, "límite de longitud")
        .email("Debe ingresar un email válido")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .required("Este campo es obligatorio"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(`${process.env.SERVER_URI}/api/users/login`, values)
        .then((response) => {
          if (!response.data.error) {
            alert("Inicio de sesión correcto!");
            localStorage.setItem("accessToken", response.data.token);
                setCurrentUser({
                    email: response.data.email,
                    fullName: response.data.fullName, 
                    role_id: response.data.role_id, 
                    logged: true
                });
            navigate("/");
          }
        })
        .catch((e) => {
          console.log(e);
          if (e.response.data.error === "invalid credentials") {
            alert("Credenciales inválidas");
          }
        });
    },
  });

  return (
    <div className="bg-light text-dark" style={{ padding: "5em 0" }}>
      <Container className="px-3 mx-auto">
        <Row className="justify-content-center">
          <Col md={12} lg={10} className="px-3">
            <Row className="rounded shadow bg-white">
              <Col md={5} className="px-0">
                <Image
                  fluid
                  src={FormImage}
                  className="w-100 h-100 rounded-start"
                  alt="login-image"
                  style={{ objectFit: "cover" }}
                />
              </Col>
              <Col md={7} className="p-4 p-md-5">

                  <div className="text-start">
                    <h3 className="mb-4">INICIA SESIÓN</h3>
                  </div>

                <Form noValidate onSubmit={formik.handleSubmit}>
                  <Form.Group className="mt-3" controlId="loginInputEmail">
                    <Form.Label className="fw-bold">Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="ejemplo@gmail.com"
                      name="email"
                      value={formik.values.email || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.email && !!formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mt-3" controlId="loginInputPassword">
                    <Form.Label className="fw-bold">Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="********"
                      name="password"
                      value={formik.values.password || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.password && !!formik.errors.password
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <div className="mt-3 d-flex">
                    <Form.Group
                      className="w-50 text-start"
                      controlId="loginRemember"
                    >
                      <Form.Check
                        type="checkbox"
                        label="Recuérdame"
                        className="text-secondary"
                      />
                    </Form.Group>
                    <div className="w-50 text-end">
                      <RecoveryPassword/>
                    </div>
                  </div>
                  <Button
                    variant="warning"
                    type="submit"
                    className="w-100 mt-3"
                  >
                    INICIAR SESIÓN
                  </Button>
                  <p className="text-center text-secondary mt-3 mb-0">
                    No tienes cuenta?
                    <Link
                      to={"/register"}
                      className="text-decoration-none text-secondary fw-bold"
                    >
                      {" "}
                      Registrate!
                    </Link>
                  </p>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
