import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Cars.css'
import { Link } from 'react-router-dom';

const Cars = ({ car }) => {
    const { name, img, price, enginetype, description, _id } = car;
    return (
        <div>
            {/* all card section */}
            <Col>
                <Card className="car-card text-center fw-bold">
                    <Card.Img variant="top" className="img-fluid" src={img} />
                    <Card.Body>
                        <Card.Title className="fw-bold text-danger">{name}</Card.Title>
                        <Card.Text>
                            Engine-Type: {enginetype}
                        </Card.Text>
                        <Card.Text>
                            Price: ${price}
                        </Card.Text>

                        <small>{description}</small><br />

                        <Link to={`/purchasecar/${_id}`}>
                            <button className="buy-now-button mt-3">Buy Now</button>
                        </Link>

                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Cars;