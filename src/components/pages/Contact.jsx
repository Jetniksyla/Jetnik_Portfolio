import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email.includes('@')) {
      console.log('Submitting form data:', formData);
      alert('Thank you for your message!');
      // Here I might want to integrate an actual submission logic in the future, via an API
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="font-roboto max-w-lg mx-auto my-10 p-8 bg-gray-100 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-6 text-indigo-600">Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-800">Name:</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white"
            placeholder="Enter your name"
            required
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-800">Email:</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white"
            placeholder="Enter your email"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="text-gray-800">Message:</span>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:bg-white"
            rows="4"
            placeholder="Your message"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
        >
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Contact;


