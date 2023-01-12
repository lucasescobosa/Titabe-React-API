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
import InputGroup from 'react-bootstrap/InputGroup';
import FormImage from "../assets/images/fire.jpg";

const ItemForm = () => {

  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      descriptionShort: "",
      descriptionLong: "",
      price: "",
      discount: 0,
      stock: 0
    },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .min(5, "Escriba un nombre válido")
        .max(45, "Límite de longitud")
        .required("Este campo es obligatorio"),
        descriptionShort: Yup.string()
        .min(5, "Escriba una descripción válida")
        .max(45, "Límite de longitud")
        .required("Este campo es obligatorio"),
        descriptionLong: Yup.string()
        .min(5, "Escriba una descripción válida")
        .max(500, "Límite de longitud")
        .required("Este campo es obligatorio"),
      price: Yup.number().required("Este campo es obligatorio"),
      discount: Yup.number().required("Este campo es obligatorio"),
    }),

    onSubmit: (values) => {
      console.log(values);
      axios
        .post("http://localhost:3001/api/store/create", values)
        .then((response) => {
          console.log(response);
          if (response.data === "Successful") {
            alert("Producto correctamente creado!")
            navigate('/store')
          }
        })
        .catch((e) => {
            console.log(e)
            if(e.response.data.error === 'product already exist'){
                alert('El producto ya se encuentra creado')
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
                    <h3 className="mb-4">AGREGAR UN NUEVO ITEM</h3>
                  </div>
                </div>
                <Form noValidate onSubmit={formik.handleSubmit}>
                  <FloatingLabel
                    className="mb-3"
                    controlId="createInputName"
                    label="Nombre del producto"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Nombre del producto"
                      name="name"
                      value={formik.values.name || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.name && !!formik.errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.name}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel
                    className="mb-3"
                    controlId="createInputDescriptionS"
                    label="Descripción breve"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Descripción breve"
                      name="descriptionShort"
                      value={formik.values.descriptionShort || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.descriptionShort && !!formik.errors.descriptionShort}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.descriptionShort}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <FloatingLabel
                    className="mb-3"
                    controlId="createInputDescriptionL"
                    label="Descripción detallada"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Descripción detallada"
                      name="descriptionLong"
                      style={{ height: '100px' }}
                      value={formik.values.descriptionLong || ""}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isInvalid={formik.touched.descriptionLong && !!formik.errors.descriptionLong}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.descriptionLong}
                    </Form.Control.Feedback>
                  </FloatingLabel>

                  <Row className="g-2">
                    <Col md>
                        <InputGroup className="mb-3">
                        <InputGroup.Text>$</InputGroup.Text>
                        <FloatingLabel
                           
                            controlId="registerInputPrice"
                            label="Precio original"
                            >
                            
                            <Form.Control
                            type="number"
                            placeholder="Precio original"
                            name="price"
                            value={formik.values.price || ""}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.price &&
                                !!formik.errors.price
                            }
                            />
                            <Form.Control.Feedback type="invalid">
                            {formik.errors.price}
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        </InputGroup>
                    </Col>
                    <Col md>
                        <InputGroup className="mb-3">
                        <FloatingLabel
                   
                            controlId="registerInputDiscount"
                            label="Descuento"
                        >
                            <Form.Control
                            type="number"
                            placeholder="Descuento"
                            name="discount"
                            value={formik.values.discount || ""}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.discount &&
                                !!formik.errors.discount
                            }
                            />
                            <Form.Control.Feedback type="invalid">
                            {formik.errors.discount}
                            </Form.Control.Feedback>
                        </FloatingLabel>
                        <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                    </Col>
                  </Row>
                  <Row className="g-2">
                    <Col md>
                        <FloatingLabel
                            className="mb-3"
                            controlId="registerSelectCategory"
                            label="Categoría"
                        >
                            <Form.Select
                            name="category"
                            value={formik.values.category || ""}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.category &&
                                !!formik.errors.category
                            }
                            >
                                <option selected value="1">Productos</option>
                                <option value="2">Servicios</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid">
                            {formik.errors.category}
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Col>
                    <Col md>
                        <FloatingLabel
                            className="mb-3"
                            controlId="registerSelectSubcategory"
                            label="Subcategoría"
                        >
                            <Form.Select
                            name="subcategory"
                            value={formik.values.subcategory || ""}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.subcategory &&
                                !!formik.errors.subcategory
                            }
                            >
                                <option selected value="1">Leñeros/Braseros/Diablitos</option>
                                <option value="2">Parrillas</option>
                                <option value="3">A la cruz</option>
                                <option value="4">Fogoneros</option>
                                <option value="5">Asadores</option>
                                <option value="6">Discos</option>
                                <option value="7">Accesorios</option>
                                <option value="8">Tablas</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    </Row>
                    <Form.Check 
                    className="mb-4"
                        type="switch"
                        id="createSwitchStock"
                        label="Producto en stock"
                        name="stock"
                    />
                    <Row className="g-2">
                    <Col md>
                        <Button
                            variant="warning"
                            type="submit"
                            className="w-100"
                        >
                            ENVIAR
                        </Button>
                    </Col>
                    <Col md>
                    <Button
                    variant="danger"
                    type="reset"
                    className="w-100"
                  >
                    BORRAR
                  </Button>
                    </Col>
                    </Row>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ItemForm;
