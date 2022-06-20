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
              <BsCheck2 />
              <h3>Java</h3>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsCheck2 />
              <h3>ReactJS</h3>
              <small className='text-light'>Entry-level</small>
            </article>
            <article className='experience__details'>
              <BsCheck2 />
              <h3>HTML-CSS</h3>
              <small className='text-light'>Entry-level</small>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Core</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheck2 />
              <h3>Spring</h3>
              <small className='text-light'>Entry-Level</small>
            </article>
            <article className='experience__details'>
              <BsCheck2 />
              <h3>Java</h3>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <BsCheck2 />
              <h3>HTML-CSS</h3>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience