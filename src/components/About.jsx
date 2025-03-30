import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className='about' id='about'>
      <motion.div
        className='about-content'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I'm a graduate of the University of Bath, where I earned a Master’s
          degree in Aerospace Engineering.
        </p>
        <p>
          During my studies, I was introduced to programming through MATLAB,
          which sparked a deeper interest in coding. I soon began learning other
          languages like Python and C#, using them to build simple games and
          projects for fun.
        </p>
        <p>
          Eventually, I discovered JavaScript and found that front-end web
          development was a perfect fit. Since then, I've been using JavaScript
          and its ecosystem to build clean, modern websites and web apps.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
