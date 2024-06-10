

const Advertise = ({ advertise }) => {
    const { contestName, contestDescription, participateLink, winner, stats, image } = advertise;
    return (
        <div className="max-w-2xl overflow-hidden  rounded-lg shadow-2xl mb-2 dark:bg-gray-800 mx-auto" >
            <img className="object-cover w-full h-64" src={image} alt="Article"></img>

            <div className="p-6">
                <div>
                    <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                    <a href="#" className="block mt-2 text-xl font-semibold transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" role="link">{contestName}</a>
                    <p className="mt-2 text-sm ">{contestDescription}</p>
                </div>

                <div className="mt-4">
                    <div className="flex items-center">
                        <div className="flex items-center">
                            <img className="object-cover h-10 rounded-full" src={winner?.image} alt="Avatar"></img>
                            <a href="#" className="mx-2 font-semibold  " role="link">{winner?.name}</a>
                        </div>
                        <span className="mx-1 text-xs ">{winner?.entry}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;