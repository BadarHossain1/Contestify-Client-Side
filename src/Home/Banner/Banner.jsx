

const Banner = () => {
    return (
        <div className="w-full mx-auto ">
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/4Y71ys9/banner-pic.jpg)' }}>
                <div className="hero-overlay bg-opacity-60  "></div>
                <div className="hero-content text-center text-neutral-content rounded-xl mt-8">
                    <div className="bg-gradient-to-r from-indigo-500 to-blue-500  py-4 px-4 rounded-3xl">
                        
                        <h1 className=" text-white font-EBGaramond font-[900] hero-overlay bg-opacity-30   p-8 rounded-t-3xl  text-5xl lg:text-7xl  bg-transparent max-w-4xl mx-auto">Unleash Your Creativity!  </h1>

                        <p className="mb-5 text-md max-w-4xl mx-auto text-white  rounded-b-3xl pb-3 px-3 font-bold">Welcome to our vibrant community of creators! Whether you are an artist, designer, writer, or innovator, our contest creation platform is your ultimate canvas to showcase your talent and passion. </p>


                        <div className="relative max-w-xl mx-auto pt-4 pb-4">
                            <label htmlFor="Search" className="sr-only"> Search </label>

                            <input
                                type="text"
                                id="Search"
                                placeholder="    Search for Tags (Ex. coding...)"
                                className="w-full rounded-xl border-gray-200 py-4 pe-10 shadow-sm sm:text-sm"
                            />

                            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center btn-primary">
                                <button type="button" className=" text-blue-600 font-extrabold hover:text-gray-700 mt-2">
                                    <span className="sr-only">Search</span>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-4 w-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </button>
                            </span>
                        </div>
                    <div className="hero-overlay bg-opacity-80 rounded-xl "></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;