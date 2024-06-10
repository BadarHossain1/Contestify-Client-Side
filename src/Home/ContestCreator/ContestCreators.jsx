
import axios from "axios";
import { useEffect, useState } from "react";
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ContestCreator from "./ContestCreator";
import SectionTitle from "../SectionTitle/SectionTitle";


const ContestCreators = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/creators.json')
            .then(res => res.data)
            .then(data => setData(data))
    }, [])
    return (
        <div className="max-w-[1280px]  mx-auto ">
            <SectionTitle title={"Top Contest Creators"} text={"Explore the visionary works of our top contest creators, each a maestro in their own right. From captivating digital art to awe-inspiring photography and expressive abstracts, immerse yourself in a world of boundless creativity."}></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <div className="">
                    {data.map((creator, index) => <SwiperSlide className="w-[500px]" key={index}>
                        <ContestCreator key={index} creator={creator}></ContestCreator>
                    </SwiperSlide>)}
                </div>

            </Swiper>
        </div>
    );
};

export default ContestCreators;