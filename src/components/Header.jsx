import React from 'react'
import {Link} from 'react-router-dom'
import './HomeS.css'

const Header = () => {
  return (
   
    <div className='CCR_Header'>
   <Link className='header_link' to='/'>Home</Link>
   <Link className='header_link' to='/about'>About</Link>
   <Link className='header_link' to='/contact'>Contact</Link>
   <Link className='header_link' to='/course'> Course</Link>
   <Link className='header_link' to='/tools'>Tools</Link>
   <Link className='header_link' to='/roadmaps'>Roadmaps</Link>
  
    </div>
  )
}

export default Header
