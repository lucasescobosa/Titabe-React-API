import Carousel from 'react-bootstrap/Carousel';
import bannerBlue from '../assets/images/banner-blue.png'
import banner1 from '../assets/images/banner-1.png'
import banner2 from '../assets/images/banner-2.png'
import banner3 from '../assets/images/banner-3.png'

const Banner = () => {
  return (
    <Carousel className='d-block ' style={{maxWidth: '1600px'}}>
      <Carousel.Item>
        <img
          className="index-banner-img w-100"
          src={banner1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="index-banner-img w-100"
          src={banner2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="index-banner-img w-100"
          src={banner3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
