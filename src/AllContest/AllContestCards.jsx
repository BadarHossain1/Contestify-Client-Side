import { Link } from "react-router-dom";


const AllContestCards = ({ contest }) => {
    const { contestName, image, participantsCount, shortDescription, tags, userName, userImage } = contest;
    const description = shortDescription.slice(0, 100);
    return (
        <div>
            <a href="#" className="group relative block overflow-hidden">
                <button
                    className="absolute end-4 top-4 z-10 px-3 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                >
                    {participantsCount}


                </button>

                <img
                    src={image}
                    alt=""
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                />

                <div className="relative border border-gray-100 bg-white p-6">
                    <span className="whitespace-nowrap bg-gradient-to-r from-indigo-500 to-blue-400 px-3 py-1.5 text-xs font-medium text-white"> {tags} </span>

                    <h3 className="mt-4 text-lg font-medium text-gray-900">{contestName}</h3>

                    <p className="mt-1.5 text-sm text-gray-700">Participants: {participantsCount}</p>
                    <p className="py-2 text-gray-700 dark:text-gray-400">{description}....</p>

                    <form className="mt-4">
                        <Link to='/'
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
        </div>
    );
};

export default AllContestCards;