import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import TotalReviews from '../TotalReviews/TotalReviews';


// review
const ReviewMessage = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://salty-temple-68876.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews)
    return (
        // review section
        <div>
            <Container>
                <h1 className="text-secondary mb-5 fw-bold">Clients Feedback</h1>
                <Row xs={2} md={4} className="g-4">
                    {
                        reviews.map((review, key) => <TotalReviews
                            key={key}
                            review={review}

                        ></TotalReviews>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default ReviewMessage;