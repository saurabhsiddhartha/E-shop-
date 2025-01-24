import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1
            className="text-2xl text-center sm:text-left sm:text-4xl font-semibold"
          >
            Get Notified About New Products
          </h1>
          <input
            type="email"
            data-aos="fade-up"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            className="w-full sm:w-auto px-6 py-2 mt-4 bg-primary text-white rounded-full hover:scale-105 transition duration-300"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
