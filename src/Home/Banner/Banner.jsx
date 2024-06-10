

const Banner = () => {
    return (
        <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 ">

            <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl font-EBGaramond">
                <div className="mb-0 lg:mb-16 mt-1 lg:mt-12 lg:max-w-lg lg:pr-5">
                    <div className="max-w-xl mb-6">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider  uppercase rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
                                Contestify
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-EBGaramond  text-4xl font-bold tracking-tight  lg:text-6xl sm:leading-none">
                            Unleash
                            <br className="hidden md:block" />
                            Your{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                Creativity
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg font-medium">
                        Welcome to our vibrant community of creators! Whether you are an artist, designer, writer, or innovator, our contest creation platform is your ultimate canvas to showcase your talent and passion. 
                        </p>
                    </div>

                <form className="flex flex-col items-center w-full mb-4 md:flex-row ">
                    <input
                        placeholder="Search for contest...(Ex.coding)"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-3 rounded-lg transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
                    />
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-gradient-to-r from-indigo-600 to-blue-500 focus:shadow-outline focus:outline-none"
                    >
                        Search
                    </button>
                </form>
                </div>
            </div>
            <div className="inset-y-0 right-0 w-full max-w-xl px-4 mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
                <img
                    className="object-cover w-full  rounded-xl shadow-lg lg:rounded-tl-2xl lg:rounded-bl-2xl lg:shadow-none h-96 mt-1 lg:mt-8"
                    src="https://i.ibb.co/4Y71ys9/banner-pic.jpg"
                    alt=""
                />
            </div>
        </div>
    );
};

export default Banner;