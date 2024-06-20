import { useContext, useState } from "react";
import User from "./User/User";
import { GiLaurelsTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../ContextProvider/ContextProvider";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import Creator from "./Creator/Creator";
import Admin from "./Admin/Admin";
import useRole from "../Hooks/useRoleUser";


const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { Logout } = useContext(AuthContext);

    const [role, isLoading] = useRole();
    console.log(role); 

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLogout = () => {
        Logout()
            .then(res => {
                console.log(res)
                // axios.post('http://localhost:5173/logout', user, {
                //     withCredentials: true
                // })
                //     .then(res => res.data);
            }


            )
            .catch(error => console.log(error))
    }

    return (
        <div className="bg-gray-200 shadow-2xl">
            <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside
                id="logo-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 border flex flex-col justify-between">
                    <div className="">
                        <div className="flex justify-center bg-gradient-to-r p-2 rounded-xl from-indigo-500 to-blue-400  items-center mx-auto">
                            <GiLaurelsTrophy className="text-3xl lg:text-2xl text-white mr-1" />
                            <Link to='/' className=" font-[900] text-white font-EBGaramond text-2xl lg:text-2xl">Contestify</Link>
                        </div>
                        <ul className="space-y-2 font-medium py-5">
                            {
                                role === 'user' && <div className="mt-5">
                                <User></User>
                            </div> 
                            }
                            {
                                role === 'creator' && <div className="mt-5">
                                <Creator></Creator>
                            </div>
                            }
                            {
                                role === 'Admin' && <div className="mt-5">
                                <Admin></Admin>
                            </div>
                            }
                            
                            


                        </ul>
                    </div>
                    <div className="mb-2">
                        <li onClick={handleLogout} className="flex font-EBGaramond font-bold items-center px-2 pt-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><CiLogout className="text-2xl mr-2" />Logout</li>
                    </div>
                </div>
            </aside>



        </div>
    );
};



export default Dashboard;