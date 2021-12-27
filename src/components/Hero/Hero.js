import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
	  <LeftSection>
		  <SectionTitle main center>
			  Welcome To <br />
			  Kristian Vassilev`s Portfolio
		  </SectionTitle>
		  <SectionText>
		  	A tech-savvy professional, who focusses on Web developmenet, ERP Systems and Business consulting.
		  </SectionText>
		  <Button onClick={() => window.location = "https://www.etk-design.com/portfolio/"}>Learn More</Button>
	  </LeftSection>
  </Section>
);

export default Hero;