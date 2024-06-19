
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const MyCreatedContest = () => {
    const { user } = useContext(AuthContext);
    const [contests, setContest] = useState([]);



    
        // axiosSecure.get(`/MyCreatedContest/${user?.email}`)
        //     .then(res => setContest(res.data))
        //     .catch(err => console.error(err))

        const {data} = useQuery({
            queryKey: ['MyCreatedContest', user?.email],
            queryFn: async () => {
                const response = await axiosSecure.get(`/MyCreatedContest/${user?.email}`);
                setContest(response.data);
            }

        })

 



    return (
        <div>
            <div className="overflow-x-auto font-EBGaramond">
                <table className="table">
                    {/* head */}
                    <thead className="text-black  ">
                        <tr>
                            <th>Name</th>
                            <th>ajsn</th>
                            <th>Role</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>



                    <tbody>
                        {/* row 1 */}
                        {contests.map((user, index) => <tr key={index}>

                            <td className="">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.Image || "https://i.ibb.co/z5s0YMW/person-2.jpg"} alt="Avatar Tailwind CSS Component" />

                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{user?.Name}</div>

                                    </div>
                                </div>
                            </td>
                            <td>
                                {user?.email}
                                <br />

                            </td>
                            <td className="badge badge-ghost bg-gradient-to-r text-white from-indigo-600 to-blue-400 mt-6 my-auto">{user?.role}</td>
                            <td>


                                
                            </td>
                            <th>
                                <button className="btn btn-ghost btn-xs rounded-xl bg-red-300">Delete</button>
                            </th>
                        </tr>)}

                    </tbody>



                </table >
            </div >
        </div>
    );
};

export default MyCreatedContest;