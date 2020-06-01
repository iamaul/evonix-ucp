import React from 'react';
import { 
    CarouselProvider, 
    Image, 
    Slide, 
    Slider
} from 'pure-react-carousel';

import CustomDotGroup from './CustomDotGroup';

const ImageCarousel = () => (
    <>
        <CarouselProvider
            naturalSlideWidth={800}
            naturalSlideHeight={800}
            isPlaying={'true'}
            hasMasterSpinner={'true'}
            totalSlides={5}
        >
            <Slider>
                <Slide tag="a" index={0}>
                    <Image src="/assets/images/banner_1.png" />
                </Slide>
                <Slide tag="a" index={1}>
                    <Image src="/assets/images/banner_2.png" />
                </Slide>
                <Slide tag="a" index={2}>
                    <Image src="/assets/images/banner_3.png" />
                </Slide>
                <Slide tag="a" index={3}>
                    <Image src="/assets/images/banner_4.png" />
                </Slide>
                <Slide tag="a" index={4}>
                    <Image src="/assets/images/banner_5.png" />
                </Slide>
            </Slider><br/>
            <CustomDotGroup slides={5} />
        </CarouselProvider>
    </>
)

export default ImageCarousel;
