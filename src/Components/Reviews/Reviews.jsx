import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './Reviews.css';

import { AiFillStar } from 'react-icons/ai';

import client1 from '../../Assets/clients-1.jpg';
import client2 from '../../Assets/clients-2.jpg';
import client3 from '../../Assets/clients-3.jpg';
import client4 from '../../Assets/clients-4.jpg';
import client5 from '../../Assets/clients-5.jpg';

const Reviews = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='review section container'>
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="redText" data-aos="fade-up">FROM OUR CLIENTS</span>
                    <h3 data-aos="fade-up">Real Travel History From Our Beloved Clients</h3>
                    <p data-aos="fade-right">
                        By choosing us their tour agency, customers can expect an
                        enriching and enjoyable travel experience, filled with
                        unforgettable memmories thet will last a lifetime.
                    </p>
                    <span className="stars flex" data-aos="fade-up">
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                    </span>

                    <div className="clientsImages flex" data-aos="fade-up">
                        <img src={client1} alt="client" />
                        <img src={client2} alt="client" />
                        <img src={client3} alt="client" />
                        <img src={client4} alt="client" />
                    </div>
                </div>
                <div className="imgDiv">
                    <img src={client5} alt="client" data-aos="fade-left" />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
