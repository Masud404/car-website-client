import React from 'react';
import Footer from '../../Footer/Footer';
import Menubar from '../../Menubar/Menubar';
import AllCar from '../AllCar/AllCar';

const OurCar = () => {
    return (
        // our car section
        <div>
            <Menubar></Menubar>
            <AllCar></AllCar>
            <Footer></Footer>
        </div>
    );
};

export default OurCar;