import React from 'react';
import Card from '../../components/Card/card';
import { motion } from 'framer-motion';

const Portfolio = () => {
  
  const projects = [
    {
      title: 'Travel Muse',
      imageUrl: '/assets/TravelMuse.png',
      buttonText: 'View Project',
      link:'https://travelmuse.vercel.app/'
    },
    {
      title: 'Weather Max',
      imageUrl: '/assets/WeatherMax.png',
      buttonText: 'View Project',
      link:'https://weather-max.vercel.app/'
    },
    {
      title: 'Queue Not',
      imageUrl: '/assets/QueueNot.png',
      buttonText: 'View Project',
      link:'https://github.com/fiopefoluwa/QUEUE'
    },
    {
      title: 'My Portfolio',
      imageUrl: '/assets/Portfolio.png',
      buttonText: 'View Project',
      link:'https://my-portfolio-one-flax.vercel.app/'
    },
  ];
  return (
    <motion.div
      className="home"
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div id="portfolio">
        <div>
          <div>
            <p className="text-xl overline text-[palegreen] text-center lg:text-left lg:leading-[10rem] tracking-[1rem] font-semibold ">PORTFOLIO</p>
            <div className="grid lg:grid-cols-2 justify-center gap-10 p-6 lg:p-0">
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
