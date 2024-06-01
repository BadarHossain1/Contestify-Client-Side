
import { CiTrophy } from "react-icons/ci";
import { Link } from "react-router-dom";
const Navbar = () => {

    const Navlink = <>

        <li><Link to='/' className="text-base">Home</Link></li>
        <li><Link to='/' className="text-base">All Context</Link></li>

    </>
    return (
        <div className="max-w-[1170px] mx-auto mt-2 font-EBGaramond ">
            <div className="navbar bg-base-100">
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
                        <CiTrophy className="text-3xl text-indigo-500 mr-1" />
                        <Link to='/' className=" font-extrabold  font-EBGaramond text-xl lg:text-3xl">Contestify</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Navlink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-gradient-to-r from-indigo-500 to-blue-400 w-24 rounded-xl font-EBGaramond text-white">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;