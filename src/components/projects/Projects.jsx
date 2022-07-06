import React from 'react'
import './project.css'
import IMG1 from '../../assets/projects1.png'
import IMG2 from '../../assets/projects2.jpg'
import IMG3 from '../../assets/projects3.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Extracting data from tables using YOLO5 and Tabula',
    github: 'https://github.com/thitboxao0909/FlyingPenguins'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Native Android-Firebase app hub for renting rooms',
    github: 'https://github.com/thitboxao0909/RoomControl'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Basic facial recognition with Eigenface technique',
    github: 'https://github.com/thitboxao0909/Eigenface'
  }
]


const Projects = () => {
  return (
    <section id='projects'>
      <h5>Recent Projects</h5>

      <div className='container projects__container'>
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='projects__items'>
                <div className="projects__items-image">
                  <img src={image} alt={title} />
                </div>
                <h2>{title}</h2>
                <div className='projects__items-cta'>
                 <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects