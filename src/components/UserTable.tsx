import React, { useState } from 'react';
import rightArrow from '../assets/images/arrow-right.svg'
import SearchBar from './Search';
import users from '../data/data.json'

const UserTable: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>(users);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = users.filter(user =>
            user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
        );

        setFilteredUsers(filtered);
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">All Users</h1>

                <div className='flex'>
                    <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

                    <div className="flex space-x-1">
                        <div>
                        <button className="border rounded px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200">
                            Filter
                        </button>
                        </div>
                       
                        <div className="relative">
                            <button className="border rounded px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200">
                                Sort by: Status
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">N°</th>
                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Status</th>
                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Full name</th>
                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Email</th>
                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Date</th>
                            <th className="py-2 px-4 border-b text-left text-sm font-medium text-gray-500">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="py-2 px-4 border-b border-gray-100 text-sm text-gray-700">{user.id}</td>
                                <td className="py-2 px-4 border-b border-gray-100 text-sm text-gray-700">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${user.color}`}>
                                        {user.initials}
                                    </div>
                                </td>
                                <td className="py-2 px-4 border-b border-gray-100 text-sm text-gray-700">{user.name}</td>
                                <td className="py-2 px-4 border-b border-gray-100 text-sm text-gray-700">{user.email}</td>
                                <td className="py-2 px-4 border-b border-gray-100 text-sm text-gray-700">{user.date}</td>
                                <td className="py-2 px-4 border-b border-gray-100 text-sm text-gray-700">...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between items-center py-8">
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                    <img className="transform rotate-180 mx-3" src={rightArrow} alt="Previous" />Previous
                </button>
                <div className="flex space-x-8">
                    <button className="text-blue-500">1</button>
                    <button className="text-gray-500">2</button>
                    <button className="text-gray-500">3</button>
                    <span className="text-gray-500">...</span>
                    <button className="text-gray-500">8</button>
                    <button className="text-gray-500">9</button>
                    <button className="text-gray-500">10</button>
                </div>
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                    Next <img className="mx-3" src={rightArrow} alt="Next" />
                </button>
            </div>
        </div>
    );
};

export default UserTable;
