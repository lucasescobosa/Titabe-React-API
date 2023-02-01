import MainNavbar from "../components/MainNavbar.jsx";
import CreateForm from "../components/CreateForm.jsx";
import Footer from "../components/Footer.jsx";

const Create = () => {
    return (
        <>
            <MainNavbar current={""}/>
            <div style={{paddingTop: '100px'}}>
                <CreateForm/>
            </div>
            <Footer/>
        </>
     );
}

export default Create;