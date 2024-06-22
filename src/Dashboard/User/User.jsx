import { Link } from "react-router-dom";
import MyParticipatedContest from "./MyParticipatedContest";
import MyProfile from "./MyProfile";
import MyWinningContest from "./MyWinningContest";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiTrophy } from "react-icons/pi";
import { MdOutlineCelebration } from "react-icons/md";


const User = () => {
    return (
        <div className="font-EBGaramond font-bold">
            <li><Link to='participated' className="flex items-center px-2 pt-5  text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><PiTrophy className="mr-2 text-2xl"/>
             My Participated Contest</Link></li>
            <li><Link to='winning' className="flex items-center px-2 pt-5  whitespace-nowrap text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><MdOutlineCelebration className="mr-2 text-2xl" />My Winning Contest</Link></li>
            

        </div>
    );
};

export default User;