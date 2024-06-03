import React from 'react';

interface Action {
  text: string;
  icon: string;
  onClick: () => void;
}

interface DropdownMenuProps {
  actions: Action[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ actions }) => {
  return (
   
      <div className="absolute right-[20px] z-1000 w-48 bg-white border border-gray-200 rounded shadow-lg">
        {actions.map((action, index) => (
          <button
            key={index}
            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            onClick={action.onClick}
          >
            <img src={action.icon} alt="" className="h-4 w-4 mr-2" />
            {action.text}
          </button>
        ))}
      </div>
 
  );
};

export default DropdownMenu;
