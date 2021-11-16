import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import AllCars from '../AllCars/AllCars';

const AllCar = () => {
    const [car, setCars] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/car')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div>
            <Container>
                <h1 className="text-center fw-bold mt-5">Our Car Gallery</h1>
                <p className="text-center fw-bold">Brake rotors in cars are circular metal discs connected to the wheels.<br />The rotors' primary purpose is to slow down the turning of the car's wheels by utilizing friction</p>
                {/* card section */}
                <Row xs={1} md={3} className="g-4 mt-4">

                    {
                        car.map((car, key) => <AllCars
                            key={key}
                            car={car}
                        ></AllCars>)
                    }

                </Row>
            </Container>
        </div>
    );
};

export default AllCar;