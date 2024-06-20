import { useState } from "react";
import AboutUs from "./About/AboutUs";
import AdvertiseContest from "./AdvertiseContest/AdvertiseContest";
import Banner from "./Banner/Banner";

import ContestCreators from "./ContestCreator/ContestCreators";
import PopularContest from "./PopularContext/PopularContest";
import Stats from "./Stats/Stats";
import Trusted from "./Stats/Trusted";
import Subscribe from "./Subscribe/Subscribe";
import Tag from "./Tag/Tag";





const Home = () => {

    const [search, setSearch] = useState('');
    console.log('from search', search);

    const handleSearchString = (string) =>{
        setSearch(string);
    }




    return (
        <div>
            <div>
                <Tag></Tag>
            </div>
            <div>
                
                <Banner handleSearchString={handleSearchString}></Banner>
            </div>
            <div>
                <Stats></Stats>
            </div>
            <div>
                <Trusted></Trusted>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <div className="">
                <PopularContest search={search}></PopularContest>
            </div>
            <div className="">
                <AdvertiseContest ></AdvertiseContest>
            </div>
            <div className="">
                <ContestCreators></ContestCreators>
            </div>
            <div className="mt-[100px]">
                <Subscribe></Subscribe>
            </div>
            



        </div>
    );
};

export default Home;