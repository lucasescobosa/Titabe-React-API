import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MainNavbar from "../components/MainNavbar.jsx";
import ItemForm from "../components/CreateForm.jsx";
import Footer from "../components/Footer.jsx";

const Edit = () => {

    const {id} = useParams();
    const [initialValues, setInitialValues] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect (() => {
        axios.get(`http://localhost:3001/api/store/detail/${id}`)
        .then((response)=> {
            console.log(response)
            setInitialValues({
                name: response.data.name,
                descriptionShort: response.data.descriptionShort,
                descriptionLong: response.data.descriptionLong,
                price: response.data.price,
                discount: (response.data.discount) ? response.data.discount : 0,
                stock: response.data.stock,
                category: response.data.subcategories.category_id,
                subcategory: response.data.subcategory_id
            })
            setIsLoaded(true)
        })
        .catch((e)=>console.log(e))
    }, [])

    
    return (
        <>
            <MainNavbar current={""}/>
            <div style={{paddingTop: '100px'}}>
                {isLoaded ? (<ItemForm initialValues={initialValues} title={'EDITAR UN PRODUCTO'}/>) : null }           
            </div>
            <Footer/>
        </>
     );
}

export default Edit;