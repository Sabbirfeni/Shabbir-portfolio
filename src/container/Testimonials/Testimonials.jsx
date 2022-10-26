import React from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap } from "../../wrapper";
import { images } from '../../constants';
import './Testimonials.scss';

const testimonial = [
    {name: 'Sabbir', company: 'Netflix', imgUrl: images.html, desc: 'I am from Netflix'}
]
let position = testimonial[0];
const brands = [images.adidas, images.amazon, images.asus, images.skype, images.spotify]

const Testimonials = () => {
    return(
        <>
           
            <div className="app__testimonial-brands app__flex">
           
                {brands.map((brand, index) => (
                    <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5, type:'tween'}}
                        key={`brand` + index}
                    >
                        <img src={brand} alt="" />
                    </motion.div>
                ))}
            </div>
        </>

    )
}

export default AppWrap(Testimonials, 'testimonial');