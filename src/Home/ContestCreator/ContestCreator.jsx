

const ContestCreator = ({ creator }) => {
    const { name, image, contestName, contestDescription, participantsCount } = creator;
    return (
        <div className="">
            <div className="group relative block bg-black h-[400px] ">
                <img
                    alt=""
                    src={image}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-3">
                    <p className="text-sm  uppercase font-EBGaramond tracking-widest text-rose-500 font-bold">{name}</p>

                    <p className="text-xl font-bold text-white font-EBGaramond sm:text-2xl">{contestName}</p>

                    <div className="mt-40 font-normal font-serif">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                            <p className="text-sm text-white text-center ">
                                {contestDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContestCreator;