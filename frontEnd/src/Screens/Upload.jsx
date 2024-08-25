import React, { useState } from 'react';
import axios from 'axios';
const Upload = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    youtubeUrl: '',
    courseName: '',
    author: '',
    title: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    try {
      const response = await axios.post('https://for-the-love-of-tech.onrender.com/api/v1/video/upload', formData);
      console.log('Upload response:', response.data);
    } catch (error) {
      console.error('Upload error:', error);
    }
    // setFormData({
    //   youtubeUrl: '',
    //   courseName: '',
    //   author: '',
    //   title: ''
    // });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            YouTube URL:
            <input
              type="url"
              name="youtubeUrl"
              value={formData.youtubeUrl}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Course Name:
            <input
              type="text"
              name="courseName"
              value={formData.courseName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Author:
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </label>
        </div> */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Upload;
