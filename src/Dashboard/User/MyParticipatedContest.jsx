import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { useContext, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";


const MyParticipatedContest = () => {

    const { user } = useContext(AuthContext);

    const [contest, setContest] = useState([]);
    const count = contest.length;
    console.log(count);

    const itemPerPage = 10;
    const numberOfPages = Math.ceil(count / itemPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);

    const { data, refetch } = useQuery({
        queryKey: ['ParticipatedContest', user?.email],
        queryFn: async () => {
            const response = await axiosSecure.get(`/participatedContest/${user?.email}`);
            setContest(response.data);

            console.log(data)

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

                            <th>Price</th>
                            <th>Deadline</th>


                        </tr>
                    </thead>



                    <tbody>
                        {/* row 1 */}
                        {contest && contest.map((user, index) => <tr key={index}>

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
                            <td className="badge badge-ghost bg-gradient-to-r text-white from-indigo-600 to-blue-400 mt-6 my-auto">{user?.Category}</td>

                            <td>
                                {user?.Price}
                            </td>
                            <td>
                                {user?.deadline}
                            </td>

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
                        <span class="font-medium text-white dark:text-white">1 - 10</span> of {contest?.length} records
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default MyParticipatedContest;