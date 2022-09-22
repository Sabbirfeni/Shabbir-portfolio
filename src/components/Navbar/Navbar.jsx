import React from "react";
import './Navbar.scss';


import {images} from '../../constants';


const Navbar = () => {
    return(
        <nav className="app__navbar">
            <div className="app__logo">
                <img src={images.logo} alt="logo" srcset="" />
            </div>
            <ul className="app_navbar-links">
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div></div>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Navbar;