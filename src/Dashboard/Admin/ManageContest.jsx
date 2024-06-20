import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ManageContest = () => {
    const { data, isLoading, error, refetch } = useQuery({
        queryKey: ['contest'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/AllContest');

            return data;
        }
    });


    const handleConfirm = (_id) =>{
        
        console.log(_id)
        // const status = 'Approved';

        axiosSecure.patch(`/status/update/${_id}`)
        .then(res=> {
            console.log(res.data)
            alert('something happened');
            refetch();

        })
    }


    const handleComment = async (_id) =>{
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

            const details = {
                _id, text
            }

            axiosSecure.put('/comment', details)
            .then(res=>{
                console.log(res.data)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            })
          }
    }




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
                    {/* head */}
                    <thead className="text-black  ">
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
                        {/* row 1 */}
                        {data.map((user, index) => <tr key={index}>

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

                            <td><button onClick={(e)=>{
                                handleComment(user?._id)
                            }}  className="btn btn-ghost btn-xs rounded-xl bg-blue-200">Comment</button></td>
                            {
                                user?.status === 'Pending' ? <td><button onClick={()=>{
                                    handleConfirm(user?._id)
                                
                                }} className="btn btn-ghost btn-xs rounded-xl bg-green-200">Confirm</button></td> : <td><button className="btn btn-ghost btn-disabled btn-xs rounded-xl bg-green-200">Confirm</button></td> 
                            }
                            <td><Link to='' className="btn btn-ghost btn-xs rounded-xl bg-red-300">Delete</Link></td>
                        </tr>)}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageContest;