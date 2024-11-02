import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const ImageMotion = () => {
    const { scrollY } = useScroll();
    const translateYBottomImage = useTransform(scrollY, [0, 500], [-100, -250]); // عکس زیری بالاتر
    const translateYTopImage = useTransform(scrollY, [0, 500], [-50, 150]); // دامنه حرکت برای عکس رویی

    return (
        <section className='custom-padding'>
            <motion.div style={{ y: translateYBottomImage, x: -50 }} className="image-bottom" />
            <motion.div style={{ y: translateYTopImage, x: 10 }} className="image-top" />
        </section>
    );
};

export default ImageMotion;