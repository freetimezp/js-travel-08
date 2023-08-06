import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Destinations.css';

import { MdLocationPin } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';
import { TiLocation } from 'react-icons/ti';
import { BsFillCreditCardFill, BsFillCalendarDateFill } from 'react-icons/bs';

import destionation1 from '../../Assets/destination-1.jpg';
import destionation2 from '../../Assets/destination-2.jpg';
import destionation3 from '../../Assets/destination-3.jpg';
import destionation4 from '../../Assets/destination-4.jpg';
import destionation5 from '../../Assets/destination-5.jpg';
import destionation6 from '../../Assets/destination-6.jpg';
import destionation7 from '../../Assets/destination-7.jpg';
import destionation8 from '../../Assets/destination-8.jpg';

const destinations = [
    {
        id: 1,
        img: destionation1,
        name: 'Dream Place',
        location: 'Great Ocean',
        rating: 4.7
    },
    {
        id: 2,
        img: destionation2,
        name: 'Dream Place',
        location: 'Great Ocean',
        rating: 4.2
    },
    {
        id: 3,
        img: destionation3,
        name: 'Dream Place',
        location: 'Great Ocean',
        rating: 4.8
    },
    {
        id: 4,
        img: destionation4,
        name: 'Dream Place',
        location: 'Great Ocean',
        rating: 4.1
    },
    {
        id: 5,
        img: destionation5,
        name: 'Dream Place',
        location: 'Great Ocean',
        rating: 4.8
    },
    {
        id: 6,
        img: destionation6,
        name: 'Dream Place',
        location: 'Great Ocean',
        rating: 4.7
    },
    {
        id: 7,
        img: destionation7,
        name: 'Dream Place',
        location: 'Great Ocean',
        rating: 4.5
    },
    {
        id: 8,
        img: destionation8,
        name: 'Dream Place',
        location: 'Great Ocean',
        rating: 4.9
    },
]

const Destinations = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='destinations section container'>
            <div className="secContainer">
                <div className="secTitle">
                    <span className="redText" data-aos="fade-up">EXPLORE NOW</span>
                    <h3 data-aos="fade-up">Find Your Dream Destination</h3>
                    <p data-aos="fade-up">
                        Fill in the fields below to find best spot for your next tour..
                    </p>
                </div>

                <div className="searchField grid">
                    <div className="inputField flex" data-aos="fade-up">
                        <MdLocationPin className='icon' />
                        <input type="text" placeholder='Location' />
                    </div>
                    <div className="inputField flex" data-aos="fade-up">
                        <BsFillCreditCardFill className='icon' />
                        <input type="text" placeholder='Budget' />
                    </div>
                    <div className="inputField flex" data-aos="fade-up">
                        <BsFillCalendarDateFill className='icon' />
                        <input type="text" placeholder='Date' />
                    </div>

                    <button className='btn flex' data-aos="fade-up">
                        <BiSearchAlt className='icon' /> Search
                    </button>
                </div>

                <div className="secMenu">
                    <ul className="flex" data-aos="fade-up">
                        <li className="active">All</li>
                        <li>Recomended</li>
                        <li>Beach</li>
                        <li>Park</li>
                        <li>Nature</li>
                        <li>Mountain</li>
                    </ul>
                </div>

                <div className="destinationContainer grid">
                    {destinations.map((item) => (
                        <div className="singleDestination" key={item.id}>
                            <div
                                className="imgDiv"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration={200 * item.id * 2}
                            >
                                <img src={item.img} alt="destination" />
                                <div className="descInfo flex">
                                    <div className="text">
                                        <span className="name">{item.name}</span>
                                        <p className='flex'>
                                            <TiLocation className='icon' />
                                            {item.location}
                                        </p>
                                    </div>
                                    <span className="rating">{item.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
