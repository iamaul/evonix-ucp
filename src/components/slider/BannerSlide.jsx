import React from 'react';
import Swiper from 'react-id-swiper';
import { Image } from 'semantic-ui-react';

const BannerSlide = () => {
    const params = {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 5000,
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
                <span><Image src="/assets/images/banner_1.png" size="massive" rounded /></span>
                <span><Image src="/assets/images/banner_2.png" size="massive" rounded /></span>
                <span><Image src="/assets/images/banner_3.png" size="massive" rounded /></span>
                <span><Image src="/assets/images/banner_4.png" size="massive" rounded /></span>
                <span><Image src="/assets/images/banner_5.png" size="massive" rounded /></span>
            </Swiper>
        </>
    )
}

export default BannerSlide;
