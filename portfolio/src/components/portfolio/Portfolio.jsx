import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/tenuto.png'
import IMG2 from '../../assets/Recipe Bank.PNG'
import IMG3 from '../../assets/Weather Dashboard.png'
import IMG4 from '../../assets/text-editor.png'
import IMG5 from '../../assets/work-day.png'
import IMG6 from '../../assets/Note-Taker.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container potfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
            </div>
            <h3>Project #1</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/L10N37/Tenuto" className='btn' target='_blank'>Tenuto</a>
            <a href="https://l10n37.github.io/Tenuto/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
            </div>
            <h3>Project #2</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sanjaybenu/recipe-bank" className='btn' target='_blank'>Recipe Bank</a>
            <a href="https://github.com/sanjaybenu/recipe-bank" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
            </div>
            <h3>Project #3</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/MichealHamoud/weather-application" className='btn' target='_blank'>Weather Dashboard</a>
            <a href="https://michealhamoud.github.io/weather-application/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
            </div>
            <h3>Project #4</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/MichealHamoud/text-edit" className='btn' target='_blank'>Text Editor</a>
            <a href="To be added" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
            </div>
            <h3>Project #5</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/MichealHamoud/work-day-scheduler" className='btn' target='_blank'>Work Day Schedular</a>
            <a href="https://michealhamoud.github.io/work-day-scheduler/" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
            </div>
            <h3>Project #6</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/MichealHamoud/Note_taker" className='btn' target='_blank'>Note Taker</a>
            <a href="To Be Added" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        </div>
    </section>
  )
}

export default Portfolio