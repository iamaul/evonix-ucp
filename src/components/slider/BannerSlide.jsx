import React from 'react';
import Swiper from 'react-id-swiper';

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
                <div><Image src="/assets/images/banner_1.png" /></div>
                <div><Image src="/assets/images/banner_2.png" /></div>
                <div><Image src="/assets/images/banner_3.png" /></div>
                <div><Image src="/assets/images/banner_4.png" /></div>
                <div><Image src="/assets/images/banner_5.png" /></div>
            </Swiper>
        </>
    )
}

export default BannerSlide;
