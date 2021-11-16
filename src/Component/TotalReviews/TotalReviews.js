import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import Rating from 'react-rating';
import './TotalReview.css'

const TotalReviews = ({ review }) => {
    const { name, reviews, message } = review;
    return (
        <div>
            {/* review section */}
            <Col>
                <Card bg="secondary" border="warning">
                    <Card.Body className="text-light fw-bold text-center">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {/* Ratting: {message} */}
                            <Rating
                                initialRating={message}
                                emptySymbol="far fa-star icon-color"
                                fullSymbol="fas fa-star icon-color"
                                readonly></Rating>
                        </Card.Text>

                        <Card.Text>
                            {reviews}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default TotalReviews;