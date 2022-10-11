import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from '../../constants';
import './About.scss';

const allAbout = [
    {title: 'Web developer', description: 'I am a good web developer', imgUrl: images.about01},
    {title: 'Front-end web developer', description: 'I am a good web developer', imgUrl: images.about02},
    {title: 'UX / UI', description: 'I am a good web developer', imgUrl: images.about03},
    {title: 'Graphic designer', description: 'I am a good web developer', imgUrl: images.about04},
]


const About = () => {
    return(
        <>
            <h2 className="head-text">
                I know that 
                <span> Good Design</span>
                <br />
                means 
                <span> Good Business</span>
            </h2>

            <div className="app__profiles">
                {allAbout.map((singleAbout, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween'}}
                        className='app__profile-item'
                        key={ singleAbout.title + index}
                    >
                        <img src={ singleAbout.imgUrl } alt={ singleAbout.title} />
                        <h2 className="bold-text" style={{ marginTop:20 }}>{ singleAbout.title }</h2>
                        <p className="p-text" style={{ marginTop:10 }}>{ singleAbout.description }</p>
                    </motion.div>
                ))}
            </div>
        </>
    )
};


export default AppWrap(About, 'about');