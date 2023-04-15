import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormImage from "../assets/images/main-background.jpg";

const RegisterForm = () => {

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      password: "",
      password2: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string()
        .min(3, "Escriba un nombre válido")
        .max(50, "Límite de longitud")
        .required("Este campo es obligatorio"),
      email: Yup.string()
        .max(50, "límite de longitud")
        .email("Debe ingresar un email válido")
        .required("Este campo es obligatorio"),
      phoneNumber: Yup.number().required("Este campo es obligatorio"),
      password: Yup.string()
        .matches(
          /(?=.*[a-z])((?=.*[A-Z])|(?=.*\d)).{8,}/,
          "No cumple las condiciones de seguridad"
        )
        .required("Este campo es obligatorio"),
      password2: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password"), null], "Las contraseñas no coinciden"),
    }),
    onSubmit: (values) => {
      console.log(values);
      axios
        .post(`${process.env.SERVER_URI}/api/users/register`, values)
        .then((response) => {
          console.log(response);
          if (response.data === "Successful") {
            alert("Usuario correctamente registrado!")
            navigate('/login')
          }
        })
        .catch((e) => {
            console.log(e)
            if(e.response.data.error === 'user already exist'){
                alert('El email ingresado ya se encuentra registrado')
            }
        }
        );
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
                    <h3 className="mb-4">REGISTRATE</h3>
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
                  <FloatingLabel
                    className="mt-3"
                    controlId="registerInputName"
                    label="Nombre Completo"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Nombre Completo"
                      name="fullName"
                      value={formik.values.fullName || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.fullName && !!formik.errors.fullName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.fullName}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  <FloatingLabel
                    className="mt-3"
                    controlId="registerInputEmail"
                    label="Email"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={formik.values.email || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.email && !!formik.errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.email}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  <FloatingLabel
                    className="mt-3"
                    controlId="registerInputPhone"
                    label="Teléfono/Celular"
                  >
                    <Form.Control
                      type="tel"
                      placeholder="Teléfono/Celular"
                      name="phoneNumber"
                      value={formik.values.phoneNumber || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.phoneNumber &&
                        !!formik.errors.phoneNumber
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.phoneNumber}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  <FloatingLabel
                    className="mt-3"
                    controlId="registerInputPassword"
                    label="Contraseña"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
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
                  </FloatingLabel>
                  <Form.Text id="registerInputPassword" muted className="ms-1">
                    8-20 caracteres, debe incluir al menos una mayúscula o
                    número.
                  </Form.Text>
                  <FloatingLabel
                    className="mt-3"
                    controlId="registerInputPassword2"
                    label="Confirmá tu contraseña"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Contraseña2"
                      name="password2"
                      value={formik.values.password2 || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={
                        formik.touched.password2 && !!formik.errors.password2
                      }
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.password2}
                    </Form.Control.Feedback>
                  </FloatingLabel>
                  {/*<Form.Select className="mt-3">
                        <option>Rol de usuario</option>
                        <option value="1">Desarrollador</option>
                        <option value="2">Administrador</option>
                        <option value="3">Usuario</option>
                        </Form.Select>*/}
                  <Button
                    variant="warning"
                    type="submit"
                    className="w-100 mt-3"
                  >
                    REGISTRARSE
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegisterForm;
