import { NavLink } from "react-router-dom";


const AboutUs = () => {
    return (
        <div>
            <section className=" dark:bg-gray-900 max-w-[1280px] mx-auto">
                <div className="container px-6 py-10 mx-auto">
                    <div className="lg:-mx-6 lg:flex lg:items-center">
                        <img className="object-cover object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]" src="https://i.ibb.co/SsZBmnQ/business-Idea.jpg" alt=""></img>

                        <div className="mt-8 lg:w-1/2  lg:mt-0 ">
                            <p className="text-5xl font-semibold text-blue-500 ">“</p>

                            <h1 className="text-2xl font-semibold  dark:text-white lg:text-4xl lg:w-96">
                                About Us
                            </h1>

                            <p className="max-w-lg mt-6 font-EBGaramond text-lg dark:text-gray-400 ">
                                Welcome to Contestify, your ultimate destination for creating, discovering, and participating in an extensive array of exciting contests. Whether you are an aspiring creator or a seasoned competitor, Contestify equips you with the tools to showcase your talents, engage with a vibrant and dynamic community, and achieve well-deserved recognition. Explore limitless opportunities, connect with like-minded individuals, and embark on a journey to success with Contestify. Join us today and take your creativity and competitive spirit to new heights!
                            </p>

                            <NavLink to='/AllContest' className="group relative inline-block focus:outline-none focus:ring mt-8" href="">
                                <span
                                    className="absolute inset-0 translate-x-0 translate-y-0 bg-gradient-to-r from-indigo-600 to-blue-400  transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
                                ></span>

                                <span
                                    className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white"
                                >
                                    All Contests
                                </span>
                            </NavLink>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;