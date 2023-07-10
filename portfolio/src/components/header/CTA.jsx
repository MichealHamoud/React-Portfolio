import React from 'react'
import Resume from '../../assets/resume.PNG'

const CTA = () => {
  return (
    <div classname='cta'>
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact</a>
    </div>
  )
}

export default CTA