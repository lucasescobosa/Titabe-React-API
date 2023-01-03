import MainNavbar from "../components/MainNavbar.jsx";
import LoginForm from "../components/LoginForm.jsx";
import Footer from "../components/Footer.jsx";

const Login = () => {
    return (
        <>
            <MainNavbar current={""}/>
            <div style={{paddingTop: '100px'}}>
                <LoginForm/>
            </div>
            <Footer/>
        </>
     );
}

export default Login;