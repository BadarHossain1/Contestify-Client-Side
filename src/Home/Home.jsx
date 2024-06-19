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
    return (
        <div>
            <div>
                <Tag></Tag>
            </div>
            <div>
                
                <Banner></Banner>
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
                <PopularContest></PopularContest>
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