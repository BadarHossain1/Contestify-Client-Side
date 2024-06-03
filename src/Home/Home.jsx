import AdvertiseContest from "./AdvertiseContest/AdvertiseContest";
import Banner from "./Banner/Banner";
import ContestCreators from "./ContestCreator/ContestCreators";
import PopularContest from "./PopularContext/PopularContest";




const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div className="pt-[400px] lg:pt-[200px]">
                <PopularContest></PopularContest>
            </div>
            <div className="pt-[400px] lg:pt-[100px]">
                <AdvertiseContest ></AdvertiseContest>
            </div>
            <div className="pt-[400px] lg:pt-[100px]">
                <ContestCreators></ContestCreators>
            </div>
            

            
        </div>
    );
};

export default Home;