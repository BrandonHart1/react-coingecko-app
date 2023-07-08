import React from 'react';
import './Hero.css';
import Crypto from '../assets/crypto.png';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                {/* ----- Left ----- */}
                <div className='left'>
                    <p>Buy and Sell Crypto</p>
                    <h1>Invest in Cryptocurrency with Your IRA</h1>
                    <p>Buy, Sell, and Store Your Cryptocurrencies</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter Your Email' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>
                {/* ----- Right ----- */}
                <div className='right'>
                    <div className='image-container'>
                        <img src={Crypto} alt='crypto' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
