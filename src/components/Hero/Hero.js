import React, { useState } from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import { Modal } from './Modal';

const Hero = (props) => {
 
  return (
  
  <>
 
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
      Hi, I'm Abhishek Pandit. I am a Full-stack developer from Kolkata,India. I enjoy building everything from small business sites to rich interactive web apps.My expertise is in the area of responsive design.With every line of code, I strive to make the web a beautiful place.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      
      </LeftSection>
    </Section>
  </>
)};

export default Hero;