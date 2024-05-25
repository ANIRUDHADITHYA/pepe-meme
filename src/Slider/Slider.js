
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import "./Slider.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useEffect, useState } from 'react';
import NftCard from '../NftCard/NftCard';


const Slider = () => {
    const [slidesPerView, setSlidesPerView] = useState(3);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1400) {
                setSlidesPerView(4);
            } else if (window.innerWidth >= 1050) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 700) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        // Initial setup
        handleResize();

        // Attach the event listener
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={slidesPerView}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>

            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
            <SwiperSlide>

            </SwiperSlide>
            <SwiperSlide>
                <NftCard>
                    <img src='./Asserts/NFT/5.jpeg'></img>
                </NftCard>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard>
                    <img src='./Asserts/NFT/6.jpeg'></img>
                </NftCard>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard>
                    <img src='./Asserts/NFT/7.jpeg'></img>
                </NftCard>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard>
                    <img src='./Asserts/NFT/8.jpeg'></img>
                </NftCard>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard>
                    <img src='./Asserts/NFT/9.jpeg'></img>
                </NftCard>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard>
                    <img src='./Asserts/NFT/10.jpeg'></img>
                </NftCard>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard>
                    <img src='./Asserts/NFT/11.jpeg'></img>
                </NftCard>
            </SwiperSlide>
            <SwiperSlide>
                <NftCard>
                    <img src='./Asserts/NFT/12.jpeg'></img>
                </NftCard>
            </SwiperSlide>



        </Swiper >
    );
}
export default Slider;