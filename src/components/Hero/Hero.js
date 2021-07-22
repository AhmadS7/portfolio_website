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
      <SectionText>Let's see what We build next...</SectionText>
    </LeftSection>
    <button
      onClick={(e) =>
        (window.location = 'https://developer.mozilla.org/en-US/')
      }
    >
      Learn More
    </button>
  </Section>
);

export default Hero;
