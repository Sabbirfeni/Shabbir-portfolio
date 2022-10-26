import React, { useState, useEffect} from "react";
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './Skills.scss';

const skills = [
    {name: 'React', icon: images.react, bgColor: '#0000000'},
    {name: 'Figma', icon: images.figma, bgColor: '#0000000'},
    {name: 'Flutter', icon: images.flutter, bgColor: '#0000000'},
    {name: 'Git', icon: images.git, bgColor: '#0000000'},
]

const experiences = [
    {name: "Front-end developer", company: 'Google', year: 2020, desc: "I was front-end developer at Google"},
    {name: "Full stack developer", company: 'Amazon', year: 2021, desc: "I was full stack developer at Amazon"},
    {name: "Software Engineer", company: 'Microsoft', year: 2022, desc: "I am Software Engineer at Microsoft"}
]

const Skills = () => {
    return(
        <>
            <h2 className="head-text">Skills and Experience</h2>
            <div className="app__skills-container app__flex">
                <motion.div className="app__skills-list">
                    
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className='app__skills-item app__flex'
                            key={skill.name}
                        >
                            <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                                <img src={skill.icon} alt="" />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <>
                            <motion.div
                               whileInView={{opacity: [0, 1]}}
                               transition={{duration: 0.5}}
                               className='app__skills-exp-work'
                               data-tip
                               data-for={experience.name}
                               key={experience.name}
                            >
                                <h4 className="bold-text">{experience.name}</h4>
                                <p className="p-text">{experience.company}</p>
                                <h6>{experience.year}</h6>
                            </motion.div>
                            <ReactTooltip
                                id={experience.name}
                                effect='solid'
                                // arrowColor="#fff"
                                className="skills-tooltip"
                            >
                                {experience.desc}
                            </ReactTooltip>
                        </>
                    ))}
                </motion.div>
            </div>
        </>
    )
};


export default AppWrap(Skills, 'skills');