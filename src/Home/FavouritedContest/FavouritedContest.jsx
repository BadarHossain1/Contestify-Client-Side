import { useEffect, useState } from "react";
import { axiosSecure } from "../../Hooks/useAxiosSecure";
import Favourite from "./Favourite";
import SectionTitle from "../SectionTitle/SectionTitle";


const FavouritedContest = () => {
    const [favorite, setFavourite] = useState([])
    
    useEffect(()=>{
        axiosSecure.get('/favorite')
        .then(res=>{
            setFavourite(res.data)
        })

    }, [])


    const count = favorite.length;
    console.log(count);

    const itemPerPage = 10;
    const numberOfPages = Math.ceil(count / itemPerPage);

    const pages = [...Array(numberOfPages).keys()];
    console.log(pages);

    return (
        <div className="">

            <SectionTitle 
                title={"Most Favourited Contest"} 
                text={"Welcome to the Favorite Contests page, your gateway to a world of exciting challenges and competitions. Here, you can explore a diverse array of contests created by talented individuals and confirmed by our dedicated admin team."} 
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3 max-w-[1170px] mx-auto">
                {favorite.map((contest, index) => (
                    <Favourite key={index} contest={contest} />
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
                        <span class="font-medium text-white dark:text-white">1 - 10</span> of {favorite.length} records
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default FavouritedContest;