import React, { useState } from 'react';

import { BiLogoMediumOld } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

import './Navbar.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState('menu');

    const showNavbar = () => {
        setNavbar('menu showNavbar');
    }

    const removeNavbar = () => {
        setNavbar('menu');
    }

    return (
        <div className='navbar'>
            <div className="logoDiv">
                <BiLogoMediumOld className="icon" />
                <span>Dream Travel</span>
            </div>

            <div className={navbar}>
                <ul>
                    <li className="nav-list">
                        Destination
                    </li>
                    <li className="nav-list">
                        About Us
                    </li>
                    <li className="nav-list">
                        Testimonial
                    </li>
                    <li className="nav-list">
                        Gallery
                    </li>
                </ul>

                <AiFillCloseCircle className='icon closeIcon' onClick={removeNavbar} />
            </div>

            <button className="signUpBtn btn">
                Sign Up
            </button>

            <PiDotsNineBold className='icon menuIcon' onClick={showNavbar} />
        </div>
    );
};

export default Navbar;
