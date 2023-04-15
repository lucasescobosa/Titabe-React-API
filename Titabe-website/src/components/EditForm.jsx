import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup';
import FormImage from "../assets/images/fire.jpg";
import { useState, useEffect } from "react";

const EditForm = ({initialValues}) => {

  let navigate = useNavigate();
  const {id} = useParams();

  const selectCategories = [
    {value: 1, label: 'Productos'},
    {value: 2, label: 'Servicios'},
  ]
  
  const selectSubcategories1 = [
    {value: 1, label: 'Leñeros/Braseros/Diablitos'},
    {value: 2, label: 'Parrillas'},
    {value: 3, label: 'A la cruz'},
    {value: 4, label: 'Fogoneros'},
    {value: 5, label: 'Asadores'},
    {value: 6, label: 'Discos'},
    {value: 7, label: 'Accesorios'},
    {value: 8, label: 'Tablas'},
  ]
  
  const selectSubcategories2 = [
    {value: 9, label: 'Alquileres'},
    {value: 10, label: 'Grabados'},
  ]
  
  const [selectSubcategories, setSelectSubcategories] = useState()

  const changeSelectOption = (value) => {
    let options = []
    if(value == 1){
      options = selectSubcategories1.map((option,i) => (
        <option value={option.value} key={i}>{option.label}</option>
        ))
    }else {
      options = selectSubcategories2.map((option,i) => (
        <option value={option.value} key={i}>{option.label}</option>
        ))
    }
    return options
  }

  useEffect(()=>{setSelectSubcategories(changeSelectOption(1))},[])

  const formik = useFormik({
    initialValues: initialValues,
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
      axios
        .put(`${process.env.SERVER_URI}/api/store/edit/${id}`, values)
        .then((response) => {
          console.log(response);
          if (response.data === "Successful") {
            alert("Producto correctamente modificado!")
            navigate('/store')
          }
        })
        .catch((e) => {
            console.log(e)
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
                    <h3 className="mb-4">EDITAR PRODUCTO</h3>
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
                      value={formik.values.name}
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
                      value={formik.values.descriptionShort}
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
                      value={formik.values.descriptionLong}
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
                            value={formik.values.price}
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
                            value={formik.values.discount}
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
                            value={formik.values.category}
                            onChange={e => {
                              formik.handleChange(e);
                              setSelectSubcategories(changeSelectOption(e.target.value))}
                            }
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.category &&
                                !!formik.errors.category
                            }
                            >
                                {selectCategories.map((option,i) => (
                                  <option value={option.value} key={i}>{option.label}</option>
                                ))}
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
                            value={formik.values.subcategory}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            isInvalid={
                                formik.touched.subcategory &&
                                !!formik.errors.subcategory
                            }
                            
                            >
                             {  
                                  selectSubcategories
                                }

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
                        defaultChecked={formik.values.stock}
                        onChange={formik.handleChange}
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
                    onClick={()=> formik.resetForm() }
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

export default EditForm;
