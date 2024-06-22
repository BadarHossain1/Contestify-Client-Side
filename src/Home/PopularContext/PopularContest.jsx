import axios from "axios";
import { useEffect, useState } from "react";
import Contest from "./Contest";
import SectionTitle from "../SectionTitle/SectionTitle";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import { Button } from "flowbite-react";

const PopularContest = ({ search }) => {
    const [data, setData] = useState([]);
    console.log('from frontend', search);
    const count = data.length;
    console.log(count);

    const itemPerPage = 10;
    const numberOfPages = Math.ceil(count / itemPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);





    useEffect(() => {
        axiosSecure.get(`/AllContest/${search}`)
            .then(res => {
                const Approved = res.data.filter((contest) => contest?.status === 'Approved');
                setData(Approved);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [search]);



    return (
        <div className="mx-auto">
            <SectionTitle title={"Popular Contest"} text={"Discover an array of captivating contests curated based on user participation. Dive into a world of creativity, where you can showcase your talent, connect with fellow enthusiasts, and compete for exciting prizes."}></SectionTitle>
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 z-20">
                {
                    data.slice(0, 6).map((contest, index) => <Contest contest={contest} key={index}></Contest>)
                }
            </div>
            {<div class="max-w-full mx-auto mt-4 rounded-xl  bg-gradient-to-r  from-indigo-400 to-blue-400  dark:bg-gray-800">
                <div class="container flex flex-col items-center px-6 py-2 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
                    <div class="-mx-2">
                        {pages.map((pata, index) => <a key={index} class="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700">
                            {parseInt(pata) + 1}
                        </a>)}


                    </div>

                    <div class="text-gray-500 dark:text-gray-400">
                        <span class="font-medium text-white dark:text-white">1 - 10</span> of {data?.length} records
                    </div>
                </div>
            </div>}
        </div>

    );
};

export default PopularContest;
