
import { GiLaurelsTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { useContext, useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {

    const { user, Logout, loading } = useContext(AuthContext);

    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem('theme');
        return localTheme || 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleTheme = (e) => {


        if (e.target.checked) {
            setTheme("dark")

        }
        else {
            setTheme("light")

        }
    }


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

    const Navlink = <>

        <li><Link to='/' className="text-base">Home</Link></li>
        <li><Link to='/AllContest' className="text-base">All Contest</Link></li>
        <label className="swap swap-rotate flex lg:hidden">

            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleTheme} className="theme-controller" value="synthwave" />

            {/* sun icon */}
            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

            {/* moon icon */}
            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

        </label>

    </>
    return (
        <div className="w-full   
         font-EBGaramond py-2 ">

            <div className={`navbar  z-10 `} >

                <div className="  navbar-start  ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navlink}
                        </ul>
                    </div>
                    <div className="flex justify-center bg-gradient-to-r p-2 rounded-xl from-indigo-500 to-blue-400  items-center ml-3">
                        <GiLaurelsTrophy className="text-3xl lg:text-[40px] text-white mr-1" />
                        <Link to='/' className=" font-[900] text-white font-EBGaramond text-2xl lg:text-[40px]">Contestify</Link>
                    </div>


                </div>

                <div className=" navbar-center   hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        {Navlink}
                    </ul>
                </div>



                {/* <div className="navbar-end">
                    <Link to='/login' className="btn bg-gradient-to-r from-indigo-500 to-blue-400 w-24 rounded-xl font-EBGaramond text-white">Login</Link>
                </div> */}

                {
                    loading ? <div className="w-1/2 flex justify-end items-end mr-6"><span className="loading loading-spinner loading-xl bg-gradient-to-r from-indigo-500 to-blue-300"></span></div> : <div className="navbar-end">

                        {
                            user ? <div className="flex">
                                <label className="swap swap-rotate mr-2 mt-1">

                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" onChange={handleTheme} className="theme-controller" value="synthwave" />

                                    {/* sun icon */}
                                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    {/* moon icon */}
                                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                                <div className="dropdown dropdown-end mr-4 flex justify-center items-center">

                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle mr-1 md:mr-3 border-2 rounded-full w-[50px] h-[30px] md:w-[60px] md:h-[60px] flex items-center justify-center  avatar tooltip ">
                                        <div className=" " >
                                            {
                                                user ? <img src={user?.photoURL} alt="User's Photo" className="w-full h-full rounded-full" /> : <FaRegUserCircle className="w-[30px] h-[30px] md:w-[35px] md:h-[35px]" />
                                            }
                                            {

                                            }
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-36 z-10 shadow bg-base-100 rounded-box w-52 ">
                                        <li className="text-center mb-1">{user?.displayName}</li>

                                        <li><button onClick={handleLogout} className="hover:bg-gradient-to-r from-indigo-500 to-blue-400  hover:text-white">Logout</button></li>
                                    </ul>
                                </div>
                            </div> : <div className="flex items-center">
                                <label className="swap swap-rotate">

                                    {/* this hidden checkbox controls the state */}
                                    <input type="checkbox" onChange={handleTheme} className="theme-controller" value="synthwave" />

                                    {/* sun icon */}
                                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                                    {/* moon icon */}
                                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                </label>
                                <div className="navbar-end border-none ml-2 ">
                                    <Link to='/login' className="btn bg-gradient-to-r from-indigo-500 to-blue-400 w-24 rounded-xl font-EBGaramond text-white border-none font-extrabold">Login</Link>
                                </div>
                            </div>

                        }
                    </div>

                }




            </div>
        </div>
    );
};

export default Navbar;