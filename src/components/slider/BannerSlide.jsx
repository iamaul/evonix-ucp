import React from 'react';
import Swiper from 'react-id-swiper';
import { Image } from 'semantic-ui-react';

const BannerSlide = () => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        }
    }

    return (
        <>
            <Swiper {...params}>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_1.png" /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_2.png" /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_3.png" /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_4.png" /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_5.png" /></span></div>
            </Swiper>
        </>
    )
}

export default BannerSlide;
