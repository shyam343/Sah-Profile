import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/profile.png'
import IMG2 from '../../assets/age-cal-pro.png'
import IMG3 from '../../assets/tin-dog-pro.png'
import IMG4 from '../../assets/drum-kit-pro.png'
import IMG5 from '../../assets/age-gender.jpg'
import IMG6 from '../../assets/speech-img.png'

const Myprojects = () => {
  return (
    <section id='myprojects'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'>ReactJs</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/Thakshila-Bandara/my-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
              <a href="https://thakshila-bandara.github.io/my-portfolio/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
            </article>

      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>AGE-CALCULATOR</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shyam343/Age-Calculator" target="_blank" rel='noreferrer' className='btn'>Github</a>  
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Tin Dog Project Using Bootstrap.</h3>
            <small className='text-light'>HTML | CSS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shyam343/Bootstrap" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG4} alt="" />
            </div>
            <h3>DrumKit-Project.</h3>
            <small className='text-light'>HTML | CSS | JS </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shyam343/DrumKit-Project" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG5} alt="" />
            </div>
            <h3>REAL-TIME-AGE-GENDER-PREDICTION-AND-CLASSIFICATION-USING-MACHINE-LEARNING.</h3>
            <small className='text-light'>Machine Learning | Python </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shyam343/REAL-TIME-AGE-GENDER-PREDICTION-AND-CLASSIFICATION-USING-MACHINE-LEARNING" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
              
        </article>
        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG6} alt="" />
            </div>
            <h3>SPEECH-EMOTION-RECOGNITION-USING-MLP-CLASSIFIER-IN-MACHINE-LEARNING..</h3>
            <small className='text-light'>Machine Learning | Python | Jupyter Notebook </small>
            <div className="portfolio__item-cta">
              <a href="https://github.com/shyam343/REAL-TIME-AGE-GENDER-PREDICTION-AND-CLASSIFICATION-USING-MACHINE-LEARNING" target="_blank" rel='noreferrer' className='btn'>Github</a>
            </div>
          </article>
      </div>
    </section>
  )
}

export default Myprojects