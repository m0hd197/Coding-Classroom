 import './App.css'
 import { BrowserRouter , Routes, Route } from 'react-router-dom';
 import Navbar from "./components/Navbar";
 import Home from './components/Home'
 import './App.css'

 import About from './components/About'
 import Contact from './components/Contact'
 import Tools from './components/Tools'
 import Roadmaps from './components/Roadmaps'
 
//  import Navbar from './components/Navbar';

//  import Home2 from './pages/Home'

 import CourseOne from './pages/CourseOne'
import CourseTwo from './pages/CourseTwo'
import CourseThree from './pages/CourseThree'
import CourseFour from './pages/CourseFour'
import CourseFive from './pages/CourseFive'
import CourseSix from './pages/CourseSix'
import CourseSeven from './pages/CourseSeven'
import CourseEight from './pages/CourseEight'
import CourseNine from './pages/CourseNine'
import CourseTen from './pages/CourseTen'
import CourseEleven from './pages/CourseEleven'
import CourseTwelve from './pages/CourseTwelve'
import CourseThirteen from './pages/CourseThirteen'
 
 
 
function App() {
  return (
    <div >
    <BrowserRouter>
    
    {/* <Navbar/> */}
      <Routes>

       <Route path='/' element={<Home/>}/>
       <Route path="/" exact element={<Home/>} />
       <Route path='about' element={<About/>}/>
       <Route path='contact' element={<Contact/>}/>
       <Route path='tools' element={<Tools/>}/>
       <Route path='roadmaps' element={<Roadmaps/>}/>


       <Route path='*' element={<h1 className='charzerofour'>404 Ka Jhatka Lga ?</h1>}/>



       <Route path='course' element={<Navbar/>}>
       {/* <Route path='coursHome' element={<Home2/>}/> */}
        <Route path="course1" element={<CourseOne/>} />
        <Route path="course2" element={<CourseTwo/>} />
        <Route path="course3" element={<CourseThree/>} />
        <Route path="course4" element={<CourseFour/>} />
        <Route path="course5" element={<CourseFive/>} />
        <Route path="course6" element={<CourseSix/>} />
        <Route path="course7" element={<CourseSeven/>} />
        <Route path="course8" element={<CourseEight/>} />
        <Route path="course9" element={<CourseNine/>} />
        <Route path="course10" element={<CourseTen/>} />
        <Route path="course11" element={<CourseEleven/>} />
        <Route path="course12" element={<CourseTwelve/>} />
        <Route path="course13" element={<CourseThirteen/>} />
      </Route>
      
    
  
      </Routes>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
