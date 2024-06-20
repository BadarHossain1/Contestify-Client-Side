import axios from "axios";
import { useEffect, useState } from "react";
import Contest from "./Contest";
import SectionTitle from "../SectionTitle/SectionTitle";
import { axiosSecure } from "../../Hooks/useAxiosSecure";

const PopularContest = ({ search }) => {
    const [data, setData] = useState([]);
    console.log('from frontend', search);

  

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
                    data.slice(0,6).map((contest, index) => <Contest contest={contest} key={index}></Contest>)
                }
            </div>
        </div>
    );
};

export default PopularContest;
