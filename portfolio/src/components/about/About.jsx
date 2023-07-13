import React from 'react'
import './about.css'
import ME from '../../assets/Metro-Boomin-Spider-Man.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt='About Image'/>
        </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>Still Learning</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>3 local</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>20+ Completed</small>
          </article>
        </div>

        <p>
                Hi my name is Micheal, i am 22 years old. I run a business with my family full time but when im not at work
                im either at the gym or studying.
                The reason why I choose to study software development is due to the fact that i always had a passion for coding and 
                wanted to see if i can expand my skill set and see if i am able to land a carrer. I started coding back in year 12 with a basic web page I was
                doing for my family business at the time just to brush up on my skills
        </p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About