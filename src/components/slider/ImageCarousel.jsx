import React from 'react';
import { 
    CarouselProvider, 
    Image, 
    Slide, 
    Slider
} from 'pure-react-carousel';

import CustomDotGroup from './CustomDotGroup';

import bannerOne from '../../assets/images/banner_1.png';
import bannerTwo from '../../assets/images/banner_2.png';
import bannerThree from '../../assets/images/banner_3.png';
import bannerFour from '../../assets/images/banner_4.png';
import bannerFive from '../../assets/images/banner_5.png';

const ImageCarousel = () => (
    <>
        <CarouselProvider
            naturalSlideWidth={450}
            naturalSlideHeight={150}
            visibleSlides={2}
            isPlaying={'true'}
            hasMasterSpinner={'true'}
            totalSlides={5}
        >
            <Slider>
                <Slide tag="a" index={0}>
                    <Image src={bannerOne} />
                </Slide>
                <Slide tag="a" index={1}>
                    <Image src={bannerTwo} />
                </Slide>
                <Slide tag="a" index={2}>
                    <Image src={bannerThree} />
                </Slide>
                <Slide tag="a" index={3}>
                    <Image src={bannerFour} />
                </Slide>
                <Slide tag="a" index={4}>
                    <Image src={bannerFive} />
                </Slide>
            </Slider><br/>
            <CustomDotGroup slides={5} />
        </CarouselProvider>
    </>
)

export default ImageCarousel;
