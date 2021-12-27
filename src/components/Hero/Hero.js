import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
	  <LeftSection>
		  <SectionTitle main center>
			  Welcome To <br />
			  Kristian Vassilev`s Portfolio
		  </SectionTitle>
		  <SectionText>
		  	I am a tech-savvy professional, who focusses on Web and App development with experience in ERP implementations and business consulting. I am also the CEO of a small web agency - Ephedra-TK.
		  </SectionText>
		  <Button onClick={() => window.location.href = "../../../Kristian_G_V_CV_.pdf"}>View my Resume</Button>
	  </LeftSection>
  </Section>
);

export default Hero;