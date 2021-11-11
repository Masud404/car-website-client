import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import car from '../../images/side-img_01.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            {/* Top banner section */}
            <Container>
                <Row className="align-items-center pb-4">
                    <Col sm={12} md={6} className="py-5">
                        <h1 className="banner-header">ROTORS</h1>
                        <h1 className="banner-text">Best & Luxury Cars</h1>
                        <h1 className="banner-text">Worlds Best Company</h1>
                        <button className="view-cars-button mt-5">VIEW CARS</button>
                        <button className="purchase-cars-button ms-4">PURCHASE CARS</button>
                    </Col>
                    <Col sm={12} md={6} className="banner-text">
                        <img className="img-fluid animate__backInRight side-car" src={car} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;