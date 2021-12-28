import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
	<Section nopadding id="projects">
		<SectionDivider />
		<SectionTitle main>React projects</SectionTitle>
		<GridContainer>
			{projects.map(({title, description, image, tags, source, visit, id}) => (
				<BlogCard key={id}>
					<Img src={image}/>
					<br />
					<TitleContent>
						<HeaderThree title>{title}</HeaderThree>
						<Hr />
					</TitleContent>
					<CardInfo>{description}</CardInfo>
					<br />
					<div>
						<TitleContent>Tech</TitleContent>
						<TagList>
							{tags.map((tag, i) => (
								<Tag key={i}>{tag}</Tag>
							))}
						</TagList>
					</div>
					<UtilityList>
						<ExternalLinks href={source} target="_blank" rel="noreferrer">Code</ExternalLinks>
						<ExternalLinks href={visit} target="_blank" rel="noreferrer">Live</ExternalLinks>
					</UtilityList>
				</BlogCard>
			))}
		</GridContainer>
	</Section>
);

export default Projects;