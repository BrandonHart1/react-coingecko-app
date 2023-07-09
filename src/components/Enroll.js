import React from 'react';
import './Enroll.css';

import Crypto from '../assets/phone-trade.png';

const Enroll = () => {
    return (
        <div className='enroll'>
            <div className='container'>
                {/* ----- Left Side ----- */}
                <div className='left'>
                    <img src={Crypto} alt='crypto' />
                </div>
                {/* ----- Right Side ----- */}
                <div className='right'>
                    <h2>Earn Extra Income With Crypto</h2>
                    <input type='email' placeholder='Enter Your Email' />
                    <button className='btn'>Learn More Here</button>
                </div>
            </div>
        </div>
    );
};

export default Enroll;
