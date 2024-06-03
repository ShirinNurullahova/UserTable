import React, { useEffect, useState } from 'react';
import SearchBar from './Search';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getUsers, selectAllUsers } from '../redux/slices/userSlice';
import dots from './../assets/images/dots-horizontal.svg';
import EditUser from './EditUser';
import dropDownIcon from './../assets/images/Vector.svg'
import filterIcon from '../assets/images/filter.svg'
import Pagination from './Pagination';



const UserTable: React.FC = () => {
  const users = useAppSelector(selectAllUsers);
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState<User[]>(users);
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
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
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  return (
    <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
      <div className="flex justify-between items-center ">
        <h1 className="text-[23px] font-bold ">All Users</h1>

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
      <div className="overflow-x-auto mt-[32px]">
        <table className="min-w-full">
          <thead>
            <tr  className='mb-[20px]'>
              <th className="py-2  border-b  border-gray-100 text-left text-[16px] font-medium text-black w-[50px]">N°</th>
              <th className="py-2  border-b border-gray-100 text-left text-[16px] font-medium text-black w-[100px]">Status</th>
              <th className="py-2  border-b border-gray-100 text-left text-[16px] font-medium text-black w-[200px]">Full name</th>
              <th className="py-2  border-b border-gray-100 text-left text-[16px] font-medium text-black w-[300px]">Email</th>
              <th className="py-2  border-b border-gray-100 text-left text-[16px] font-medium text-black ">Date</th>
              <th className="py-2  border-b border-gray-100 text-left text-[16px] font-medium text-black w-[50px]">Edit</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers?.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2  border-b border-gray-100 text-[13px] text-custom-gray">{user.id}</td>
                <td className="py-2  border-b border-gray-100 text-sm text-custom-gray">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${user.color}`}>
                    {user.initials}
                  </div>
                </td>
                <td className="py-2  border-b border-gray-100 text-[14px] text-custom-gray">{user.name}</td>
                <td className="py-2  border-b border-gray-100 text-[14px] text-custom-gray  w-[50px]">{user.email}</td>
                <td className="py-2  border-b border-gray-100 text-[14px] text-custom-gray">{user.date}</td>
                <td className="py-2 relative z-1 border-b cursor-pointer border-gray-100 text-[14px] text-custom-gray">
                  <img src={dots} alt="edit" onClick={() => handleEditUser(user.id)} />
                  {editingUserId === user.id && <EditUser user={user} onClose={closeEditUser} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
    </div>
  );
};

export default UserTable;
