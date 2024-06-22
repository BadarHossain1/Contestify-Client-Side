import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ContestSubmittedPage = () => {

    // const { user } = useContext(AuthContext);
    const [contests, setContest] = useState([]);
    const [text, setText] = useState('Winner');






    const { data, refetch } = useQuery({
        queryKey: ['MyCreatedContest'],
        queryFn: async () => {
            const response = await axiosSecure.get('/submittedContest');
            setContest(response.data);

            return response.data;
            refetch();

        }

    })


    const handleWinner = (id) =>{

      

         axiosSecure.patch(`/update/result/${id}`)
         .then(res=>{
            console.log(res.data)
            setText('Winner')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Winner Declared",
                showConfirmButton: false,
                timer: 1500
              });

         })




    }
    return (
        <div>
            {
                contests && contests.map((detail, index) =>
                    <div key={index} >
                        <div
                            
                            className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
                        >
                            <span
                                className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
                            ></span>

                            <div className="sm:flex sm:justify-between sm:gap-4">
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                        {detail?.Name}
                                    </h3>

                                    <p className="mt-1 text-xs font-medium text-gray-600">{detail?.Category}</p>
                                </div>

                                <div className="hidden sm:block sm:shrink-0">
                                    <img
                                        alt=""
                                        src={detail?.Image}
                                        className="size-16 rounded-lg object-cover shadow-sm"
                                    />
                                </div>
                            </div>

                            <div className="mt-4">
                                <p className="text-pretty text-sm text-gray-500">
                                    {detail?.Description}
                                </p>
                            </div>

                            <dl className="mt-6 flex gap-4 sm:gap-6">
                                <div className="flex flex-col-reverse">
                                    <dd className="text-xs text-gray-500">{detail?.deadline}</dd>
                                    <dt className="text-sm font-medium text-gray-600">Deadline</dt>
                                </div>

                            </dl>
                                <div className="flex flex-col w-40 mt-5">
                                    {detail?.result === 'participants' ? <button onClick={()=>{
                                        handleWinner(detail?._id)
                                    }} className="bg-green-400 btn btn-ghost text-white">{text}</button> : <button  disabled 
                                     className="bg-green-400 btn btn-ghost  text-white">{text}</button>}
                                </div>
                        </div>
                    </div>


                )
            }
        </div>
    );
};

export default ContestSubmittedPage;