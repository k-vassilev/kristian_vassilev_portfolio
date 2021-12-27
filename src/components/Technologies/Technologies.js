import React from 'react';
import { DiFirebase, DiReact, DiStackoverflow } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
	  <SectionDivider />
	  <br />
	  <SectionTitle>Technologies</SectionTitle>
	  <SectionText>
		  I have worked with a range of technologies including:
		  React, JavaScript, CSS, HTML, PHP, WordPress, bgERP, Oracle EBS, Oracle Peoplesoft
	  </SectionText>
	  <List>
		  <ListItem>
			  <DiReact size="3rem"/>
			  <ListContainer>
				  <ListTitle>Front-End</ListTitle>
				  <ListParagraph>
					  Experience with: <br />
					  React.js, JavaScript, CSS, HTML, WordPress
				  </ListParagraph>
			  </ListContainer>
		  </ListItem>
		  <ListItem>
			  <DiFirebase size="3rem"/>
			  <ListContainer>
				  <ListTitle>Back-end</ListTitle>
				  <ListParagraph>
					  Experience with: <br />
					  Node.js, PHP, Databases, WordPress
				  </ListParagraph>
			  </ListContainer>
		  </ListItem>
		  <ListItem>
			  <DiStackoverflow size="3rem"/>
			  <ListContainer>
				  <ListTitle>ERP</ListTitle>
				  <ListParagraph>
					  Experience with: <br />
					  ERPNext, Oracle EBS, Oracle PeopleSoft, bgERP
				  </ListParagraph>
			  </ListContainer>
		  </ListItem>
	  </List>
  </Section>
);

export default Technologies;
