import React from 'react';
import "./card.css"
import { Link } from 'react-router-dom';

const Card = () => {
    return (
    <div className='flex p-12 gap-16 text-center'>
            <div className="card">
                <div className='img'>
                   
                    <img src="programming-background-collage_23-2149901782.avif" alt=""  className='api'/>
                </div>
                <div className="card-content"><br />
                    <p>Fundamentals of a Frontend DEV.</p>
                    <button className='button'>Click me</button>
                </div>
            </div>
        <div className="cardss">
            <div className='img'>
                <img src="download.jpeg" alt="Card Image" />
                <img src="Pitfalls-of-overusing-react-context.avif" alt="" />
            </div>
            <div className="card-content">
                <p>Now, We Are In!</p>
                <button className='button'>Click me</button>
            </div>
        </div>
        <div className="cards">
            <img src="Api-Gateway.jpg" alt="Card Image" className='api'/><br />
            <div className="card-content">
                <p>Lets Build.</p>
                <button className='button'>Click me</button>
            </div>
        </div>
    </div>
    );
}

export default Card;
