import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-yellow-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-rose-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 resize-none"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-400 text-white font-bold py-2 px-4 rounded-full m-auto max-w-[120px] flex justify-cente flex items-center hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Send
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default ContactUs;
