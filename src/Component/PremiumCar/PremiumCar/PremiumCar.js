import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './PremiumCar.css'
import specail from '../../../images/special/special_3.jpg'
import specail2 from '../../../images/special/special_07.jpg'
import partner from '../../../images/special/3-manu_default.jpg'
import partner1 from '../../../images/special/4-manu_default.jpg'
import partner2 from '../../../images/special/5-manu_default.jpg'
import partner3 from '../../../images/special/7-manu_default.jpg'

const PremiumCar = () => {
    return (
        // premium section
        <div className="my-5 py-5">
            <Container>
                <Row className="mb-5 pb-5">
                    <h3 className="fw-bold text-secondary text-center">Our Partners</h3>
                    <Col sm={2} md={2}>
                        <img src={partner} alt="" />
                    </Col>
                    <Col sm={2} md={2}>
                        <img src={partner1} alt="" />
                    </Col>
                    <Col sm={2} md={2}>
                        <img src={partner2} alt="" />
                    </Col>
                    <Col sm={2} md={2}>
                        <img src={partner3} alt="" />
                    </Col>
                    <Col sm={2} md={2}>
                        <img src={partner} alt="" />
                    </Col>
                    <Col sm={2} md={2}>
                        <img src={partner2} alt="" />
                    </Col>
                </Row>
                {/* specail offer section */}
                <Row>
                    <Col sm={12} md={6}>
                        <img className="img-fluid specail" src={specail} alt="" />
                    </Col>

                    <Col sm={12} md={6} className="specail-text text-center">
                        <h2 className="fw-bold text-secondary">We provide <br /> premium car with <br /> high quality</h2>
                        <p className="fw-bold text-danger mt-5">certificated by international</p><br />
                        <small className="fw-bold text-secondary">Our company was built by trust and reputation. We know how to make our customers love us by our high quality products with affordable prices. We promise to make you have the interesting experiences.</small><br></br>
                        <button className="btn btn-danger mt-5 fw-bold">Details</button>
                    </Col>
                </Row>
                {/* specail offer section */}
                <Row className="mt-5 pt-5">
                    <Col sm={12} md={6} className="customer-offer-text text-center">
                        <h2 className="fw-bold text-secondary">OUR <br /> Specaial Summer <br /> Offer</h2>
                        <p className="fw-bold text-danger mt-4">Summer Offer</p><br />
                        <small className="fw-bold text-secondary">Our company was built by trust and reputation. We know how to make our customers love us by our high quality products with affordable prices. We promise to make you have the interesting experiences.</small><br></br>
                        <button className="btn btn-danger mt-5 fw-bold">Buy Now</button>
                    </Col>
                    <Col sm={12} md={6}>
                        <img className="img-fluid customer-offer" src={specail2} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PremiumCar;