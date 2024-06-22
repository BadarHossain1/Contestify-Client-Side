
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";


const MyCreatedContest = () => {
    const { user } = useContext(AuthContext);
    const [contests, setContest] = useState([]);
    const count = contests.length;
    console.log(count);

    const itemPerPage = 10;
    const numberOfPages = Math.ceil(count / itemPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);




    // axiosSecure.get(`/MyCreatedContest/${user?.email}`)
    //     .then(res => setContest(res.data))
    //     .catch(err => console.error(err))

    const { data, refetch } = useQuery({
        queryKey: ['MyCreatedContest', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/MyCreatedContest/${user?.email}`);
            setContest(response.data);

            return response.data;
            refetch();

        }

    })


    const handleDelete = (_id) => {
        axiosSecure.delete(`/delete/${_id}`)
            .then(res => {
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Contest has been deleted",
                    showConfirmButton: false,
                    timer: 1500
                });

                refetch();


            })
    }









    return (
        <div>
            <div className="overflow-x-auto font-EBGaramond">
                <table className="table">
                    {/* head */}
                    <thead className="text-black  ">
                        <tr>
                            <th>Name</th>

                            <th>Status</th>
                            <th>Comment</th>

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
                            <td className="badge badge-ghost bg-gradient-to-r text-white from-indigo-600 to-blue-400 mt-6 my-auto">{user?.status}</td>
                            <td>

                                {/* The button to open modal */}
                                <label htmlFor="my_modal_7" className="badge badge-ghost bg-green-300 text-white">Comment</label>

                                {/* Put this part before </body> tag */}
                                <input type="checkbox" id="my_modal_7" className="modal-toggle " />
                                <div className="modal" role="dialog">
                                    <div className="modal-box">
                                        <h3 className="text-lg font-bold">Comment from Admin!</h3>
                                        <p className="py-4">{user?.comment}</p>
                                    </div>
                                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                                </div>
                                <br />

                            </td>


                            {
                                user?.status === 'Pending' ? <td><Link to={`/EditContest/${user?._id}`} className="btn btn-ghost btn-xs rounded-xl bg-gray-200">Edit</Link></td> : <td><Link to='' className="btn btn-disabled btn-xs rounded-xl bg-gray-200">Edit</Link></td>
                            }
                            {
                                user?.status === 'Pending' ? <td><button onClick={(e) => {
                                    handleDelete(user?._id)
                                }} className="btn btn-ghost btn-xs rounded-xl bg-red-300">Delete</button></td> : <td><Link to='' className="btn btn-disabled btn-xs rounded-xl bg-red-300">Delete</Link></td>
                            }
                        </tr>)}

                    </tbody>



                </table >
            </div >
            {<div class="max-w-full mx-auto mt-4 rounded-xl  bg-gradient-to-r  from-indigo-400 to-blue-400  dark:bg-gray-800">
                <div class="container flex flex-col items-center px-6 py-2 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
                    <div class="-mx-2">
                        {pages.map((pata, index) => <a key={index} class="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700">
                            {parseInt(pata) + 1}
                        </a>)}


                    </div>

                    <div class="text-white dark:text-gray-400">
                        <span class="font-medium text-white dark:text-white">1 - 10</span> of {contests?.length} records
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default MyCreatedContest;