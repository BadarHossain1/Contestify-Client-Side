import { useContext, useState } from "react";
import { AuthContext } from "../../ContextProvider/ContextProvider";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Bounce, toast } from "react-toastify";







const AddContest = () => {

    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());

    const [option, setOption] = useState('');
    console.log(option)

    const array = ['Image Design'
        , 'ArticleWriting', 'MarketingStrategy', 'DigitalAdvertisement', 'GamingReview', 'BookReview',
        'BusinessIdea', 'MovieReview']




    const handleAddContest = (e) => {
        e.preventDefault();
        const Name = e.target.name.value;
        const Image = e.target.image.value;
        const Price = e.target.price.value;
        const Description = e.target.description.value;
        const TextInstruction = e.target.textInstruction.value;
        const CreatorEmail = user?.email;
        const CreatorName = user?.displayName;
        const Category = option;
        const deadline = startDate;
        const participantsCount = 0;

        const contest = {
            Name,
            Image,
            Price,
            Description,
            TextInstruction,
            CreatorEmail,
            CreatorName,
            Category,
            deadline,
            participantsCount,

        }

        console.log(contest);

        axiosSecure.post('/AddContest', contest)
            .then(res => {
                console.log(res.data)

                //sweet alert


            })
            .catch(err => console.log(err))



    }


    return (
        <div>


            <section className=" bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
                    <p className="mx-auto w-80 text-5xl font-EBGaramond font-extrabold bg-gradient-to-r mb-3 from-indigo-600 to-blue-400 text-transparent  bg-clip-text ">Add Contest</p>
                    <div className="rounded-lg  bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleAddContest} action="#" className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Contest Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Contest Name"
                                    type="text"
                                    id="name"
                                    name="name"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="sr-only" htmlFor="email">Photo</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Photo URL"
                                        type="text"
                                        id="image"
                                        name="image"
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Price</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Price $$"
                                        type="number"
                                        id="price"
                                        name="price"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="sr-only" htmlFor="name">Contest Description</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Contest Description"
                                    type="text"
                                    id="description"
                                    name="description"
                                />
                            </div>
                            {/* <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                <div>
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="email"
                                        id="email"
                                        defaultValue={user?.email}
                                        disabled
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="email">User</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Email address"
                                        type="UserName"
                                        id="UserName"
                                        defaultValue={user?.displayName}
                                        disabled
                                    />
                                </div>


                            </div> */}
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                <select
                                    name="HeadlineAct"
                                    id="HeadlineAct"
                                    className="mt-1.5 rounded-lg border-gray-300  text-gray-700 sm:text-sm"
                                    onChange={(e) => setOption(e.target.value)}
                                >

                                    {array.map((tag, index) => <option key={index} value={tag}>{tag}</option>)}

                                </select>

                                <input
                                    className="w-full rounded-lg border-gray-200 p-2 text-sm"
                                    placeholder="Contest Description"
                                    type="Date"
                                    id="Date"
                                    name="Date"
                                    onChange={(e) => {
                                        setStartDate(e.target.value)

                                    }}
                                />


                            </div>


                            <div>
                                <label className="sr-only" htmlFor="message">Text Instruction</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="Text Instruction"
                                    rows="8"
                                    id="TextInstruction"
                                    name="textInstruction"
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                >
                                    Add Contest
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AddContest;