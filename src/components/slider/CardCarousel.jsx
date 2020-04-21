import React from 'react';
import { CarouselProvider, Slider } from 'pure-react-carousel';
import { Container } from 'semantic-ui-react';

import CustomCardSlide from './CustomCardSlide';
import CustomDotGroup from './CustomDotGroup';

const CardCarousel = () => (
    <>
        <Container textAlign="center">
            <CarouselProvider
                naturalSlideWidth={1}
                naturalSlideHeight={1.25}
                totalSlides={3}
                style={{ width: "300px" }}
            >
                <Slider>
                    <CustomCardSlide
                        image="https://place-hold.it/800x800&text=Matthew&fontsize=32"
                        index={0}
                        header="Matthew House"
                        meta="Friend"
                    />
                    <CustomCardSlide
                        header="Elliot Baker"
                        image="https://place-hold.it/800x800&text=Elliot&fontsize=32"
                        index={1}
                        meta="Friend"
                    />
                    <CustomCardSlide
                        header="Steve Sanders"
                        image="https://place-hold.it/800x800&text=Steve&fontsize=32"
                        index={2}
                        meta="Friend"
                    />
                </Slider>
                <CustomDotGroup slides={3} />
            </CarouselProvider>
        </Container>
    </>
)

export default CardCarousel;
