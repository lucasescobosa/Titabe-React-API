import Carousel from 'react-bootstrap/Carousel';
import bannerBlue from '../assets/images/banner-blue.png'

const Banner = () => {
  return (
    <Carousel className='d-none d-lg-block' /*style={{paddingTop: '83px'}}*/>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerBlue}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Primera publicidad</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerBlue}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Segunda publicidad</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bannerBlue}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Tercera publicidad</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
