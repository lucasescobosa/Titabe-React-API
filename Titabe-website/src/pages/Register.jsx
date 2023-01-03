import MainNavbar from "../components/MainNavbar.jsx";
import RegisterForm from "../components/RegisterForm.jsx";
import Footer from "../components/Footer.jsx";

const Register = () => {
    return (
        <>
            <MainNavbar current={""}/>
            <div style={{paddingTop: '100px'}}>
                <RegisterForm/>
            </div>
            <Footer/>
        </>
     );
}

export default Register;