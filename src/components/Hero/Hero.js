import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section raw nopadding>
    <LeftSection>
      <SectionTitle main center>
        fáilte <br /> Meine Portfolio
      </SectionTitle>
      <SectionText>
        Fullstack React Developer, Let's see what i build next...
      </SectionText>
    </LeftSection>
    <Button
      onClick={(e) =>
        (window.location = 'https://github.com/AhmadS7?tab=repositories')
      }
    >
      Learn More
    </Button>
  </Section>
);

export default Hero;
