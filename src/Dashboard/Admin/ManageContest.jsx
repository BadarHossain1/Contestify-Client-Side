import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageContest = () => {
    const { data: contests = [], isLoading, error, refetch } = useQuery({
        queryKey: ['contest'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/AllContest');
            return data;
        }
    });

    const count = contests.length;
    console.log(count);

    const itemPerPage = 10;
    const numberOfPages = Math.ceil(count / itemPerPage);
    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);

    const handleConfirm = (_id) => {
        console.log(_id);

        axiosSecure.patch(`/status/update/${_id}`)
            .then(res => {
                console.log(res.data);
                alert('Status updated');
                refetch();
            });
    };

    const handleComment = async (_id) => {
        const { value: text } = await Swal.fire({
            input: "textarea",
            inputLabel: "Comment",
            inputPlaceholder: "Type your Comment here...",
            inputAttributes: {
                "aria-label": "Type your comment here"
            },
            showCancelButton: true
        });
        if (text) {
            Swal.fire(text);

            const details = { _id, text };

            axiosSecure.put('/comment', details)
                .then(res => {
                    console.log(res.data);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                });
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching contests</div>;
    }

    return (
        <div>
            <div className="overflow-x-auto font-EBGaramond">
                <table className="table">
                    <thead className="text-black">
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Comment</th>
                            <th>Confirm</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contests.map((user, index) => (
                            <tr key={index}>
                                <td>
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
                                <td>
                                    <button onClick={() => handleComment(user?._id)} className="btn btn-ghost btn-xs rounded-xl bg-blue-200">Comment</button>
                                </td>
                                {user?.status === 'Pending' ? (
                                    <td>
                                        <button onClick={() => handleConfirm(user?._id)} className="btn btn-ghost btn-xs rounded-xl bg-green-200">Confirm</button>
                                    </td>
                                ) : (
                                    <td>
                                        <button className="btn btn-ghost btn-disabled btn-xs rounded-xl bg-green-200">Confirm</button>
                                    </td>
                                )}
                                <td>
                                    <Link to='' className="btn btn-ghost btn-xs rounded-xl bg-red-300">Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="max-w-full mx-auto mt-4 rounded-xl bg-gradient-to-r from-indigo-400 to-blue-400 dark:bg-gray-800">
                <div className="container flex flex-col items-center px-6 py-2 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0">
                    <div className="-mx-2">
                        {pages.map((page, index) => (
                            <a key={index} className="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700">
                                {page + 1}
                            </a>
                        ))}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400">
                        <span className="font-medium text-white dark:text-white">1 - 10</span> of {count} records
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageContest;
