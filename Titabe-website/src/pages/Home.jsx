import MainNavbar from "../components/MainNavbar.jsx";
import Banner from "../components/Banner.jsx";
import Index from "../components/Index.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <>
            <MainNavbar current={"home"}/>
            <div style={{paddingTop: '100px'}}>
                <Banner/>
                <Index/>
            </div>
            <Footer/>
        </>
     );
}

export default Home;