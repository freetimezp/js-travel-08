import React from 'react';

import './Portfolio.css';

import { BiAnalyse, BiAperture, BiAt } from 'react-icons/bi';
import portfolioImage from '../../Assets/portfolio.jpg';

const Portfolio = () => {
    return (
        <div className='portfolio section container'>
            <div className="secContainer grid">
                <div className="leftContent">
                    <div className="secHeading">
                        <h3>Why Should You Choose Us</h3>
                        <p>
                            We have extensive knowledge and experience in the travel industry.
                        </p>
                    </div>
                    <div className="grid">
                        <div className="singlePortfolio flex">
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
                        <div className="singlePortfolio flex">
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
                        <div className="singlePortfolio flex">
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
                    <img src={portfolioImage} alt="portfolio" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
