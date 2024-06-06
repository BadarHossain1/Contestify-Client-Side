import { Link } from "react-router-dom";


const AllContestCards = ({ contest }) => {
    const { contestName, image, participantsCount, shortDescription, tags, userName, userImage, id } = contest;
    const description = shortDescription.slice(0, 100);
    return (

        <div className="rounded-xl">

            <a href="#" className="group relative block overflow-hidden">
                <button
                    className="absolute end-4 top-4 z-10 px-3 rounded-full  p-1.5  transition hover:text-gray-900/75"
                >
                    {participantsCount}


                </button>

                <img
                    src={image}
                    alt=""
                    className="h-64 w-full object-cover rounded-xl transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative  p-6 ">
                    <span className="whitespace-nowrap bg-gradient-to-r from-indigo-500 to-blue-400 px-3 py-1.5 text-xs font-medium text-white"> {tags} </span>

                    <h3 className="mt-4 text-lg font-medium ">{contestName}</h3>

                    <p className="mt-1.5 text-sm ">Participants: {participantsCount}</p>
                    <p className="py-2 ">{description}....</p>

                    <form className="mt-4">
                        <Link to={`/viewDetails/${id}`}
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

export default AllContestCards;