import React from 'react';
import Banner from '../Banner/Banner';
import Menubar from '../Menubar/Menubar';

const TopBanner = () => {
    return (
        <div className="bg-image">
            <Menubar></Menubar>
            <Banner></Banner>
        </div>
    );
};

export default TopBanner;