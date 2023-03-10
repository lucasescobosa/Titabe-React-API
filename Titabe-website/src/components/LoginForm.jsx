import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserContext from '../components/UserContext'

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import FormImage from "../assets/images/main-background.jpg";
import { useContext } from "react";

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
        .post("http://localhost:3001/api/users/login", values)
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
                <div className="d-flex justify-content-between">
                  <div className="w-60 text-start">
                    <h3 className="mb-4">INICIA SESIÓN</h3>
                  </div>
                  <div className="w-40 text-end ">
                    <a href="#" className="">
                      <svg
                        className="me-1 me-sm-2"
                        width="30px"
                        height="30px"
                        fill="gray"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                      </svg>
                    </a>
                    <a href="#" className="">
                      <svg
                        className="me-1 me-sm-2"
                        width="30px"
                        height="30px"
                        fill="gray"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                      </svg>
                    </a>
                  </div>
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
                      <Link
                        to={"#"}
                        className="text-decoration-none text-secondary"
                      >
                        ¿Olvidaste tu clave?
                      </Link>
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
