import React from 'react';
import searchIcon from '../assets/images/search.svg';

interface SearchBarProps {
  searchTerm: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-[10px] px-4 py-2 ">
      <img src={searchIcon} alt="Search" className="h-5 w-5 mr-2" />
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearchChange}
        className="bg-transparent outline-none text-gray-600"
      />
    </div>
  );
};

export default SearchBar;
