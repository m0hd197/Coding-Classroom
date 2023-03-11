import React from "react";
import { Link  , Outlet} from "react-router-dom";
import './Navbar.css'


const Navbar = () => {
    return (<>
    <div className="back_btn"><Link className="btn" to='../'>Back Home</Link></div>
        <div className="Course_Home">
<h1>Let's HTML :) </h1>
        </div>
            <div className="course_content_list" >
                <div className="course_content_list_link"  >
                    <h5 className="course_content_heading" >HTML Tutorials</h5>
                    {/* <Link className="course_content_link" to='coursHome'>HTML Home</Link> */}
                    <Link className="course_content_link" to='course1'>HTML Introduction</Link>
                    <Link className="course_content_link" to='course2'>HTML Editors</Link>
                    <Link className="course_content_link" to='course3'>HTML Basic</Link>
                    <Link className="course_content_link" to='course4'>HTML Elements</Link>
              
                    <h5 className="course_content_heading">HTML Forms</h5>
                    <Link className="course_content_link" to='course5'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course6'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course7'>HTML Formatting</Link>

                    <h5 className="course_content_heading">HTML Graphics</h5>
                    <Link className="course_content_link" to='course8'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course9'>HTML Formatting</Link>

                    <h5 className="course_content_heading">HTML Media</h5>
                    <Link className="course_content_link" to='course10'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course11'>HTML Formatting</Link>
                    <Link className="course_content_link " to='course12'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course10'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course11'>HTML Formatting</Link>
                    <Link className="course_content_link " to='course12'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course10'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course11'>HTML Formatting</Link>
                    <Link className="course_content_link " to='course12'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course11'>HTML Formatting</Link>
                    <Link className="course_content_link " to='course12'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course10'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course11'>HTML Formatting</Link>
                    <Link className="course_content_link " to='course12'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course10'>HTML Formatting</Link>
                    <Link className="course_content_link" to='course11'>HTML Formatting</Link>
                    <Link className="course_content_link margin-bottom" to='course12'>HTML Formatting</Link>
                 
                </div>
                <Outlet />
        
              
            </div>
            </>
    );
}


export default Navbar;