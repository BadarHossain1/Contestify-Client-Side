import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";


const Contest = ({ contest }) => {
    const { contestName, image, participantsCount, shortDescription, tag, id } = contest;
    const description = shortDescription.slice(0, 100);
    return (
        <div>
            <div className="w-full max-w-sm  overflow-hidden  rounded-lg shadow-lg mt-4 dark:bg-gray-800">
                <img className="object-cover object-center w-full h-56" src={image} alt="avatar"></img>

                <div className="flex items-center px-6 py-3 ">


                    <h1 className="mx-3 text-lg font-semibold text-white">{tag}</h1>
                </div>

                <div className="px-6 py-4 flex-grow">
                    <h1 className="text-xl font-semibold  ">Name: {contestName}</h1>

                    <p className="py-2 ">{description}<Link className="text-indigo-600" to={`/viewDetails/${id}`}>...</Link></p>

                    <div className="flex items-center mt-4 mb-6 ">
                        <MdOutlineAccountCircle className="text-2xl" />

                        <h1 className="px-2 text-sm">Participants Count: {participantsCount}</h1>
                    </div>


                    <Link to={`/viewDetails/${id}`}
                        className="group relative inline-block overflow-hidden border border-indigo-600 rounded-xl px-8 py-3 font-EBGaramond text-white  focus:outline-none focus:ring w-full flex justify-center"
                        href="#"
                    >
                        <span
                            className="absolute inset-y-0 left-0 w-[2px] bg-gradient-to-r from-indigo-500 to-blue-400  transition-all group-hover:w-full group-active:bg-gradient-to-r from-indigo-500 to-blue-400 "
                        ></span>

                        <span
                            className="relative text-sm font-medium text-white transition-colors group-hover:text-white"
                        >
                            Details
                        </span>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Contest;