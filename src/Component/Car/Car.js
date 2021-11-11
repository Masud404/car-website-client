import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Cars from '../Cars/Cars';
import './Car.css'

const Car = () => {
    const [car, setCars] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <Container>
                <h1 className="text-center fw-bold mt-5">Featured Car</h1>
                <p className="text-center fw-bold">Brake rotors in cars are circular metal discs connected to the wheels.<br />The rotors' primary purpose is to slow down the turning of the car's wheels by utilizing friction</p>
                {/* card section */}
                <Row xs={1} md={3} className="g-4 mt-4">

                    {
                        car.slice(0, 6).map((car, key) => <Cars
                            key={key}
                            car={car}
                        ></Cars>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default Car;