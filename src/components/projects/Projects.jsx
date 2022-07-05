import React from 'react'
import './project.css'
import IMG1 from '../../assets/projects1.jpg'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>Recent Projects</h5>
      <div className="containter projects__containter">
        <article className='projects__item'>
          <div className="projects__item-image"></div>
          <h2>Project title</h2>
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          
        </article>
      </div>
    </section>
  )
}

export default Projects