import React, { useEffect } from "react";
import "flowbite"; // Correctly import Flowbite
import bg1 from "../../assets/bg1.png";
import bg2 from "../../assets/bg2.png";
import bg3 from "../../assets/bg3.png";

const Slider = () => {
  // Optionally, you can initialize custom logic in useEffect if needed (e.g., auto-slide with a custom method).
  useEffect(() => {
    // Ensure the Flowbite carousel is initialized after the component mounts
    const carouselElement = document.querySelector("#default-carousel");

    // Clean up: manually disable interval if auto-slide is needed
    // This code won't interfere with Flowbite's built-in features.
    const interval = setInterval(() => {
      const nextButton = carouselElement.querySelector("[data-carousel-next]");
      if (nextButton) nextButton.click(); // Trigger next slide programmatically
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="mx-auto">
      <div
        id="default-carousel"
        className="relative overflow-hidden shadow-lg"
        data-carousel="static"
      >
        {/* Carousel Items */}
        <div className="relative h-96 md:h-[490px]" data-carousel-inner>
          {/* Slide 1 */}
          <div className="block duration-700 ease-in-out" data-carousel-item>
            <img
              src={bg1}
              className="object-cover w-full h-full"
              alt="Slide 1"
            />
          </div>
          {/* Slide 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={bg2}
              className="object-cover w-full h-full"
              alt="Slide 2"
            />
          </div>
          {/* Slide 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={bg3}
              className="object-cover w-full h-full"
              alt="Slide 3"
            />
          </div>
        </div>

        {/* Slider Indicators */}
        <div
          className="flex absolute bottom-5 left-1/2 z-30 -translate-x-1/2 space-x-2"
          data-carousel-indicators
        >
          <button
            type="button"
            className="w-10 h-2 rounded-full bg-white !bg-white border border-gray-300 
             shadow-md hover:!bg-gray-200 transition"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-10 h-2 rounded-full bg-white !bg-white border border-gray-300 
             shadow-md hover:!bg-gray-200 transition"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-10 h-2 rounded-full bg-white !bg-white border border-gray-300 
             shadow-md hover:!bg-gray-200 transition"
            data-carousel-slide-to="2"
          ></button>
        </div>

        {/* Slider Controls */}
        <button
          type="button"
          className="flex items-center justify-center absolute top-1/2 left-3 z-30 
             w-12 h-12 bg-white !bg-white border border-gray-300 
             shadow-md hover:!bg-gray-200 transition"
          data-carousel-prev
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <button
          type="button"
          className="flex items-center justify-center absolute top-1/2 right-3 z-30  w-12 h-12 bg-white !bg-white border border-gray-300 
             shadow-md hover:!bg-gray-200 transition"
          data-carousel-next
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slider;
