import React from 'react';
import './card.css';

const Card = ({
  title,
  description,
  imageUrl,
  buttonText,
  titles,
  descriptions,
  imageUrls,
  buttonTexts,
  titless,
  descriptionss,
  imageUrlss,
  buttonTextss,
  titlesss,
  descriptionsss,
  imageUrlsss,
  buttonTextsss,
  titlessss,
  descriptionssss,
  imageUrlssss,
  buttonTextssss,
  titlesssss,
  descriptionsssss,
  imageUrlsssss,
  buttonTextsssss,
}) => {
  return (
    <div className="card">
      <div className="flex flex-col relative overflow-hidden  ">
        <div className="first-card ">
          <img src={imageUrl} alt="" className="card-image1" />
        </div>
        <div className="card-content1  text-white w-[100%] hidden absolute left-0 bottom-0 overflow-hidden hover:flex items-center justify-center flex-col py-0 px-10 text-center bg-gradient-to-tr from-pink-500 to-pink-1500 hover:h-[200px]">
          <h2 className="card-title1 sm:text-4xl text-xs italic">{title}</h2>
          <p className="card-description1">{description}</p>
          <button className="card-button1">{buttonText}</button>
        </div>
      </div>

      <div className="flex flex-col relative overflow-hidden">
        <div className="first-card">
          <img src={imageUrls} alt="" className="card-image2" />
        </div>
        <div className="card-content1  text-white w-[100%] h-0 absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-0 px-10 text-center bg-gradient-to-tr from-pink-500 to-pink-1500 hover:h-full">
          <h2 className="card-title1 sm:text-4xl text-xs italic">{titles}</h2>
          <p className="card-description1">{descriptions}</p>
          <button className="card-button1">{buttonTexts}</button>
        </div>
      </div>

      <div className="flex flex-col relative overflow-hidden">
        <div className="first-card">
          <img src={imageUrlss} alt="" className="card-image3" />
        </div>
        <div className="card-content1  text-white w-[100%] h-0 absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-0 px-10 text-center bg-gradient-to-tr from-pink-500 to-pink-1500 hover:h-full">
          <h2 className="card-title1 sm:text-4xl text-xs italic">{titless}</h2>
          <p className="card-description1">{descriptionss}</p>
          <button className="card-button1">{buttonTextss}</button>
        </div>
      </div>

      <div className="flex flex-col relative overflow-hidden">
        <div className="first-card">
          <img src={imageUrlsss} alt="" className="card-image4" />
        </div>
        <div className="card-content1  text-white w-[100%] h-0 absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-0 px-10 text-center bg-gradient-to-tr from-pink-500 to-pink-1500 hover:h-full">
          <h2 className="card-title1 sm:text-4xl text-xs italic">{titlesss}</h2>
          <p className="card-description1">{descriptionsss}</p>
          <button className="card-button1">{buttonTextsss}</button>
        </div>
      </div>

      <div className="flex flex-col relative overflow-hidden">
        <div className="first-card">
          <img src={imageUrlssss} alt="" className="card-image5" />
        </div>
        <div className="card-content1  text-white w-[100%] h-0 absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-0 px-10 text-center bg-gradient-to-tr from-pink-500 to-pink-1500 hover:h-full">
          <h2 className="card-title1 sm:text-4xl text-xs italic">{titlessss}</h2>
          <p className="card-description1">{descriptionssss}</p>
          <button className="card-button1">{buttonTextssss}</button>
        </div>
      </div>

      <div className="flex flex-col relative overflow-hidden">
        <div className="first-card">
          <img src={imageUrlsssss} alt="" className="card-image6" />
        </div>
        <div className="card-content1  text-white w-[100%] h-0 absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col py-0 px-10 text-center bg-gradient-to-tr from-pink-500 to-pink-1500 hover:h-full">
          <h2 className="card-title1 sm:text-4xl text-xs italic">{titlesssss}</h2>
          <p className="card-description1">{descriptionsssss}</p>
          <button className="card-button1">{buttonTextsssss}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
