import '../App.css';
import React, { useState, useEffect } from 'react';
import Dashboard from './dashbored';
import SideBar from './sidebar';
import Sdg from './sdg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faBook } from '@fortawesome/free-solid-svg-icons';
import dashboardIcon from '../assets/dashboard.png';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const Learn = () => {
  const navigate = useNavigate();

  // Check if user is logged in by retrieving data from session storage
  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (!user) {
      // If no user data found, redirect to SignIn page
      navigate('/signin');
    }
  }, [navigate]);

  const [selectedComponent, setSelectedComponent] = useState('SDGs');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarSelection = (component) => {
    setSelectedComponent(component);
    setIsSidebarOpen(false); // Close sidebar after selecting an option in mobile view
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  let renderComponent;
  if (selectedComponent === 'Dashboard') {
    renderComponent = <Dashboard />;
  } else if (selectedComponent === 'SDGs') {
    renderComponent = <Sdg />;
  } else {
    renderComponent = <div></div>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 h-screen w-screen flex flex-col">
        <header className="flex justify-between items-center p-4 bg-white shadow-md lg:hidden">
          <h1 className="text-3xl font-bold text-blue-600">Welcome to My Sustainable App</h1>
        </header>
        <main className="flex-grow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 p-6 bg-gray-100 h-full w-full">
            <SideBar
              selectedComponent={selectedComponent}
              onSelect={handleSidebarSelection}
              isOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
            />
            {renderComponent}
          </div>
        </main>
        <footer className="fixed bottom-0 left-0 right-0 bg-white shadow-md lg:hidden flex justify-around p-2">
          <button
            onClick={() => handleSidebarSelection('Profile')}
            className={`flex flex-col items-center focus:outline-none ${
              selectedComponent === 'Profile' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <FontAwesomeIcon icon={faUser} size="lg" />
          </button>
          <button
            onClick={() => handleSidebarSelection('Dashboard')}
            className={`flex flex-col items-center focus:outline-none ${
              selectedComponent === 'Dashboard' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <img
              src={dashboardIcon}
              alt="Dashboard"
              className={`h-6 w-6 ${selectedComponent === 'Dashboard' ? 'orange-filter' : ''}`}
            />
          </button>
          <button
            onClick={() => handleSidebarSelection('SDGs')}
            className={`flex flex-col items-center focus:outline-none ${
              selectedComponent === 'SDGs' ? 'text-orange-500' : 'text-gray-500'
            }`}
          >
            <FontAwesomeIcon icon={faBook} size="lg" />
          </button>
        </footer>
      </div>
    </>
  );
};

export default Learn;
