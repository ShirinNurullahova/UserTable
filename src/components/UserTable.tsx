import React, { useEffect, useState } from 'react';
import rightArrow from '../assets/images/arrow-right.svg';
import SearchBar from './Search';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getUsers, selectAllUsers } from '../redux/slices/userSlice';
import dots from './../assets/images/dots-horizontal.svg';
import EditUser from './EditUser';
import dropDownIcon from './../assets/images/Vector.svg'
import filterIcon from '../assets/images/filter.svg'



const UserTable: React.FC = () => {
  const users = useAppSelector(selectAllUsers);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(term) || user.email.toLowerCase().includes(term)
    );

    setFilteredUsers(filtered);
  };

  const handleEditUser = (userId: number) => {
    setEditingUserId(userId);
  };

  

  const closeEditUser = () => {
    setEditingUserId(null);
  };

  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Users</h1>

        <div className='flex'>
          <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

          <div className="flex space-x-1 ml-3">
            <div>
              <button className="outline-none flex items-center justify-center rounded-[10px] px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200">
                <img className="h-5 w-5 mr-2"  src={filterIcon}/>
                Filter
              </button>
            </div>

            <div className="relative">
              <button className="outline-none flex items-center justify-center rounded-[10px] px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200">
                <span className='text-gray-600'>Short By</span>: Status
                <img className="ml-2"  src={dropDownIcon}/>
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
            {filteredUsers?.map((user) => (
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
                <td className="py-2 px-4 border-b cursor-pointer border-gray-100 text-sm text-gray-700">
                  <img src={dots} alt="edit" onClick={() => handleEditUser(user.id)} />
                  {editingUserId === user.id && <EditUser user={user} onClose={closeEditUser} />}
                </td>
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
