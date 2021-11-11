import React from 'react';
import { Card, Col } from 'react-bootstrap';

const AllCars = ({ car }) => {
    const { name, img, price, enginetype, description } = car;
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

                        <button className="buy-now-button mt-3">Buy Now</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllCars;