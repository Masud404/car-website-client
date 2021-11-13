import React from 'react';
import Footer from '../Footer/Footer';
import Menubar from '../Menubar/Menubar';
import notfound from '../../images/not-found.png'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <Menubar></Menubar>
            {/* ------------------- */}

            <div className="text-center my-5">
                <img className="img-fluid" src={notfound} alt="" />
                <br />
                <Link to="/home"><button className="btn btn-danger mt-4">Back Home</button></Link>
            </div>


            {/* ------------------- */}
            <Footer></Footer>
        </div>
    );
};

export default NotFound;