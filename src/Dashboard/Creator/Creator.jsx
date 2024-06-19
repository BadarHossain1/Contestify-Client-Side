import { FaRegCircleUser } from "react-icons/fa6";
import { PiTrophy } from "react-icons/pi";
import { MdAddTask, MdOutlineCelebration } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscFileSubmodule } from "react-icons/vsc";
import { IoCreateOutline } from "react-icons/io5";

const Creator = () => {
    return (
        <div>
            <div className="font-EBGaramond font-bold">
                <li><Link to='AddContest' className="flex items-center px-2 pt-5  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><MdAddTask  className="mr-2 text-2xl" />
                    AddContest</Link></li>
                <li><Link to='ContestSubmitted' className="flex items-center px-2 pt-5  whitespace-nowrap text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><VscFileSubmodule className="mr-2 text-2xl" />Contest Submitted</Link></li>
                <li><Link to='ContestCreated' className="flex items-center px-2 pt-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><IoCreateOutline className="text-2xl mr-2" />My Created Contest</Link></li>

            </div>
        </div>
    );
};

export default Creator;