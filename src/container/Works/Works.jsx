import React, { useState, useEffect} from "react";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
// import { urlFor, client } from '../../client';
import './Works.scss';

const Works = () => {

    const [activeFilter, setactiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})

    const works = [
        {title: 'UI/UX developer', description: 'I am an expert UI/UX developer sing 2020', imageUrl: images.about03},
        {title: 'Front-end developer', description: 'I am an expert front-end developer sing 2020', imageUrl: images.about03},
        {title: 'React Native', description: 'I am an expert React Native developer sing 2020', imageUrl: images.about03},
    ]

    const handleWorkFilter = (item) => {

    }

    return(
        <>
            <h2 className="head-text">
                My creative  
                <span> portfolio</span>
                <span> section</span>
            </h2>

            

            <div className="app__work-filter">
                {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
                <div
                    href={`#${item}`}
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
                >
                    {item}
                </div>
                ))}
            </div>
            
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className='app__work-portfolio'
            >

            </motion.div>
        </>
    )
};

export default Works;