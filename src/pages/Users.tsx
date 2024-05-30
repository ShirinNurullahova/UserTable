import Breadcrumb from "../components/BreadCrumb"
import Header from "../components/Header"
import PlusButton from "../components/PlusButton"
import UserTable from "../components/UserTable"


const Users = () => {
    return (
        <div className="px-[100px]">
            <Header />
            <Breadcrumb />
            <div className="p-6 flex justify-between items-center mt-4">
                <h1 className="text-2xl font-bold">Users</h1>
                <PlusButton />
            </div>
            <div className="py-6">
              <UserTable/>
            </div>

        </div>
    )
}

export default Users