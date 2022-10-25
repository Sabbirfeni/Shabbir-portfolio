import React, { useState, useEffect} from "react";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
// import { urlFor, client } from '../../client';
import './Works.scss';

const works = [
    {title: 'UI/UX developer', description: 'I am an expert UI/UX developer sing 2020', imageUrl: images.about03, tag: 'UI/UX'},
    {title: 'Front-end developer', description: 'I am an expert front-end developer sing 2020', imageUrl: images.about02, tag: 'Web App'},
    {title: 'React Native', description: 'I am an expert React Native developer sing 2020', imageUrl: images.about01, tag: 'Mobile App'},
    {title: 'React Native', description: 'I am an expert React Native developer sing 2020', imageUrl: images.about01, tag: 'React JS'},
    {title: 'React Native', description: 'I am an expert React Native developer sing 2020', imageUrl: images.about01, tag: 'UI/UX'},
]

const Works = () => {

    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1})

 

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{y: 100, opacity: 0}])

        setTimeout(() => {
            setAnimateCard([{y: 0, opacity: 1}]);

            if(item == 'All') {
                console.log('hi')
            } else {
                works = works.filter((workItem) => workItem.tag.includes(item));
                console.log(works)
            }
        }, 500)
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
                {works.map((work, index) => (
                    <div className="app__work-item app__flex" key={index}>
                        <div className="app__work-img app__flex">
                            <img src={ work.imageUrl } alt="" />

                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0 }}
                                className='app__work-hover app__flex'
                            >
                                <a href={ work.projectLink} target='_blank' rel='noreferrer'>
                                    <motion.div
                                        whileInView={{ scale: [0, 1]}}
                                        whileHover={{ scale: [1, 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className='app__flex'
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>

                                <a href={ work.projectLink} target='_blank' rel='noreferrer'>
                                    <motion.div
                                        whileInView={{ scale: [0, 1]}}
                                        whileHover={{ scale: [1, 0.9] }}
                                        transition={{ duration: 0.25 }}
                                        className='app__flex'
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>

                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{ work.title}</h4>
                            <p style={{ marginTop: 10 }}>{ work.description }</p>

                        </div>

                    </div>
                ))}

            </motion.div>
        </>
    )
};

export default AppWrap(Works, 'work');