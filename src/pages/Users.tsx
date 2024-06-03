import { useEffect } from "react";
import Breadcrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import PlusButton from "../components/PlusButton";
import UserTable from "../components/UserTable";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { getUsers, selectAllUsers } from "../redux/slices/userSlice";

const Users = () => {
  const users = useAppSelector(selectAllUsers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: "50px" },
    { field: "status", headerName: "Status", width: "100px" },
    { field: "name", headerName: "Full name", width: "200px" },
    { field: "email", headerName: "Email", width: "300px" },
    { field: "date", headerName: "Date", width: "" },
    { field: "edit", headerName: "Edit", width: "50px" },
  ];

  return (
    <div className="px-[100px]">
      <Header />
      <Breadcrumb />
      <div className="p-6 flex justify-between items-center mt-4">
        <h1 className="text-[32px] font-semibold">Users</h1>
        <PlusButton />
      </div>
      <div className="py-6">
        <UserTable columns={columns} rows={users} />
      </div>
    </div>
  );
};

export default Users;
