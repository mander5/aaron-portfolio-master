import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section className='hero'>
      <motion.div
        className='hero-content'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1>Hi, I'm Aaron</h1>
        <p className='subtitle'>
          I'm a software engineer who builds clean, modern web experiences.
        </p>
        <a href='#portfolio' className='cta-button'>
          View My Work
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
