import React from 'react';

import './Reviews.css';

import { AiFillStar } from 'react-icons/ai';

import client1 from '../../Assets/clients-1.jpg';
import client2 from '../../Assets/clients-2.jpg';
import client3 from '../../Assets/clients-3.jpg';
import client4 from '../../Assets/clients-4.jpg';
import client5 from '../../Assets/clients-5.jpg';

const Reviews = () => {
    return (
        <div className='review section container'>
            <div className="secContainer grid">
                <div className="textDiv">
                    <span className="redText">FROM OUR CLIENTS</span>
                    <h3>Real Travel History From Our Beloved Clients</h3>
                    <p>
                        By choosing us their tour agency, customers can expect an
                        enriching and enjoyable travel experience, filled with
                        unforgettable memmories thet will last a lifetime.
                    </p>
                    <span className="stars flex">
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                        <AiFillStar className='icon' />
                    </span>

                    <div className="clientsImages flex">
                        <img src={client1} alt="client" />
                        <img src={client2} alt="client" />
                        <img src={client3} alt="client" />
                        <img src={client4} alt="client" />
                    </div>
                </div>
                <div className="imgDiv">
                    <img src={client5} alt="client" />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
