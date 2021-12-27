import React from 'react';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 26, text: 'Successfull WordPress projects'},
  { number: 30, text: 'Training sessions lead on ERP functionalities', },
  { number: 15, text: 'Full cycles of ERP implementations', },
  { number: 50, text: 'Happy clients', }
];

const Acomplishments = () => (
  <Section>
	  <SectionTitle>Personal Achievements</SectionTitle>
	  <Boxes>
		  {data.map((card, index) => (
			  <Box key={index}>
				  <BoxNum>{card.number}+</BoxNum>
				  <BoxText>{card.text}</BoxText>
			  </Box>
		  ))}
	  </Boxes>
  </Section>
);

export default Acomplishments;
