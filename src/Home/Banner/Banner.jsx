

const Banner = () => {
    return (
        <div className="max-w-[1170px] mx-auto rounded-xl h-[400px]">
            <div className="hero min-h-screen rounded-xl " style={{ backgroundImage: 'url(https://i.ibb.co/4Y71ys9/banner-pic.jpg)' }}>
                <div className="hero-overlay bg-opacity-70 rounded-xl "></div>
                <div className="hero-content text-center text-neutral-content rounded-xl">
                    <div className="">
                        <h1 className="mb-5 font-EBGaramond font-extrabold text-5xl lg:text-7xl  max-w-4xl mx-auto">Unleash Your Creativity!  </h1>
                        <p className="mb-5 text-md max-w-2xl mx-auto">Welcome to our vibrant community of creators! Whether you are an artist, designer, writer, or innovator, our contest creation platform is your ultimate canvas to showcase your talent and passion. </p>
                        

                        <div className="relative max-w-xl mx-auto pt-4">
                            <label htmlFor="Search" className="sr-only"> Search </label>

                            <input
                                type="text"
                                id="Search"
                                placeholder="    Search for..."
                                className="w-full rounded-xl border-gray-200 py-4 pe-10 shadow-sm sm:text-sm"
                            />

                            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center btn-primary">
                                <button type="button" className= " text-blue-600 font-extrabold hover:text-gray-700 mt-4">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;