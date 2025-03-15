import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>   
      <h2>My Experience</h2>
      <div className="container experience__container">  
      <div className="bg-black text-white p-6 rounded-lg max-w-md mx-auto shadow-lg">
      <h3 className="text-yellow-500 text-xl font-bold mb-4">2024(AUG)-Present</h3>
      <h2 className="text-2xl font-semibold">
  CAS TOTAL SOLUTION <span className="text-base font-normal">(as <i>Software Developer</i>)</span>
</h2>     
          <small>JavaScript and JSP Development,Oracle Database Management,Finacle Customization,API Integration</small>

  <div class="mb-4">
    <h2 class="text-2xl font-semibold">NBA Loan Write-Off Project</h2>
    <small>Developed the frontend with various menus and handled backend processes to ensure seamless functionality.</small>
  </div>

  <div class="mb-4">
    <h2 class="text-2xl font-semibold">EBL Version Upgrade Project</h2>
    <small>Contributed to the version upgrade process, enhancing system performance and ensuring a smooth transition.</small>
  </div>


    </div>




        <div className="experience__frontend">
            <h3>Frontend Development</h3>

            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>ReactJs</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
     {/* End of frontend part */}

        <div className="experience__backend">
            <h3>Programming Skills</h3>
            <div className="experience__content">

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java Programming</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Linux</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>SQL</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>
              
              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Machine Learning</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Python Programming</h4>
                  <small className='text-light'>Beginner</small>
                </div>
              </article>

            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience