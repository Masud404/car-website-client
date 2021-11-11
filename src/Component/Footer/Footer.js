import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'
import logo from '../../images/logo_02_1x.png'

const Footer = () => {
    return (
        <div className="footer">
            <Container className="mt-5 pt-5">
                <Row className="pt-5">
                    <Col sm={12} md={4} className="text-center fw-bold">
                        <img className="mb-4" src={logo} alt="" /><br />
                        <small>Brake rotors in cars are circular metal discs connected to the wheels.The rotors' primary purpose is to slow down the turning of the car's wheels by utilizing friction. The brake rotor process occurs when calipers squeeze your car's brake pads together.</small><br />
                        <p className="mt-3 footer-text"><i class="fas fa-angle-right"></i> Rental Information</p>
                        <p className="footer-text"><i class="fas fa-angle-right"></i> F.A.Q</p>
                        <input className="footer-input" type="search" name="" placeholder="search" id="" /><i class="fas fa-search"></i>
                    </Col>
                    <Col sm={12} md={4} className="text-center">
                        <h4 className="fw-bold mb-4">Contact Us:</h4>
                        <h6 className="fw-bold"><i class="fas fa-map-marker-alt"></i> Main Office Address:</h6>
                        <small className="fw-bold footer-text">12/Rode,Fulbarigate</small><br />
                        <small className="fw-bold footer-text">Kuet,Khulna</small><br />
                        <small className="fw-bold footer-text">Bangladesh.</small><br />
                        <small className="fw-bold footer-text"><i class="fas fa-clock"></i> 8:00am-9:30pm</small><br />
                        <small className="fw-bold footer-text"><i class="fas fa-angle-right"></i> Other Office Locations</small><br />
                        <p className="mt-3 fw-bold footer-text"><i class="fas fa-envelope"></i> masud215502@gmail.com</p>
                        <p className="fw-bold footer-text"><i class="fas fa-phone"></i> +08801929039442</p>
                    </Col>
                    <Col sm={12} md={4} className="text-center fw-bold ">
                        <h4 className="mb-4 fw-bold">Information:</h4>
                        <p className="footer-text"><i class="fas fa-angle-right"></i> Cars Catalog</p>
                        <p className="footer-text"><i class="fas fa-angle-right"></i> F.A.Q.</p>
                        <p className="footer-text"><i class="fas fa-angle-right"></i> About Us</p>
                        <p className="footer-text"><i class="fas fa-angle-right"></i> Contact Us</p>
                        <p className="footer-text"><i class="fas fa-angle-right"></i> Help Center</p>
                        <p className="footer-text"><i class="fas fa-angle-right"></i> Privacy Police</p>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col sm={12} md={6}>
                            <p className="text-light fw-bold mt-4">Copyright © 2021. Rotors by Md: Masud Hossain</p>
                        </Col>

                        <Col sm={12} md={6} className="mt-4 text-center">
                            <i class="fab fa-facebook-f icon"></i>
                            <i class="fab fa-instagram icon"></i>
                            <i class="fab fa-twitter icon"></i>
                            <i class="fab fa-youtube icon"></i>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Footer;