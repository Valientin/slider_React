import React from 'react';

import Header from '../Header';
import Slider from '../Slider';

import './home.scss';

const Home = () => {
    return(
        <div className="wrapper">
            <Header />
            <Slider />
        </div>
    )
}

export default Home;