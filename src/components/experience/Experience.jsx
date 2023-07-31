import React from 'react'
import './experience.css'
import {BsCheck2} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills:</h5>
      <h2>What I know</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Core</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheck2 className='experience__details-icon'/>
              <div>
                <h2>Java</h2>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2 className='experience__details-icon'/>
              <div>
                <h2>Springboot</h2>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2 className='experience__details-icon'/>
              <div>
                <h2>React</h2>
                <small className='text-light'>Entry-level</small>
              </div>
            </article>
          </div>
        </div>



        <div className="experience__backend">
        <h3>Learning</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheck2 className='experience__details-icon'/>
              <div>
                <h2>Gitlab CICD</h2>
                <small className='text-light'>Entry-level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2 className='experience__details-icon'/>
              <div>
                <h2>Unreal Engine 5</h2>
                <small className='text-light'>Entry-level</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheck2 className='experience__details-icon'/>
              <div>
                <h2>Python</h2>
                <small className='text-light'>Entry-level</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
