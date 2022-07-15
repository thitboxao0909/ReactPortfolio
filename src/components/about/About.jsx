import React from 'react'
import './about.css'
import ME from '../../assets/cat.jpg'
import {GiSoccerBall} from 'react-icons/gi'
import {FaGraduationCap} from 'react-icons/fa'
import {GiCat} from 'react-icons/gi'

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
              <GiCat className='about__icon-cat'/>
              <h5>Cats</h5>
              <small>Are our Gods</small>
            </article>

            <article className='about__card'>
              <GiSoccerBall className='about__icon'/>
              <h5>Hobbies</h5>
              <small>Gundams and football</small>
            </article>
          </div>
          
          <p>
            Hello there! Welcome to this small corner of the Internet that is my page. Not much here yet as I just graduated and
            trying to learn as much as I can. If anything peaked your interest, shoot me a message! I'd love to hear what you think, even 
            play some games over Steam together. I do love cats though, so please send me some pics of your cat if you have one (or many)!
            Anyway, have a lovely day. 
          </p>

          <a href='#contact' className='btn btn-primary'>Let's have a Chat!</a>

        </div>
      </div>
    </section>
  )
}

export default About