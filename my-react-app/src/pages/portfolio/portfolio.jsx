import React from 'react'
import "./portfolio.css"
import Card from "../../components/Card/card"
import {motion} from "framer-motion"
// import Footer from "../components/footer"

const Portfolio = () => {
  return (
    <motion.div  className='home' 
    style={{ backgroundColor: 'white'}} 
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth, transition:{duration:0.1}}}
    
   >
      <div id='portfolio'>
        <div>
          <div className='portf'>
            <p className='portt '>PORTFOLIO</p>
            <p className='mio bg-pink-400 border-pink-400'></p>
          <p className='wait'>Stick with me while I take you on a tour of my achievements.</p>
          <Card
            title="Landing Page"
            description="First page of a Website"
            imageUrl="./src/images/landingpage.png "
            buttonText="View Project"

            titles="Age Calculator"
            descriptions="You want to know your age?"
            imageUrls="./src/images/agecalculator.png "
            buttonTexts="View Project"

            titless="Tip Calculator"
            descriptionss="Tip Tip Tip!!"
            imageUrlss="./src/images/tipcalculator.png "
            buttonTextss="View Project"

            titlesss="Result Summary"
            descriptionsss="What did I get?"
            imageUrlsss="./src/images/resultsummary.png "
            buttonTextsss="View Project"

            titlessss="Form"
            descriptionssss="Fill up."
            imageUrlssss="./src/images/form.png "
            buttonTextssss="View Project"

            titlesssss="Hmm"
            descriptionsssss="Loading!!!!."
            imageUrlsssss="./src/images/portfolio.jpeg "
            buttonTextsssss="View Project"

          />
          </div>
        </div>
      </div>
      </motion.div>
  )
}

export default Portfolio
