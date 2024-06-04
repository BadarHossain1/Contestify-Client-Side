import { GiLaurelsTrophy } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import img from '../assets/welcome.jpg';
const Register = () => {
    const {
        register,
        handleSubmit,
      
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    

    }
    return (
        <div>



            <section className="bg-white shadow-xl">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12     ">
                    <aside className="relative flex h-32 items-end lg:col-span-5 lg:h-full xl:col-span-6">
                        <img
                            alt="."
                            src={img}
                            className="absolute inset-0 h-full w-full object-cover hidden md:flex lg:flex"
                        />
                    </aside>

                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">

                            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                <div className="flex justify-start  items-center">
                                    <GiLaurelsTrophy className="text-3xl lg:text-4xl text-indigo-500 mr-1" />
                                    <Link className=" font-[900]  font-EBGaramond text-3xl lg:text-4xl">Register</Link>
                                </div>

                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                                Login To Continue your exploration.
                            </p>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid grid-cols-6 gap-6">

                            <div className="col-span-6">
                                    <label
                                        htmlFor="Name"
                                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                    >
                                        <input
                                            type="Name"
                                            id="Name"
                                            placeholder="Full Name"
                                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("Name", { required: "Name is required" })}
                                        />



                                        <span
                                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                        >
                                            Full Name
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-6">
                                    <label
                                        htmlFor="UserEmail"
                                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                    >
                                        <input
                                            type="photo"
                                            id="Email"
                                            placeholder="photo"
                                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
                                        />



                                        <span
                                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                        >
                                            Photo
                                        </span>
                                    </label>
                                </div>



                                <div className="col-span-6">
                                    <label
                                        htmlFor="UserEmail"
                                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                    >
                                        <input
                                            type="Email"
                                            id="Email"
                                            placeholder="Email"
                                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" {...register("email", { required: "Email Address is required" })}
                                        />



                                        <span
                                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                        >
                                            Email
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-6 sm:col-span-3">




                                    <label
                                        htmlFor="UserEmail"
                                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                    >
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"  {...register("passwordGive", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })}
                                        />


                                        <span
                                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                        >
                                            Password
                                        </span>

                                    </label>

                                    {errors.passwordGive && <span className="text-sm text-red-600">Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.</span>}
                                </div>


                                <div className="col-span-6 sm:col-span-3">
                                    <label
                                        htmlFor="UserEmail"
                                        className="relative block overflow-hidden border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
                                    >
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"  {...register("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/ })}
                                        />


                                        <span
                                            className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
                                        >
                                            Password Confirmation
                                        </span>
                                    </label>
                                    {errors.password && <span className="text-sm text-red-600">Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.</span>}
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="MarketingAccept" className="flex gap-4">
                                        <input
                                            type="checkbox"
                                            id="MarketingAccept"
                                            name="marketing_accept"
                                            className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />

                                        <span className="text-sm text-gray-700">
                                            I want to receive emails about events, product updates and company announcements.
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-6">
                                    <p className="text-sm text-gray-500">
                                        By creating an account, you agree to our
                                        <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                        and
                                        <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                    </p>
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button type="submit"
                                        className="inline-block shrink-0 rounded-md border border-blue-600 bg-gradient-to-r from-indigo-500 to-blue-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Create an account
                                    </button>

                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Do not have an account?
                                        <a href="#" className="text-blue-500 underline ">  Register</a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
        </div>
    );
};

export default Register;