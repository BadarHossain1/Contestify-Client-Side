import axios from "axios";
import { useEffect, useState } from "react";
import Advertise from "./Advertise";

// import Swiper styles


import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import SectionTitle from "../SectionTitle/SectionTitle";


const AdvertiseContest = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/advertise.json')
            .then(res => res.data)
            .then(data => setData(data))
    }, [])
    return (
        <div className=" max-w-[1280px] mx-auto ">
            <SectionTitle title={"Contest Showcase"} text={"Explore our latest contests, featuring inspiring winners and captivating entries. Dive into the world of creativity and join the excitement as we celebrate the winners and participants who make our contests extraordinary"}></SectionTitle>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >

                <div className="grid grid-cols-1 gap-6 ">


                    {data.map((advertise, index) => <SwiperSlide key={index}><Advertise key={index} advertise={advertise}></Advertise></SwiperSlide>)}
                </div>

            </Swiper>


        </div>
    );
};

export default AdvertiseContest;