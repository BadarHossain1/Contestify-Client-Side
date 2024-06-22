import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import ManageUser from "./ManageUser";
import Swal from "sweetalert2";


const ManageUsers = () => {


    const { data: contest = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users');
            return data;
        }
    })

    const count =  contest?.length;
    
    console.log(count);

    const itemPerPage = 10;
    const numberOfPages = Math.ceil(count / itemPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);

    const handleSelect = (email, role) => {
        console.log(role);
        console.log(email);

        axiosSecure.patch(`/users/update`, { email, role })
            .then(res => {
                console.log(res.data);
                refetch();
            })
            .catch(err => {
                console.error(err);
            });
    }


    const handleDelete = (email) => {
        axiosSecure.delete(`/delete/user/${email}`)
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
                            <th>Email</th>
                            <th>Role</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>



                    <tbody>
                        {/* row 1 */}
                        {contest && contest.map((user, index) => <tr key={index}>

                            <td className="">
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user?.image || "https://i.ibb.co/z5s0YMW/person-2.jpg"} alt="Avatar Tailwind CSS Component" />

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


                                <select
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    className="mt-1.5 rounded-lg border-gray-300  text-gray-700 sm:text-sm"
                                    onChange={(e) => handleSelect(user?.email, e.target.value)}
                                >
                                    <option value="">Please select Role</option>
                                    <option value="user">User</option>
                                    <option value="creator">Creator</option>
                                    <option value="Admin">Admin</option>

                                </select>
                            </td>
                            <th>
                                <button onClick={(e) => handleDelete(user?.email)} className="btn btn-ghost btn-xs rounded-xl bg-red-300">Delete</button>
                            </th>
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

                    <div class="text-gray-500 dark:text-gray-400">
                        <span class="font-medium text-white dark:text-white">1 - 10</span> of {contest?.length}  records
                    </div>
                </div>
            </div>}


        </div >

    )
};

export default ManageUsers;