import React from 'react';

import './Home.css';
import { AiOutlineSwapRight } from 'react-icons/ai';

import Video from '../../Assets/home.mp4';

const Home = () => {
    return (
        <div className='home'>
            <div className="videoBg">
                <video src={Video} autoPlay loop muted></video>
            </div>

            <div className="sectionText">
                <h1>Unlock Your Travel Dreams With Us.</h1>
                <p>
                    Discover the world's most beautiful nature,
                    life is so short for a
                    trip.
                </p>
                <button className='btn flex'>
                    GET STARTED <AiOutlineSwapRight className='icon' />
                </button>
            </div>

            <div className="popularPlaces">
                <div className="content">
                    <h3>Popular Places</h3>
                    <div className="images flex">
                        {/* <img src="" alt="place" />
                        <img src="" alt="place" />
                        <img src="" alt="place" />
                        <img src="" alt="place" /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
