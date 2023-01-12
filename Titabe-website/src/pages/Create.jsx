import MainNavbar from "../components/MainNavbar.jsx";
import ItemForm from "../components/ItemForm.jsx";
import Footer from "../components/Footer.jsx";

const Create = () => {
    return (
        <>
            <MainNavbar current={""}/>
            <div style={{paddingTop: '100px'}}>
                <ItemForm/>
            </div>
            <Footer/>
        </>
     );
}

export default Create;