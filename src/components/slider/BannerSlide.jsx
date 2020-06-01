import React from 'react';
import Swiper from 'react-id-swiper';
import { Image } from 'semantic-ui-react';

const BannerSlide = () => {
    const params = {
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    }

    return (
        <>
            <Swiper {...params}>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_1.png" circular /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_2.png" circular /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_3.png" circular /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_4.png" circular /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_5.png" circular /></span></div>
            </Swiper>
        </>
    )
}

export default BannerSlide;
