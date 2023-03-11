import React from 'react'
import Header from './Header'
import Footer from './Footer'
// import HomeLogo from '../assest/logo.svg'
// import HomeLogo from '../assest/CodingClassRoom.svg'
// import './TR.css'
import './RT.css'

const Roadmaps = () => {
  return (
    <>
      <Header />
 
      <div className="CCR_Roadmap">
      <h1 className='real_life'>Full-Stack <span>Developer</span></h1>
      <div className='real-roadmap'>

        <div className='left-side-roadmaps'>
         <div className='skills'>
         <h1 className='skills-master'>Front-End Developer</h1>
        <p className='box_name_l '>HTMl</p>
        <p className='box_name_l '>CSS</p>
        <p className='box_name_l  '>JS</p>
        <p className='box_name_l  '>React</p>
        <p className='box_name_l  '>NodeJS</p>
        <p className='box_name_l  '>MongoDB</p>
        <p className='box_name_l  '>Python</p>
        <p className='box_name_l  '>Database</p>
         </div> 
         
         

        </div>
        <div className='right-side-roadmaps'>
        <div className='skills'>
        <h1 className='skills-master'>Back-End Developer</h1>
        <p className='box_name_r '>Data Structure</p>
        <p className='box_name_r '>Algorithm</p>
        <p className='box_name_r  '>Blockchain</p>
        <p className='box_name_r  '>Cryptography</p>
        <p className='box_name_r  '>Web 3.O</p>
        <p className='box_name_r  '>NFT</p>
        <p className='box_name_r  '>A.I</p>
        <p className='box_name_r  '>Excel</p>
         </div>
        </div>
</div>
      </div>
      <Footer />
    </>
  )
}

export default Roadmaps
