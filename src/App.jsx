import { useState } from 'react';
import dxplogo from "../public/Images/dxplogo.png";
import imagedude from "../public/Images/imagedude.png";
import videoloop from "../public/Images/redloopvideo.mp4";
import githublogo from "../public/Images/Orion_github.svg";


const BASE_URL = import.meta.env.BASE_URL;
export default function App() {
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  function changeText() {
    var butao = document.getElementById("learnButton");
    var text = document.getElementById("textP");
    var textpT = document.getElementById("textPT");

    if (butao.innerHTML === "FAQ's") {
        butao.innerHTML = "Return";
        text.innerHTML = `
            <p style="margin-bottom: 15px;"><strong style="color: red;">1. What is DriverXpress?</strong> DriverXpress is an application designed to help find and install the necessary drivers for a computer to function properly. It simplifies the driver update and installation process, saving time and ensuring your system is always up-to-date.</p>
            <p style="margin-bottom: 15px;"><strong style="color: red;">2. How does DriverXpress work?</strong> DriverXpress scans your computer's hardware components to check for outdated or missing drivers. The app then allows you to download and install the latest drivers directly.</p>
            <p style="margin-bottom: 15px;"><strong style="color: red;">3. Is DriverXpress safe?</strong> Yes, DriverXpress is developed with a focus on user safety. It only downloads drivers from trusted sources and offers verified updates. We recommend always downloading the app directly from our official website or GitHub repository.</p>`;
        textpT.innerHTML = "Here are some frequently asked questions (FAQ's)";
    } else {
        butao.innerHTML = "FAQ's"; 
        text.innerHTML = "Regular driver updates ensure your hardware performs at its best. Outdated drivers can cause compatibility issues, crashes, and slowdowns. With DriverXPress, staying up-to-date has never been easier. Keep your system running smoothly with the latest drivers at your fingertips."; 
        textpT.innerHTML = "Why Keeping Your Drivers Updated Matters"; 
    }
}



  return (
    <>
      <header className="flex justify-between items-center p-4 bg-red-600">
        <div className="flex items-center space-x-4">
          <img
            src={dxplogo} 
            alt="DriverXPress Logo" 
            className="h-12 w-12 logo-spin" 
          />
          <h1 className="text-white text-4xl font-varelmo hover:text-black transition-colors duration-300 ease-in-out">
          DriverXPress
          </h1>
        </div>
        <nav className="flex items-center space-x-6">
         
         <a href="https://paypal.me/Souzawow" target='_blank'><button className="text-white hover:text-black transition-colors duration-300 ease-in-out flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="39px" fill="#e8eaed">
          <path d="M640-440 474-602q-31-30-52.5-66.5T400-748q0-55 38.5-93.5T532-880q32 0 60 13.5t48 36.5q20-23 48-36.5t60-13.5q55 0 93.5 38.5T880-748q0 43-21 79.5T807-602L640-440Zm0-112 109-107q19-19 35-40.5t16-48.5q0-22-15-37t-37-15q-14 0-26.5 5.5T700-778l-60 72-60-72q-9-11-21.5-16.5T532-800q-22 0-37 15t-15 37q0 27 16 48.5t35 40.5l109 107ZM280-220l278 76 238-74q-5-9-14.5-15.5T760-240H558q-27 0-43-2t-33-8l-93-31 22-78 81 27q17 5 40 8t68 4q0-11-6.5-21T578-354l-234-86h-64v220ZM40-80v-440h304q7 0 14 1.5t13 3.5l235 87q33 12 53.5 42t20.5 66h80q50 0 85 33t35 87v40L560-60l-280-78v58H40Zm80-80h80v-280h-80v280Zm520-546Z"/>
          </svg>
            Donate
          </button>
          </a>
          <div className="relative">
           <a href="https://github.com/souzaisrage/dxp-driversapp" target='_blank'><button className="text-white hover:text-black transition-colors duration-300 ease-in-out flex items-center">
              <img src={githublogo}
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
          src={videoloop} 
          autoPlay 
          muted 
          loop
        ></video>
        <div className="relative z-10 flex flex-col items-center space-y-6 text-white">
          <h2 className="text-4xl font-bold font">Optimize Your System with the Latest Drivers</h2>
          <button className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-full text-white flex items-center gap-2">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/windows-10.png" alt="Windows 10 Icon" className="w-5 h-5 pl-0 ml-0"/>
             Download
          </button>
        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </section>
      <section className="bg-black p-8">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img 
              src={imagedude}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 ">
            <h3 id="textPT" className="text-2xl font-bold mb-4  text-white">Why Keeping Your Drivers Updated Matters</h3>
            <p id="textP" className="text-white mb-4">
              Regular driver updates ensure your hardware performs at its best. Outdated drivers can cause
              compatibility issues, crashes, and slowdowns. With DriverXPress, staying up-to-date has never
              been easier. Keep your system running smoothly with the latest drivers at your fingertips.
            </p>
            <button onClick={changeText} id="learnButton" className="px-6 py-3 bg-red-600 hover:bg-red-500 rounded-full text-white">
              FAQ's
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
