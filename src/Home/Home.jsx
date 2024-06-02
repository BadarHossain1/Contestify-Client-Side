import Banner from "./Banner/Banner";
import PopularContest from "./PopularContext/PopularContest";




const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <div>
                <PopularContest></PopularContest>
            </div>

            
        </div>
    );
};

export default Home;