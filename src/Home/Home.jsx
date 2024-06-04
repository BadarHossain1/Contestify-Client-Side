import AdvertiseContest from "./AdvertiseContest/AdvertiseContest";
import Banner from "./Banner/Banner";
import ContestCreators from "./ContestCreator/ContestCreators";
import PopularContest from "./PopularContext/PopularContest";




const Home = () => {
    return (
        <div>

            <div>
                <Banner></Banner>
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



        </div>
    );
};

export default Home;