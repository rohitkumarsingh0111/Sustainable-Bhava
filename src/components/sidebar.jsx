import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import dashboardIcon from '../assets/dashboard.png';

const SideBar = ({ selectedComponent, onSelect, isOpen, toggleSidebar }) => {
  // Retrieve user data from session storage
  const userDataString = sessionStorage.getItem('user');
  let userName = 'Guest';
  let profilePic = ''; // Fallback if no picture is provided
  if (userDataString) {
    const userData = JSON.parse(userDataString);
    userName = userData.name || 'Guest';
    profilePic = userData.picture || '';
  }

  return (
    <div
      className={`col-span-12 lg:col-span-2 bg-slate-900 rounded-lg shadow-md p-4 mb-4 lg:mb-0 ${
        isOpen ? 'block' : 'hidden'
      } lg:block`}
    >
      <div className="flex flex-col items-center mb-6">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="h-12 w-12 lg:h-24 lg:w-24 rounded-full mb-4 border-2 border-black-500 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black"
          />
        ) : (
          // Fallback UI if no profile pic exists
          <div className="h-12 w-12 lg:h-24 lg:w-24 rounded-full mb-4 bg-gray-400 flex items-center justify-center">
            <FontAwesomeIcon icon={faUser} className="text-white" />
          </div>
        )}
        <h4 className="font-bold text-center text-white">{userName}</h4>
      </div>
      <ul className="space-y-4">
        <li
          className={`p-2 rounded cursor-pointer flex items-center space-x-2 text-white ${
            selectedComponent === 'Profile'
              ? 'bg-gray-900 font-bold text-white'
              : 'hover:bg-gray-900'
          }`}
          onClick={() => onSelect('Profile')}
        >
          <FontAwesomeIcon icon={faUser} className={`${selectedComponent === 'Profile' ? 'text-orange-500' : ''}`} />
          <span>Profile</span>
        </li>
        <li
          className={`p-2 rounded cursor-pointer flex items-center space-x-2 text-white ${
            selectedComponent === 'Dashboard'
              ? 'bg-gray-900 font-bold'
              : 'hover:bg-gray-900'
          }`}
          onClick={() => onSelect('Dashboard')}
        >
          <img
            src={dashboardIcon}
            alt="Dashboard"
            className={`h-6 w-6 ${selectedComponent === 'Dashboard' ? 'orange-filter' : ''} text-white`}
          />
          <span>Dashboard</span>
        </li>
        <li
          className={`p-2 rounded cursor-pointer flex items-center space-x-2 text-white ${
            selectedComponent === 'SDGs' ? 'bg-gray-900 font-bold' : 'hover:bg-gray-900'
          }`}
          onClick={() => onSelect('SDGs')}
        >
          <FontAwesomeIcon icon={faBook} className={`${selectedComponent === 'SDGs' ? 'text-orange-500' : ''}`} />
          <span>SDGs</span>
        </li>
      </ul>
      <button
        onClick={toggleSidebar}
        className="lg:hidden mt-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </button>
    </div>
  );
};

export default SideBar;
