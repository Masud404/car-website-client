import React, { useEffect, useState } from 'react';
import './PurchaseCar.css'
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import useAuth from './../../hooks/useAuth/useAuth';

const PurchaseCar = () => {
    const { user } = useAuth();
    const { purchasecarId } = useParams();
    const [purchase, setPurchase] = useState([]);

    useEffect(() => {
        fetch('https://salty-temple-68876.herokuapp.com/car')
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])


    const purchases = purchase.find(purchase => purchase._id == purchasecarId);

    // react hook forms
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        data.order = purchases?.name;


        fetch('https://salty-temple-68876.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Purchess Successfully')
                    reset();
                }
            })

    };

    return (
        <div>
            <Menubar></Menubar>
            {/* --------------------- */}

            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="my-5 text-center">
                            <h1 className="mb-5">{purchases?.name}</h1>
                            <img src={purchases?.img} alt="" />
                            <h4 className="mt-5 fw-bold">Price: ${purchases?.price}</h4>
                            <h5><span className="text-danger">Bodytype:</span> {purchases?.bodytype}</h5>
                            <h5><span className="text-danger">Enginetype: </span>{purchases?.enginetype}</h5>
                            <h4>{purchases?.description}</h4>
                            <p className="fw-bold"><span className="text-danger">Details: </span>{purchases?.details}</p>
                        </div>
                    </Col>

                    {/* react hook form */}
                    <Col sm={12} md={6}>

                        <div className="text-center">
                            <h2 className="mt-5 fw-bold text-danger">Purchase Car</h2>
                            <form className="purchase-form" onSubmit={handleSubmit(onSubmit)}>

                                <input defaultValue={user?.displayName} {...register("name")} />
                                <input defaultValue={user?.email} {...register("email", { required: true })} />
                                {errors.email && <span className="error">This field is required</span>}

                                <input placeholder="Address" defaultValue="" {...register("address")} />
                                <input placeholder="City" defaultValue="" {...register("city")} />
                                <input placeholder="Phone" defaultValue="" {...register("phone")} />

                                <input className="purchase-button" type="Submit" />
                            </form>
                        </div>

                    </Col>
                </Row>
            </Container>

            {/* ---------------------- */}
            <Footer></Footer>
        </div>
    );
};

export default PurchaseCar;