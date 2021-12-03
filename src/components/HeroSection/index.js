import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements';
import {Button} from '../ButtonElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='/video.mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>The modern approach to The Classified Ads</HeroH1>
                <HeroP>HEADLINE PAGES FOR HEADLINE IDEAS</HeroP>
                <HeroBtnWrapper>
                    <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
                        PRINT IT{
                            hover ? <ArrowForward /> : <ArrowRight />
                        }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
