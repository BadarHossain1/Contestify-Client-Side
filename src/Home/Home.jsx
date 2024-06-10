import AdvertiseContest from "./AdvertiseContest/AdvertiseContest";

import BannerF from "./Banner/BannerF";
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
                
                <BannerF></BannerF>
            </div>
            <div>
                <Stats></Stats>
            </div>
            <div>
                <Trusted></Trusted>
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