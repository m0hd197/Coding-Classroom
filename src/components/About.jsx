import React from 'react'
import Header from './Header'
import Footer from './Footer'
import HomeLogo from '../assest/aboutCCR.svg'
import './HomeS.css'



const About = () => {
  return (
    <>
      <Header />
      <div className="CCR_About">
        <div className='about-page-logo'>
          <img className='Home_Logo' src={HomeLogo} alt="Home Logo" />
        </div>
        <div className='channel-about'>
          {/* <h3 className='Home_heading'>Coding <br/> Class<br/> Room</h3> */}

          <h3 className='about_heading'>About CCR</h3>
          <p className='Home_para'>Coding ClassRoom is an online community Where you will found content related to Coding and Programming field.</p>
          <p className='Home_para'>It’s totally free and awesome too!</p>
          <p className='Home_para'>I believe that you will enjoy the way we explained the concept/topic of every programming language</p>
          <p className='Home_para'>Learn Coding with Confidence</p>
        </div>

      </div>
      <Footer />
    </>

  )
}

export default About;




