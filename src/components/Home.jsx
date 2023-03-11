import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import HomeLogo from '../assest/logo.svg'
import HomeLogo from '../assest/CodingClassRoom.svg'
import './HomeS.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="CCR_Home">
        <div className='main-page-logo'>
          <img className='Home_Logo' src={HomeLogo} alt="Home Logo" />
        </div>
        <div className='channel-name-motto'>
          {/* <h3 className='Home_heading'>Coding <br/> Class<br/> Room</h3> */}
          <h3 className='Home_heading'>CCR</h3>
          <p className='Home_para'>Learn Coding with Confidence</p>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Home
