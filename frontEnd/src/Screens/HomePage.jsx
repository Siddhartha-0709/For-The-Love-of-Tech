import { Link, useNavigate } from "react-router-dom";
import dp from "../assets/dp.png";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
function HomePage() {
  const [recentCourses, getRecentCourses] = useState([]);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const getRecent = async () => {
    try {
      setLoader(true);
      const response = await axios.get('https://for-the-love-of-tech.onrender.com/api/v1/course/get-recent');
      console.log(response.data);
      getRecentCourses(response.data);
      setLoader(false);
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getRecent();
  }, []);
  return (
    <div className="flex flex-col min-h-[100vh] bg-gray-950 text-gray-50">
      <main className="flex-1">
        <section className="w-full py-12 sm:py-24 lg:py-32 mx-auto">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                    Easy to Understand
                  </h1>
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">
                    Production Ready Tutorials
                  </h1>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Unlock your potential with our comprehensive computer science courses. Dive into the world of
                    coding, algorithms, and problem-solving.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/90 dark:focus-visible:ring-gray-700"
                    to="/courses"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
              <img
                src={dp}
                alt="Hero"
                className="w-full max-w-lg rounded-full shadow-2xl"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-4 sm:py-24 lg:py-4 bg-gray-900">
          <h1 className="text lg font-medium text-center tracking-tighter sm:text-5xl xl:text-3xl mb-1 mt-10" >Home for The Tech Lovers</h1>
          <nav className=" px-4 md:px-6 flex flex-wrap justify-center">
            <button className="px-4 bg-white m-4 w-40 h-10 text-black rounded-lg hover:bg-orange-400 hover:text-white transition-colors duration-300"
              onClick={() => navigate('/courses')}
            >
              <h1>Courses</h1>
            </button>
            <a href="https://whatsapp.com/channel/0029VagqJpP9xVJcH9jVYL2M">
              <button className="px-4 bg-white m-4 w-40 h-10 text-black rounded-lg hover:bg-orange-400 hover:text-white transition-colors duration-300">
                <h1>Join WhatsApp</h1>
              </button>
            </a>
            <a href="https://github.com/Siddhartha-0709">
              <button className="px-4 bg-white m-4 w-40 h-10 text-black rounded-lg hover:bg-orange-400 hover:text-white transition-colors duration-300">
                <h1>GitHub</h1>
              </button>
            </a>
            <a href="https://www.youtube.com/@codewith_sidd">
              <button className="px-4 bg-white m-4 w-40 h-10 text-black rounded-lg hover:bg-orange-400 hover:text-white transition-colors duration-300">
                <h1>YouTube</h1>
              </button>
            </a>
            <a href="http://blogs.siddharthapro.in/">
              <button className="px-4 bg-white m-4 w-40 h-10 text-black rounded-lg hover:bg-orange-400 hover:text-white transition-colors duration-300">
                <h1>Blogs</h1>
              </button>
            </a>
            <hr className="my-4 mb-10" style={{ borderWidth: 2, width: '100%' }} />
          </nav>
          <div className="px-6 md:px-6">
            {loader ? (<div className="mt-10 flex justify-center pb-10 pt-10">
              <Loader />
            </div>)
              : (<div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-4 justify-center items-center">
                {recentCourses.map((course) => (
                  <button className="rounded-lg bg-gray-950 p-6 shadow-sm" key={course._id} onClick={() => navigate(`/view-course?courseId=${course.courseName}`)}>
                    <img
                      src={course.coverImage}
                      width="600"
                      alt="Course Image"
                      className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                    />
                    <div className="mt-4 space-y-2">
                      <h3 className="text-xl font-bold text-left">{course.courseName}</h3>
                      <p className="text-gray-400 text-left">{course.description.substr(0, 200)}...</p>
                    </div>
                  </button>
                ))}
              </div>)}
          </div>
        </section>
        <section className="w-full py-12 sm:py-24 lg:py-32 mx-auto">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Us</h2>
                  <p className="max-w-[600px] text-gray-400 md:text-xl">
                    Our goal is to build a community of developers who are passionate about coding and building cool stuff. We believe that a lot can be achieved when great minds work together and our discord is like a coding hostel for developers.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/90 dark:focus-visible:ring-gray-700"
                    href="#"
                  >
                    Explore Community
                  </a>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/djf6ew5uc/image/upload/v1723904549/for-the-love-of-tech/q0qpdsz2lqkazoyrpz36.png"
                width="550"
                height="310"
                alt="About Us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
