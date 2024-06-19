import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import ManageUser from "./ManageUser";


const ManageUsers = () => {


    const { data, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/users');
            return data;
        }
    })

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
                        {data && data.map((user, index) => <tr key={index}>

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
                                <button className="btn btn-ghost btn-xs rounded-xl bg-red-300">Delete</button>
                            </th>
                        </tr>)}

                    </tbody>



                </table >
            </div >


        </div >

    )
};

export default ManageUsers;