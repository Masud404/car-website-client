import React, { useState } from 'react';
import { Col, Container, Form, Modal, Row, Spinner, Button, Alert } from 'react-bootstrap';
import logo from '../../../images/login/brand-logo-white.png'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';


// sign in section

const SignUp = () => {
    const { user, signInUsingGoogle, registerUser, isLoading, error } = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("password did not match")
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }

    return (
        // sign in
        <div className="login-bg">
            <Container className="login-container">
                <div className="login-from-size">

                    <Row>
                        <Col sm={6} md={5} className="google-signin py-5 px-5">
                            <img className="w-75 my-5" src={logo} alt="" />
                            <p className="text-light mb-4">Signin using social media to get quick access</p>
                            <button onClick={handleGoogleSignIn} className="btn btn-danger mb-5"><i class="fab fa-google-plus-g"></i> Signin with google</button>
                        </Col>
                        <Col sm={6} md={7} className="email-signin text-center py-5">
                            <h4 className="fw-bold mb-5">Sign up</h4>
                            {!isLoading && <form onSubmit={handleLoginSubmit}>
                                <input onBlur={handleOnBlur} type="email" className="input mb-4" name="email" id="" placeholder="Email address" required /><br />
                                <input onBlur={handleOnBlur} type="text" className="input mb-4" name="name" id="" placeholder="Full Name" /><br />
                                <input onBlur={handleOnBlur} type="password" className="input mb-4" name="password" id="" placeholder="Password" required /><br />
                                <input onBlur={handleOnBlur} type="password" className="input mb-4" name="password2" id="" placeholder="ReType Password" required /><br />
                                <input type="submit" className="input-submit mt-3" value="Sign up with Email" />
                            </form>}
                            {isLoading && <Spinner animation="border" variant="primary" />}
                            {error && <p className="text-danger">{error}</p>}
                            <Link to="/Login"><p className="mt-4 fw-bold">Already have an account?</p></Link>
                        </Col>

                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default SignUp;