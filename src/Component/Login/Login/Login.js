import React, { useState } from 'react';
import { Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import './Login.css'
import logo from '../../../images/login/brand-logo-white.png'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';

// login section

const Login = () => {
    const { user, signInUsingGoogle, loginUser, isLoading, error } = useAuth();
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
        loginUser(loginData.email, loginData.password, location, history)
        alert('SignIn Successfully')
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInUsingGoogle(location, history)
    }

    return (
        <div className="login-bg">
            {/* login section */}
            <Container className="login-container">
                <div className="login-from-size">

                    <Row>
                        <Col sm={6} md={5} className="google-signin py-5 px-5">
                            <img className="w-75 my-5" src={logo} alt="" />
                            <p className="text-light mb-4">Signin using social media to get quick access</p>
                            <button onClick={handleGoogleSignIn} className="btn btn-danger mb-5"><i class="fab fa-google-plus-g"></i> Signin with google</button>
                        </Col>
                        <Col sm={6} md={7} className="email-signin text-center py-5">
                            <h4 className="fw-bold">Signin to your account</h4>
                            <p className="fw-bold mb-5">Don’t have an account? <Link to="/signup">Sign Up !</Link></p>
                            {!isLoading && <form onSubmit={handleLoginSubmit}>
                                <input onBlur={handleOnBlur} type="email" className="input mb-4" name="email" id="" placeholder="Email address" /><br />
                                <input onBlur={handleOnBlur} type="password" className="input mb-4" name="password" id="" placeholder="Password" /><br />
                                <input type="submit" className="input-submit mt-3" />
                            </form>}
                            {isLoading && <Spinner animation="border" variant="primary" />}
                            {error && <p className="text-danger">{error}</p>}
                        </Col>
                    </Row>
                </div>

            </Container>
        </div>
    );
};

export default Login;