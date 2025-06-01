import React from 'react';
import './Portfolio.css';
import { FaGithub } from 'react-icons/fa';
import ldnSportImage from '../assets/ldn-sport.png';
import gpt3Image from '../assets/gpt3-clone.png';
import oldPortfolioImage from '../assets/old-portfolio.png';
import oldLdnSportImage from '../assets/ldn-sport-old.png';
import forkifyImage from '../assets/forkify.png';
import alina from '../assets/alina.png';

const projects = [
  {
    name: 'LDN Sport Social',
    title: 'Sports Marketing Website',
    description:
      'A clean and bold landing site for a sports-focused advertising agency.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: ldnSportImage,
    link: 'https://ldnsportsocial.com',
    github: 'https://github.com/mander5/LDNupdate',
  },
  {
    name: 'Alina-UX',
    title: 'User Experience portfolio',
    description:
      'A portfolio website for a UX designer, showcasing their work and skills - using a content management system.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'CMS', 'React'],
    image: alina,
    link: 'https://alina-ux.netlify.app/',
    github: 'https://github.com/mander5/autoCRMux',
  },
  {
    name: 'GPT3 Clone',
    title: 'Front-End Clone of ChatGPT',
    description:
      'A front-end clone of ChatGPT using React, styled to mimic the original.',
    technologies: ['React', 'CSS'],
    image: gpt3Image,
    link: 'https://mander5-gpt3-clone.netlify.app/',
    github: 'https://github.com/mander5/GPT3-clone',
  },
  {
    name: 'Old Portfolio',
    title: 'Previous Personal Portfolio',
    description:
      'My old portfolio site that showcases my skills and projects before the current design.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: oldPortfolioImage,
    link: 'https://aaron-portfolio-old.netlify.app/',
    github: 'https://github.com/mander5/Portfolio',
  },
  {
    name: 'LDN Sport Social (Previous Build)',
    title: 'Old Version of Sports Media Website',
    description:
      'An earlier version of the LDN Sport Social website showcasing the first design iteration.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: oldLdnSportImage, // Image for the previous LDN Sport Social build
    link: 'https://ldnsportsocial.netlify.app/',
    github: 'https://github.com/mander5/LDNsportSocial',
  },
  {
    name: 'Forkify',
    title: 'Recipe Website',
    description:
      'A recipe website that fetches information from an online API repository.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: forkifyImage, // Image for the Forkify project
    link: 'https://forkify-mander5.netlify.app/',
    github: 'https://github.com/mander5/forkifyApp',
  },
];
const Portfolio = () => {
  return (
    <section className='portfolio' id='portfolio'>
      <div className='portfolio-content'>
        <h2>Portfolio</h2>
        <div className='projects-grid'>
          {projects.map((project, index) => (
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              key={index}
              className='project-card'
            >
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                className='project-image'
              />
              <h3>{project.name}</h3>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className='tech-stack'>
                {project.technologies.map((tech, i) => (
                  <span key={i} className='tech-tag'>
                    {tech}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  className='github-link'
                  onClick={(e) => e.stopPropagation()}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub size={20} />
                </a>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
