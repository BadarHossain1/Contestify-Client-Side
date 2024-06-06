import { useEffect, useState } from "react";
import SectionTitle from "../Home/SectionTitle/SectionTitle";
import axios from "axios";
import AllContestCards from "./AllContestCards";

const AllContest = () => {
    const [data, setData] = useState([]);


    useEffect(()=>{
        axios.get('/contest.json')
        .then(res => res.data)
        .then(data => setData(data)) 
    },[])
    return (
        <div className="">
            <div className=""></div>
            <div className="hero min-h-[350px]  mx-auto   w-full border-indigo-500" style={{ backgroundImage: 'url(https://i.ibb.co/HhXYtgB/All-Contest.jpg)' }}>
                <div className="hero-overlay  bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl pt-10  font-[900] font-EBGaramond">All <span className="">Contest</span></h1>

                    </div>
                </div>
            </div>


            {/* The contest section title */}

            <SectionTitle title={"Explore All Contests"} text={"Welcome to the All Contests page, your gateway to a world of exciting challenges and competitions. Here, you can explore a diverse array of contests created by talented individuals and confirmed by our dedicated admin team. "}></SectionTitle>


            {/* The contest cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-[1170px] mx-auto">

                {
                    data.map((contest, index)=> <AllContestCards key={index} contest={contest}></AllContestCards>)
                }

            </div>
        </div>
    );
};

export default AllContest;