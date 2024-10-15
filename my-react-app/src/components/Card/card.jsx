import React from 'react';

const Card = ({project}) => {
  
  const handleButtonClick = () => {
    window.open(project?.link);
  }

  return (
    <div className="flex flex-col relative overflow-hidden  group lg:hover:scale-95 hover:scale-120 transition-transform duration-300 ease-in-out first-card">
      <div className="transform transition-transform duration-500 lg:hover:scale-90 ">
        <img src={project?.imageUrl} alt="project-image"/>
      </div>

      <div className=" text-white lg:w-auto w-[100%] absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-0 px-10 text-center bg-gradient-to-tr from-[palegreen] to-green-100 h-0 transition-all duration-200 ease-in-out  lg:hover:scale-95 hover:scale-100 group-hover:h-full">
        <h2 className="lg:text-4xl text-2xl italic">
          {project?.title}
        </h2>
        <p>{project?.description}</p>
        <button 
        onClick={handleButtonClick}
        className="text-base p-2 text-white  rounded-full transition-transform duration-300 ease-in-out hover:translate-y-2">{project?.buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
