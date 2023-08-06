import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import Accordion from '../Accordion/Accordion';

import './Questions.css';

const Questions = () => {
    const [active, setActive] = useState('1. How di I choose the right destination for me?');

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);

    return (
        <div className='questions sections container'>
            <div className="secHeading" data-aos="fade-up">
                <h3>Maybe you want to know this..</h3>
            </div>
            <div className="secContainer grid">
                <div className="accordion grid" data-aos="fade-up">
                    <Accordion
                        title="1. How di I choose the right destination for me?"
                        desc="Consider your interests, budget, desired experinces, and the type
                        of environment you enjoy. Research destinations that align with
                        your preferences and offer attractions or activities you find
                        appealing."
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title="2. How di I choose the right destination for me?"
                        desc="Consider your interests, budget, desired experinces, and the type
                        of environment you enjoy. Research destinations that align with
                        your preferences and offer attractions or activities you find
                        appealing."
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title="3. How di I choose the right destination for me?"
                        desc="Consider your interests, budget, desired experinces, and the type
                        of environment you enjoy. Research destinations that align with
                        your preferences and offer attractions or activities you find
                        appealing."
                        active={active}
                        setActive={setActive}
                    />
                    <Accordion
                        title="4. How di I choose the right destination for me?"
                        desc="Consider your interests, budget, desired experinces, and the type
                        of environment you enjoy. Research destinations that align with
                        your preferences and offer attractions or activities you find
                        appealing."
                        active={active}
                        setActive={setActive}
                    />
                </div>
                <div className="form">
                    <div className="secHeading">
                        <h4 data-aos="fade-up">Do you have any specific questions?</h4>
                        <p data-aos="fade-up">
                            Please fill the form below and our team will get
                            intouch with you as soon as possible.
                        </p>
                    </div>

                    <div className="formContent grid" data-aos="fade-down">
                        <input type="email" placeholder="Enter email address" />
                        <textarea placeholder='Enter your question here'></textarea>
                        <button className='btn'>
                            Send Question
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
