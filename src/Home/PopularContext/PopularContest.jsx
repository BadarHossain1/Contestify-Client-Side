import axios from "axios";
import { useEffect, useState } from "react";
import Contest from "./Contest";
import SectionTitle from "../SectionTitle/SectionTitle";


const PopularContest = () => {

    const [data, setData] = useState([]);


    useEffect(()=>{
        axios.get('/contest.json')
        .then(res => res.data)
        .then(data => setData(data)) 
    },[])




    return (
        <div className=" mx-auto ">
            <SectionTitle title={"Popular Contest"} text={"Discover an array of captivating contests curated based on user participation. Dive into a world of creativity, where you can showcase your talent, connect with fellow enthusiasts, and compete for exciting prizes. "}></SectionTitle>
            <div className=" max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 z-20">
                {
                    data.slice(0,6).map((contest, index)=> <Contest contest={contest} key={index}></Contest>)
                }

            </div>
            
        </div>
    );
};

export default PopularContest;