
import { GiLaurelsTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { useContext } from "react";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {

    const { user, Logout, info, loading } = useContext(AuthContext);

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
                {/* <div className="navbar-end">
                    <Link to='/login' className="btn bg-gradient-to-r from-indigo-500 to-blue-400 w-24 rounded-xl font-EBGaramond text-white">Login</Link>
                </div> */}

                {
                    loading ? <div className="w-1/2 flex justify-end items-end mr-6"><span className="loading loading-spinner loading-xl bg-[#aa8453]"></span></div> : <div className="navbar-end">

                        {
                            user ? <div className="dropdown dropdown-end mr-4">

                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-1 md:mr-3 border-2 rounded-full w-[50px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center  avatar tooltip " data-tip={user?.displayName || 'No Name'}>
                                    <div className=" " data-tip={user?.displayName || 'No Name'}>
                                        {
                                            user ? <img src={user?.photoURL || "https://lh3.googleusercontent.com/a/ACg8ocLmdRTwh59_Ti2QrsS6UfK6gtDpYy3h6cTFkhdJE6EgMALVtwSn=s96-c"} alt="User's Photo" className="w-full h-full rounded-full" /> : <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                                        }
                                        {

                                        }
                                    </div>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52 ">
                                    <li className="text-center mb-1">{user?.displayName}</li>
                                    <li>
                                        <Link to="/update" className="justify-between hover:bg-[#aa8453] hover:text-white">
                                            Update Profile

                                        </Link>
                                    </li>
                                    <li><button onClick={Logout} className="hover:bg-[#aa8453] hover:text-white">Logout</button></li>
                                </ul>
                            </div> : <div className="flex items-center">
                                <div className="mr-1 md:mr-3 border-2 rounded-full w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex items-center justify-center border-[#b78f63] tooltip" data-tip={user?.displayName || 'No Name'}>
                                    <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                                </div>
                                <Link to="/login" className="btn w-15 md:w-20 bg-[#aa8453] text-[#fff] font-playfair-display">Login</Link>
                            </div>

                        }
                    </div>

                }




            </div>
        </div>
    );
};

export default Navbar;