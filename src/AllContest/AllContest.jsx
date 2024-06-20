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

    


    
   

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching contests</div>;
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
        </div>
    );
};

export default AllContest;
