import { Link } from "react-router-dom";


const Favourite = ({contest}) => {
    const { Name, Image, Description, deadline, Price, TextInstruction, CreatorEmail, CreatorName, Category, participantsCount, _id } = contest;

    return (

        <div className="rounded-2xl shadow-xl">

            <a href="#" className="group relative block overflow-hidden">
                <button
                    className="absolute end-4 top-4 z-10 px-3 rounded-full  p-1.5  transition hover:text-gray-900/75"
                >
                    {participantsCount}


                </button>

                <img
                    src={Image}
                    alt=""
                    className="h-64 w-full object-cover rounded-2xl transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative  p-6 ">
                    <span className="whitespace-nowrap bg-gradient-to-r from-indigo-500 to-blue-400 px-3 py-1.5 text-xs font-medium text-white"> {Category} </span>

                    <h3 className="mt-4 text-lg font-medium ">{Name}</h3>

                    <p className="mt-1.5 text-sm ">Participants: {participantsCount}</p>
                    <p className="py-2 ">{Description}....</p>

                    <form className="mt-4">
                        <Link to={`/viewDetails/${_id}`}
                            className="group relative inline-block overflow-hidden border border-indigo-600 rounded-xl px-8 py-3 font-EBGaramond text-white  focus:outline-none focus:ring w-full flex justify-center"
                            href="#"
                        >
                            <span
                                className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-r from-indigo-500 to-blue-400  transition-all group-hover:w-full group-active:bg-gradient-to-r from-indigo-500 to-blue-400 "
                            ></span>

                            <span
                                className="relative text-sm font-medium text-white transition-colors group-hover:text-white"
                            >
                                Details
                            </span>
                        </Link>
                    </form>
                </div>
            </a>


        </div >



    );
};

export default Favourite;