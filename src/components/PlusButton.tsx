import React from 'react';
import plusIcon from '../assets/images/plus.svg'; 

const PlusButton: React.FC = () => {
  return (
    <button className="bg-blue-600 text-white p-2 rounded">
      <img src={plusIcon} alt="Plus" className="h-4 w-4" />
    </button>
  );
};

export default PlusButton;
