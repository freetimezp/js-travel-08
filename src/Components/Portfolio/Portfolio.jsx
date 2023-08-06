import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Portfolio.css';

import { BiAnalyse, BiAperture, BiAt } from 'react-icons/bi';
import portfolioImage from '../../Assets/portfolio.jpg';

const Portfolio = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='portfolio section container'>
            <div className="secContainer grid">
                <div className="leftContent">
                    <div className="secHeading">
                        <h3 data-aos="fade-up">Why Should You Choose Us</h3>
                        <p data-aos="fade-up">
                            We have extensive knowledge and experience in the travel industry.
                        </p>
                    </div>
                    <div className="grid">
                        <div className="singlePortfolio flex" data-aos="fade-up">
                            <div className="iconDiv">
                                <BiAnalyse />
                            </div>
                            <div className="info">
                                <h4>Safety and Support</h4>
                                <p>
                                    Our top priority is the safety and well-being of the clients.
                                    We maintain high safety standarts and have emergency support
                                    available during the trip.
                                </p>
                            </div>
                        </div>
                        <div className="singlePortfolio flex" data-aos="fade-up">
                            <div className="iconDiv">
                                <BiAperture />
                            </div>
                            <div className="info">
                                <h4>Diverse Range of Destinations</h4>
                                <p>
                                    Our top priority is the safety and well-being of the clients.
                                    We maintain high safety standarts and have emergency support
                                    available during the trip.
                                </p>
                            </div>
                        </div>
                        <div className="singlePortfolio flex" data-aos="fade-up">
                            <div className="iconDiv">
                                <BiAt />
                            </div>
                            <div className="info">
                                <h4>24/7 Customer Support</h4>
                                <p>
                                    Our top priority is the safety and well-being of the clients.
                                    We maintain high safety standarts and have emergency support
                                    available during the trip.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightContent">
                    <img src={portfolioImage} alt="portfolio" data-aos="fade-down" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
