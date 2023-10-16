import React from 'react';
import './card.css';

const Card = ({project}) => {
  return (
    <div className=" card_container flex flex-col relative overflow-hidden   ">
      <div className="first-card">
        <img src={project?.imageUrl} alt="" className="card-image1" />
      </div>

      <div className="card-content1  text-white w-[100%]  absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-0 px-10 text-center bg-gradient-to-tr from-pink-500 to-pink-1500 h-0 ">
        <h2 className="card-title1 sm:text-4xl text-xs italic">
          {project?.title}
        </h2>
        <p className="card-description1">{project?.description}</p>
        <button className="card-button1">{project?.buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
