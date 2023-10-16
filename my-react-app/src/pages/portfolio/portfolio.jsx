import React from 'react';
import './portfolio.css';
import Card from '../../components/Card/card';
import { motion } from 'framer-motion';
import landingpageproject from '../images/landingpage.png';
import agecalculator from '../images/agecalculator.png';
import tipcalculator from '../images/tipcalculator.png';
import resultsummary from '../images/resultsummary.png';
import form from '../images/form.png';
import portfi from '../images/portfolio.jpeg';

const Portfolio = () => {
  const projects = [
    {
      title: 'Landing Page',
      description: 'First page of a Website',
      imageUrl: { landingpageproject },
      buttonText: 'View Project',
    },
    {
      title: 'Age Calculator',
      description: 'You want to know your age?',
      imageUrl: { agecalculator },
      buttonText: 'View Project',
    },
    {
      title: 'Tip Calculator',
      description: 'Tip Tip Tip!!',
      imageUrl: { tipcalculator },
      buttonText: 'View Project',
    },
    {
      title: 'Result Summary',
      description: 'What did I get?',
      imageUrl: { resultsummary },
      buttonText: 'View Project',
    },
    {
      title: 'Form',
      description: 'Fill up.',
      imageUrl: { form },
      buttonText: 'View Project',
    },
    {
      title: 'Hmm',
      description: 'Loading!!!!.',
      imageUrl: { portfi },
      buttonText: 'View Project',
    },
  ];
  return (
    <motion.div
      className="home"
      style={{ backgroundColor: 'white' }}
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div id="portfolio">
        <div>
          <div className="portf">
            <p className="portt ">PORTFOLIO</p>
            <p className="mio bg-pink-400 border-pink-400"></p>
            <p className="wait">
              Stick with me while I take you on a tour of my achievements.
            </p>
            <div className="card">
              {projects.map((project) => (
                <Card project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
