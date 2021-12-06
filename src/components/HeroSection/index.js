import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper
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
                <HeroH1>Web Pages made easy</HeroH1>
                <HeroP>We help build your online pages and help with your online branding</HeroP>
                <HeroBtnWrapper>
                    <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover} primary={true} dark={true}>
                        Print{ hover }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
