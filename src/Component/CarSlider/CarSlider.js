import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './CarSlider.css'
import slider1 from '../../images/slider/img_11.jpg'
import slider2 from '../../images/slider/img_12.jpg'
import slider3 from '../../images/slider/img_13.jpg'
import slider4 from '../../images/slider/img_16.jpg'
import slider5 from '../../images/slider/img_17.jpg'


const CarSlider = () => {
    return (
        <div className="my-5 py-5">
            <Carousel className="slider">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bold mb-5">Comming Soon...</h1>
                        <h3>Honda Accord Turbo</h3>
                        <p>The Honda Accord Turbo has a perfect blend of elegance and fun.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="fw-bold mb-5">Comming Soon...</h1>
                        <h3>Honda Civic Turbo</h3>
                        <p>The Honda Accord Turbo has a perfect blend of elegance and fun.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="fw-bold mb-5">Comming Soon...</h1>
                        <h3>Honda CR-V Turbo</h3>
                        <p>The Honda Accord Turbo has a perfect blend of elegance and fun.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="fw-bold mb-5">Comming Soon...</h1>
                        <h3>Nissan X-trail</h3>
                        <p>The Honda Accord Turbo has a perfect blend of elegance and fun.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider5}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="fw-bold mb-5">Comming Soon...</h1>
                        <h3>Honda CR-V Turbo</h3>
                        <p>The Honda Accord Turbo has a perfect blend of elegance and fun.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default CarSlider;