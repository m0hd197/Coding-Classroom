import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ContactLogo from '../assest/contactCCR.svg'
import Facebook from '../assest/Soical_icons/facebook.svg'
import Instagram from '../assest/Soical_icons/instagram.svg'
import Twitter from '../assest/Soical_icons/twitter.svg'
import Github from '../assest/Soical_icons/github.svg'
import Youtube from '../assest/Soical_icons/youtube.svg'
import Gmail from '../assest/Soical_icons/gmail.svg'




const Contact = () => {
  return (
    <>
      <Header />
      <div className="CCR_Contact">
        <div className='contact-page-logo'>
          <img className='Home_Logo' src={ContactLogo} alt="Home Logo" />


        </div>
        <div className='channel-about'>
          <h3 className='about_heading'>Contact to CCR</h3>
          <p className='Home_para'>You can contact us on our social platform or Gmail</p>
          <div className='social_links'>
            <img className='contact_icon' src={Facebook} alt="facebook Link" />
            <img className='contact_icon' src={Instagram} alt="facebook Link" />
            <img className='contact_icon' src={Twitter} alt="facebook Link" />
            <img className='contact_icon' src={Github} alt="facebook Link" />
            <img className='contact_icon' src={Youtube} alt="facebook Link" />
            <img className='contact_icon' src={Gmail} alt="facebook Link" />
          </div>


        </div>

      </div>
      <Footer />
    </>
  )
}

export default Contact


