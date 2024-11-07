import { useState } from 'react';


export default function App() {
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-red-600">
        <div className="flex items-center space-x-4">
          <img
            src="dist\dxplogo.png" 
            alt="DriverXPress Logo" 
            className="h-12 w-12 logo-spin" 
          />
          <h1 className="text-white text-4xl font-varelmo hover:text-black transition-colors duration-300 ease-in-out">
          DriverXPress
          </h1>
        </div>
        <nav className="flex items-center space-x-6">
          <button className="text-white hover:text-black transition-colors duration-300 ease-in-out flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="mr-2">
              <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg>
            FAQs
          </button>
         <a href="https://paypal.me/Souzawow?country.x=PT&locale.x=en_US" target='_blank'><button className="text-white hover:text-black transition-colors duration-300 ease-in-out flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="39px" fill="#e8eaed">
          <path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z"/>
          </svg>
            Donate
          </button>
          </a>
          <div className="relative">
           <a href="https://github.com/souzaisrage/dxp-driversapp" target='_blank'><button className="text-white hover:text-black transition-colors duration-300 ease-in-out flex items-center">
              <img src="dist\Orion_github.svg" 
              alt="Github Icon" 
              className="mr-2 h-6 w-6" />
            Github
            </button>
            </a> 
          </div>
        </nav>
      </header>
      <section className="relative flex items-center justify-center h-96 bg-gray-900">
        <video 
          className="absolute inset-0 w-full h-full object-cover blur-md" 
          src="dist\redloopvideo.mp4" 
          autoPlay 
          muted 
          loop
        ></video>
        <div className="relative z-10 flex flex-col items-center space-y-6 text-white">
          <h2 className="text-4xl font-bold font">Optimize Your System with the Latest Drivers</h2>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-full text-white">Download Now</button>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>
      <section className="bg-black p-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img 
              src="dist\imagedude.png" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 ">
            <h3 className="text-2xl font-bold mb-4  text-white">Why Keeping Your Drivers Updated Matters</h3>
            <p className="text-white mb-4">
              Regular driver updates ensure your hardware performs at its best. Outdated drivers can cause
              compatibility issues, crashes, and slowdowns. With DriverXPress, staying up-to-date has never
              been easier. Keep your system running smoothly with the latest drivers at your fingertips.
            </p>
            <button className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-full text-white">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
