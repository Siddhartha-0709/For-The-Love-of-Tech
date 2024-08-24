import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Screens/HomePage';
import CoursePage from './Screens/VideoPage';
import CourseModules from './Screens/CourseModule';
import CourseListing from './Screens/CourseListing';
import VideoPlayer from './Screens/VideoPlayer';
import Upload from './Screens/Upload';
import UpdateCourse from './Screens/UpdateCourse';

function App() {
  return (
    <Router>
      <div>
        <header className="px-4 lg:px-0 h-12 flex items-center bg-black">
        <Link className="flex items-center justify-center ml-3" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
          </svg>
          <span className="sr-only">For The Love of Tech</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-m text-white font-medium hover:underline underline-offset-4" to="/courses">
            Courses
          </Link>
          <Link className="text-m text-white font-medium hover:underline underline-offset-4" href="#">
            About Us
          </Link>
          <Link className="text-m text-white font-medium hover:underline underline-offset-4" href="#">
            Contact Us
          </Link>
          <Link className="text-m text-white font-medium hover:bg-gray-50 underline-offset-4" href="#">
            <button type="button" className='bg-gray-50 px-10 h-12 py-4 text-gray-950 hover:bg-gray-50/90'>
              Chat with Us
            </button>
          </Link>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/video" element={<CoursePage />} />
          <Route path="/view-course" element={<CourseModules />} />
          <Route path="/courses" element={<CourseListing />} />
          <Route path="/video" element={<VideoPlayer />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/update-course" element={<UpdateCourse />} />
        </Routes>
      </div>
      <footer className="bg-black flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-m text-gray-400">© 2024 For The Love of Tech. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-white text-m hover:underline underline-offset-4" href="#">
            Courses
          </Link>
          <Link className="text-white text-m hover:underline underline-offset-4" href="#">
            About Us
          </Link>
          <Link className="text-white text-m hover:underline underline-offset-4" href="#">
            Contact Us
          </Link>
        </nav>
      </footer>
    </Router>

  );
}

export default App;
