
import { MdAddTask, MdOutlineCelebration, MdOutlineManageSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";

const Admin = () => {
    return (
        <div>

            <div className="font-EBGaramond font-bold">
                <li><Link to='ManageUsers' className="flex items-center px-2 pt-5  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><FaRegUser className="mr-2 text-2xl" />
                    Manage Users</Link></li>
                <li><Link to='ManageContest' className="flex items-center px-2 pt-5  whitespace-nowrap text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><MdOutlineManageSearch className="mr-2 text-2xl" />Manage Contest</Link></li>
                

            </div>

        </div>
    );
};

export default Admin;