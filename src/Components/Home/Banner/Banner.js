import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/revslider/cardealer-slider2/8515e-6a297-car-02.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Drive Fast</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cardealer.potenzaglobalsolutions.com/wp-content/uploads/revslider/cardealer-slider2/58762-a34db-car-01.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h1>Make The Track</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
