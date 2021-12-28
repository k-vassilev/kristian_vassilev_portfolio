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
		  	A tech-savvy professional, with focus on Web and App development with experience in ERP implementations and business consulting. I am also the CEO of a small web agency - <a href="https://www.etk-design.com/about/" target="_blank" rel="noreferrer">Ephedra-TK</a>.
		  </SectionText>
		  <a href="../../../Kristian_Vassilev_CV_28_12_2021.pdf" target="_blank" rel="noreferrer"><Button>View my Resume</Button></a>
	  </LeftSection>
  </Section>
);

export default Hero;