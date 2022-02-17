import React from 'react'
import Video from '../../videos/video.mp4'
//import { Link } from "react-scroll";
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP
} from './HeroElements';
const HeroSection = () => {
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1 className="text-3xl text-neongreen font-fira">Hello, My name is Pasang Sherpa</HeroH1>
            <HeroP >
                I am a Full-stack Software developer with
                experience in various Programming languages.
                Currrently looking for an opportunity to work
                in a fortune 500 companies.
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection;