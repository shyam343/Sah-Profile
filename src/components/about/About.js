import React from 'react'
import './about.css'
import myImage from '../../assets/my-image.jpg'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          <div className="about__me">
            <div className="about__me-image">
                <img src={myImage} alt="Me" />
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>B.Tech in Computer Engneering<br /><i>Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current CGPA</h5>
                  <small>8.38</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      <li>Web Development</li>
                      <li>Machine Learning</li>
                      <li>Programming</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I'm a <b>Software Engineering Undergradute</b> at the Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology. 
                    I'm an enthusiastic and driven Software Engineering student seeking a challenging internship opportunity to apply 
                    and expand my technical skills. 
                    With a strong academic foundation in software engineering and hands-on experience in various programming languages,
                    I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About