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


const AdvertiseContest = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('/advertise.json')
            .then(res => res.data)
            .then(data => setData(data))
    }, [])
    return (
        <div className=" max-w-[1170px] mx-auto">
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