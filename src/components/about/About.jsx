import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {GiSoccerBall} from 'react-icons/gi'
import {FaGraduationCap} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h4>Hi</h4>
      <h2>Some about me</h2>
      
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaGraduationCap className='about__icon' />
              <h5>Graduated from</h5>
              <small>La Trobe University</small>
            </article>

            <article className='about__card'>
              
            </article>

            <article className='about__card'>
              <GiSoccerBall className='about__icon'/>
              <h5>Hobbies</h5>
              <small>Gundams and football</small>
            </article>

            <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Ea tempore dicta quas voluptas hic culpa praesentium reiciendis numquam, 
            ipsam corporis nihil odit saepe et neque dolore fugiat! Quaerat, voluptas! Voluptatibus.
            </p>
          </div>
          <a href='#contact' className='btn btn-primary'>Contact Me!</a>
        </div>
      </div>
    </section>
  )
}

export default About