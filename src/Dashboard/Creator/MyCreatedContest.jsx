
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";


const MyCreatedContest = () => {
    const { user } = useContext(AuthContext);
    const [contests, setContest] = useState([]);



    
        // axiosSecure.get(`/MyCreatedContest/${user?.email}`)
        //     .then(res => setContest(res.data))
        //     .catch(err => console.error(err))

        const {data, refetch} = useQuery({
            queryKey: ['MyCreatedContest', user?.email],
            queryFn: async () => {
                const response = await axiosSecure.get(`/MyCreatedContest/${user?.email}`);
                setContest(response.data);
            
                return response.data;
                refetch();

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
                            
                            <th>Category</th>
                            <th>Status</th>
                            <th>Submitted</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>



                    <tbody>
                        {/* row 1 */}
                        {contests && contests.map((user, index) => <tr key={index}>

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
                                {user?.Category}
                                <br />

                            </td>
                            <td className="badge badge-ghost bg-gradient-to-r text-white from-indigo-600 to-blue-400 mt-6 my-auto">{user?.status}</td>

                            <td><Link to='' className="btn btn-ghost btn-xs rounded-xl bg-gray-200">Submission</Link></td>
                            {
                                user?.status === 'Pending' ? <td><Link to={`/EditContest/${user?._id}`} className="btn btn-ghost btn-xs rounded-xl bg-gray-200">Edit</Link></td> : <td><Link to='' className="btn btn-disabled btn-xs rounded-xl bg-gray-200">Edit</Link></td>
                            }
                            {
                                user?.status === 'Pending' ? <td><Link to='' className="btn btn-ghost btn-xs rounded-xl bg-red-300">Delete</Link></td> : <td><Link to='' className="btn btn-disabled btn-xs rounded-xl bg-red-300">Delete</Link></td>
                            }
                        </tr>)}

                    </tbody>



                </table >
            </div >
        </div>
    );
};

export default MyCreatedContest;