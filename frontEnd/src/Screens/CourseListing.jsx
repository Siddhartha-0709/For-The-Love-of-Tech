import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CourseListing = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const getCourse = async () => {
    const response = await axios.get(`http://localhost:4000/api/v1/course/get`);
    setCourses(response.data);
  }

  useEffect(() => {
    getCourse();
  }, []);

  const CourseCard = ({ course }) => {
    return (
      <button
        className="bg-gray-800 text-white mb-4 rounded-lg pt-4 pb-4 w-full"
        onClick={() => {
          navigate(`/view-course?courseId=${course.courseName}`);
        }}
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 justify-center">
            <center>
              <img src={course.coverImage} className="w-4/5 h-60 rounded-lg" alt={course.title} />
            </center>
          </div>
          <div className="w-full md:w-2/3 p-4">
            <h5 className="text-2xl font-bold text-left mb-5">{course.courseName}</h5>
            <p className="text-left text-lg">{course.description}</p>
          </div>
        </div>
      </button>
    );
  };

  return (
    <div className="p-5 py-5 bg-gray-950 text-white">
      <h1 className="text-3xl font-bold mb-4">Explore Production Ready</h1>
      <h1 className="text-3xl font-medium mb-4">Easy to Understand Tech Courses</h1>
      {courses.map(course => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  );
};

export default CourseListing;

