import React, { useState } from "react";

import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  Aboutp1,
  Aboutp2,
  Aboutp,
  AboutToggle
} from "./aboutElements";

const AboutSection = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isActive, setActive] = useState("false");

  function toggle() {
    setActive(!isActive);
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <AboutContainer id='about' className={isActive ? "daytime" : "App-header"}>
        {/* <Imagebg src={Image} type="image/svg"></Imagebg> */}
        <AboutContent>
          <AboutTitle>About Me</AboutTitle>
          <Aboutp1>
            “I am a positive, enthusiastic and competent Web Developer who, over
            the years, has built up a diverse range of skills, qualities and
            attributes that guarantee I will perform highly in this role. I have
            extensive experience working both alone and as part of a team on
            often time-sensitive, challenging web development projects that
            require outstanding creative and technical capabilities and the
            ability to ensure all work is optimized across a wide range of
            platforms.
          </Aboutp1>
          <Aboutp>
            I am a very hard working, passionate web Developer, I am originally
            from Nepal. I have been coding for about 4 years and will continue
            to develop more.
          </Aboutp>
          <Aboutp2>
              Besides programming I also love to swim, I have wom many medals 
              in swimming competitions. I have a lifeguard and a swim instructor 
              certification.
          </Aboutp2>
        </AboutContent>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
