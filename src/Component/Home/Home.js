import React from 'react';
import Car from '../Car/Car';
import CarSlider from '../CarSlider/CarSlider';
import Footer from '../Footer/Footer';
import PremiumCar from '../PremiumCar/PremiumCar/PremiumCar';
import ReviewMessage from '../ReviewMessage/ReviewMessage';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css'

const Home = () => {
    return (
        // home section
        <div>
            <TopBanner></TopBanner>
            <Car></Car>
            <PremiumCar></PremiumCar>
            <CarSlider></CarSlider>
            <ReviewMessage></ReviewMessage>
            <Footer></Footer>
        </div>
    );
};

export default Home;