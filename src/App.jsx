import { useState } from 'react';

export default function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-red-600">
        <div className="flex items-center space-x-4">
          <img 
            src="/src/assets/dxplogo.png" 
            alt="DriverXPress Logo" 
            className="h-12 w-12 logo-spin" 
          />
          <h1 className="text-white text-4xl font-varelmo hover:text-black transition-colors duration-300 ease-in-out">
          DriverXPress
          </h1>
        </div>
        <nav className="flex items-center space-x-6">
          <button className="text-white hover:text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="mr-2">
              <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/>
            </svg>
            About
          </button>
          <button className="text-white hover:text-gray-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="mr-2">
              <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
            </svg>
            FAQs
          </button>
          <div className="relative">
            <button onClick={toggleDropdown} className="text-white hover:text-gray-400 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed" className="mr-2">
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/>
              </svg>
              Download
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 bg-red-600 text-white py-2 rounded shadow-lg z-10">
                <button className="block px-4 py-2 w-full text-left hover:bg-red-400">GitHub Repository</button>
                <button className="block px-4 py-2 w-full text-left hover:bg-red-400">Donate</button>
              </div>
            )}
          </div>
        </nav>
      </header>
 
      <section className="relative flex items-center justify-center h-96 bg-gray-900">
        <video 
          className="absolute inset-0 w-full h-full object-cover blur-md" 
          src="src\assets\redloopvideo.mp4" 
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
              src="" 
              alt="Driver Update" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 ">
            <h3 className="text-2xl font-bold mb-4">Why Keeping Your Drivers Updated Matters</h3>
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
