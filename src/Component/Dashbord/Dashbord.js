import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashbord.css'
import useAuth from './../../hooks/useAuth/useAuth';
import Footer from '../Footer/Footer';
import dashbord from '../../images/dashbord.png'

const Dashbord = () => {
    const { logout } = useAuth();
    const { admin } = useAuth();
    return (
        <div className="dashbord">
            <h1 className="dashbord-header">Dashbord</h1>
            <Container>
                {/* dashbord - menu */}
                <Row>
                    <Col className="dasbord-sider-bar" sm={6} md={3}>
                        {
                            !admin && <div>
                                <Link to="/ourcar"><i class="fas fa-car"></i> Our Cars</Link>
                                <Link to="/myorders"><i class="fas fa-shopping-bag"></i> My Orders</Link>
                                <Link to="/pay"><i class="fab fa-cc-amazon-pay"></i> Pay</Link>
                                <Link to="/review"><i class="fas fa-user-edit"></i> Review</Link>
                            </div>
                        }
                        {admin && <div>
                            <Link to="/manageallorders"><i class="fas fa-shopping-bag"></i> Manage All Orders</Link>
                            <Link to="/addaproducts"><i class="fas fa-shopping-bag"></i> Add A Product</Link>
                            <Link to="/admin"><i class="fas fa-user"></i> Make Admin</Link>
                            <Link to="/manageproduct"><i class="fas fa-shopping-bag"></i> Manage Products</Link>
                        </div>}
                        <button onClick={logout} className="btn btn-danger fw-bold mt-5 ms-5">Sign Out</button>
                    </Col>
                    {/* dashbord-img */}
                    <Col sm={6} md={9}>
                        <img className="img-fluid" src={dashbord} alt="" />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Dashbord;