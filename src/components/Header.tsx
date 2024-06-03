import React from 'react';
import logo from '../assets/images/Logo.svg';
import search from '../assets/images/search.svg';
import notification from '../assets/images/bell.svg';
import dropdown from '../assets/images/angle.svg';
import web from '../assets/images/web.svg';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center  py-4  border-b border-gray-100">
      <img src={logo} alt="Logo" className="h-8" />
      <div className="flex items-center space-x-4">
        <img src={search} alt="Search" className="h-6 w-6 text-gray-500 hover:text-gray-700" />
        <img src={notification} alt="Notification" className="h-6 w-6 text-gray-500 hover:text-gray-700" />
        <div className="w-8 h-8 rounded-full bg-custom-blue text-white text-sm flex items-center justify-center">
          SA
        </div>
        <div className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
          <img src={web} alt="Web" className="h-6 w-6" />
          <span>En</span>
          <img src={dropdown} alt="Dropdown" className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
