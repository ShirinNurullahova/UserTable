import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../assets/images/house.svg';
import settingsIcon from '../assets/images/settings.svg';

const Breadcrumb: React.FC = () => {
  return (
    <nav className="flex items-center justify-between  py-4 space-x-2 text-gray-500 w-full border-b border-gray-100">
      <div  className="flex items-center space-x-2">
        <img src={homeIcon} alt="Home" className="h-5 w-5" />
        <span className="text-gray-400">›</span>
        <Link to="/" className="hover:text-gray-700">Home</Link>
        <span className="text-gray-400">›</span>
        <Link to="/users" className="text-blue-500 hover:text-blue-700">Users</Link>

      </div>


      <div className="ml-auto">
        <img src={settingsIcon} alt="Settings" className="h-5 w-5" />
      </div>
    </nav>
  );
};

export default Breadcrumb;
