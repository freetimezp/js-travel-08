import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Subscribe.css';

import subscribeImage from '../../Assets/subscribe.jpg';

const Subscribe = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='subscribe section container'>
            <div className="secContainer grid">
                <img src={subscribeImage} alt="subscribe" data-aos="fade-down" />

                <div className="textDiv">
                    <h4 data-aos="fade-down">Best Way To Start Your Journey!</h4>
                    <p data-aos="fade-left">
                        We offer personalized itineraries tailored to
                        individual preferences and interests.
                    </p>
                    <button className="btn" data-aos="fade-up">
                        Start Here
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;
