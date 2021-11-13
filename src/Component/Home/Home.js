import React from 'react';
import Car from '../Car/Car';
import CarSlider from '../CarSlider/CarSlider';
import Footer from '../Footer/Footer';
import PremiumCar from '../PremiumCar/PremiumCar/PremiumCar';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Car></Car>
            <PremiumCar></PremiumCar>
            <CarSlider></CarSlider>
            <Footer></Footer>
        </div>
    );
};

export default Home;