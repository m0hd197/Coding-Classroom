import React from 'react'
import { Link } from 'react-router-dom'

import './contents.css'
import CourseBanner from '../assest/coursebanner.jpg'

const CourseSix = () => {
    return (
  
        <div className="right_content" >
                         <h1 className="content-heading_big">HTML Tutorials</h1>
                         <div className="real_content">
                             <div className="introduction">
                                 <h6 className='heading_6'>HTML is the standard markup language for Web pages.</h6>
                                 <h6 className='heading_6'>With HTML you can create your own Website</h6>
                                 <h6 className='heading_6'>HTML is easy to learn - You will enjoy it!</h6>
                                 <div className="button-content">
                                 <button className="btn">Study our Free HTML</button> 
                                <button className="btn">Wtach Our Video Tutorials</button> 
                             </div>
                         </div>
 
                         <h1 className="content-heading_normal">Easy Learning with HTML "Try it Yourself</h1>
                         
                       
                             <div className="Btn-on-img" >
                                 <img className="img-course-banner" src={CourseBanner} alt ="Please reload the page"/>
                                 <button className="btn-try-code">Try it Yourself</button> 
                             </div>
                      
                         <h1 className="content-heading_normal">HTML Examples</h1>
                         <h6 className="paragraph">In this HTML tutorial, you will find more than 200 examples. With our online "Try it Yourself" editor, you can edit and test each example yourself.</h6>
                     
                         <div className="offer_for_newbie">
                             <div className="offer-benefits">
                                 
 
                                     <div className="offer_title">
                                         <h1 className="offer_title_para">KickStart your carrer</h1>
                                     </div>
 
                                     <div className="offer_benefits">
                                         <h3 className="offer_benefits_para">Get certified by completing a course</h3>
                                     </div>
 
                                     <div className='offer_apply'>
                                     <button type="button" className="offer_apply_btn">Get Started</button>
                                     </div>
 
                                  
                             </div>
                         </div>
 
 
                         <div className="continue_course_buttons">
                        <Link to='../course5' className="previous_page BTN">Previous</Link>
                        <Link to='../course7' className="next_page BTN">Next</Link>   
                        </div>
                     </div>
                     </div>
   
   )
}

export default CourseSix
