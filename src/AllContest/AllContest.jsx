import SectionTitle from "../Home/SectionTitle/SectionTitle";
import AllContestCards from "./AllContestCards";
import { axiosSecure } from "../Hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from "react";

const AllContest = () => {
    const [approved, setApproved] = useState([]);
    const { data, isLoading, error } = useQuery({
        queryKey: ['contest'],
        queryFn: async () => {
            const {data} = await axiosSecure.get('/AllContest');
            const Approved = data.filter((contest) => contest?.status === 'Approved');
            setApproved(Approved);
            return data;
        }
    });

    const count = approved.length;
    console.log(count);

    const itemPerPage = 10;
    const numberOfPages = Math.ceil(count / itemPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);


    
   

    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>;
    }

    if (error) {
        return <div className="text-red">Error fetching contests</div>;
    }

    return (
        <div className="">
            <div className=""></div>
            <div className="hero min-h-[350px] mx-auto w-full border-indigo-500" style={{ backgroundImage: 'url(https://i.ibb.co/HhXYtgB/All-Contest.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl pt-10 font-[900] font-EBGaramond">All <span className="">Contest</span></h1>
                    </div>
                </div>
            </div>

            <SectionTitle 
                title={"Explore All Contests"} 
                text={"Welcome to the All Contests page, your gateway to a world of exciting challenges and competitions. Here, you can explore a diverse array of contests created by talented individuals and confirmed by our dedicated admin team."} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-[1170px] mx-auto">
                {approved.map((contest, index) => (
                    <AllContestCards key={index} contest={contest} />
                ))}
            </div>
            {<div class="max-w-full mx-auto mt-4 rounded-xl  bg-gradient-to-r  from-indigo-400 to-blue-400  dark:bg-gray-800">
                <div class="container flex flex-col items-center px-6 py-2 mx-auto space-y-6 sm:flex-row sm:justify-between sm:space-y-0 ">
                    <div class="-mx-2">
                        {pages.map((pata, index) => <a key={index}  class="inline-flex items-center justify-center px-4 py-1 mx-2 text-gray-700 transition-colors duration-300 transform bg-gray-100 rounded-lg dark:text-white dark:bg-gray-700">
                            {parseInt(pata)+1}
                        </a>)}


                    </div>

                    <div class="text-gray-500 dark:text-gray-400">
                        <span class="font-medium text-white dark:text-white">1 - 10</span> of {approved.length} records
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default AllContest;
