import React from 'react';
import Swiper from 'react-id-swiper';
import { Image, Button } from 'semantic-ui-react';

const BannerSlide = () => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        renderPrevButton: () => <Button circular icon="arrow left" color="red" />,
        renderNextButton: () => <Button circular icon="arrow right" color="red" />
    }

    return (
        <>
            <Swiper {...params}>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_1.png" fluid /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_2.png" fluid /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_3.png" fluid /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_4.png" fluid /></span></div>
                <div className="swiper-slide"><span><Image src="/assets/images/banner_5.png" fluid /></span></div>
            </Swiper>
        </>
    )
}

export default BannerSlide;
