import MainNavbar from "../components/MainNavbar.jsx";
import Banner from "../components/Banner.jsx";
import Index from "../components/Index.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <>
            <MainNavbar current={"home"}/>
            <div className="d-flex flex-align-center justify-content-center flex-wrap" style={{paddingTop: '100px'}}>
                <Banner/>
                <div className="w-100">
                    <h1 className="index-slogan pt-5">~ LA SOLUCIÓN PARA EL ASADOR ~</h1>
                </div>
                <Index/>
            </div>
            <Footer/>
        </>
     );
}

export default Home;