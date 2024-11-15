import React from 'react'
import './myprojects.css'
import IMG1 from '../../assets/profile.png'
import IMG2 from '../../assets/sahpharm.png'
import IMG3 from '../../assets/tin-dog-pro.png'
import IMG4 from '../../assets/pg1.png'
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
                <img src={IMG4} alt="" />
            </div>
            <h3>SahNecSite.</h3>
            <small className='text-light'>HTML | CSS | JS | ReactJs </small>
            <div className="portfolio__item-cta">
              <a href="https://sahnecsite.netlify.app" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
            </div>
              
        </article>

      <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG1} alt="" />
            </div>
            <h3>My Portfolio(This website)</h3>
            <small className='text-light'> HTML | CSS | JS | ReactJs</small>
            <div className="portfolio__item-cta">
              
              <a href="https://shyamsah.netlify.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>  
            </div>
            
            </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG2} alt="" />
            </div>
            <h3>SahPharmacy Online Medicine Shopping Platform.</h3>
            <small className='text-light'> HTML | CSS | JS | ReactJs </small>
            <div className="portfolio__item-cta">
            <a href="https://sahpharmacy.netlify.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
               
            </div>
            
        </article>

        <article className='portfolio__item'>
            <div className="portfolio__item-image">
                <img src={IMG3} alt="" />
            </div>
            <h3>Tin Dog Project Using Bootstrap.</h3>
            <small className='text-light'>HTML | CSS | Bootstrap</small>
            <div className="portfolio__item-cta">
              <a href="https://sahbootstrap.netlify.app/" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>
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
              <a href="https://www.kaggle.com/code/sahkumarshyam/gender-and-age-prediction-using-machine-learning" target="_blank" rel='noreferrer' className='btn btn-primary'>Project Live</a>
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
              <a href="https://www.kaggle.com/code/sahkumarshyam/speech-emotion-recognition-using-mlp-classifier-in/edit" target="_blank" rel='noreferrer' className='btn btn-primary'>Project Live</a>
            </div>
          </article>
      </div>
    </section>
  )
}

export default Myprojects