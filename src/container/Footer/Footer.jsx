import React, { useState } from "react";

import { images } from  '../../constants';
import { AppWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
 
    return(
        <>
            <h2 className="head-text">Take a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a href="mailto:contact.sabbirbhuiyan@gmail.com" className="p-text">contact.sabbirbhuiyan@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="email" />
                    <a href="tel:+880 1843 676 171" className="p-text">+880 1843 676 171</a>
                </div>
            </div>

            <div className="app__footer-form app__flex">
                <div className="app__flex">
                    <input type="text" className="p-text" name="name" placeholder="Your name"/>
                </div>
                <div className="app__flex">
                    <input type="email" className="p-text" name="email" placeholder="Your email"/>
                </div>
                <div>
                    <textarea 
                    className="p-text"
                    placeholder="Your message"
                   
                    />
                </div>
                <button type="button" className="p-text" >Send message</button>
            </div>
        </>
    )
};


export default AppWrap(Footer, 'footer');