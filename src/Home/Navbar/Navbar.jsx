
import { GiLaurelsTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
const Navbar = () => {

    const Navlink = <>

        <li><Link to='/' className="text-base">Home</Link></li>
        <li><Link to='/AllContest' className="text-base">All Contest</Link></li>

    </>
    return (
        <div className="w-full mx-auto
         font-EBGaramond ">
            <div className="navbar  bg-white   z-10 fixed shadow-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlink}
                        </ul>
                    </div>
                    <div className="flex justify-center  items-center">
                        <GiLaurelsTrophy className="text-3xl lg:text-4xl text-indigo-500 mr-1" />
                        <Link to='/' className=" font-[900]  font-EBGaramond text-2xl lg:text-4xl">Contestify</Link>
                    </div>
                </div>
                <div className=" navbar-center   hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn bg-gradient-to-r from-indigo-500 to-blue-400 w-24 rounded-xl font-EBGaramond text-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;