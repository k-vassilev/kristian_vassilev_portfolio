import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
		<LinkList>
			<LinkColumn>
				<LinkTitle>Call</LinkTitle>
				<LinkItem href="tel:+359-886-901-202">+359-886-901-202</LinkItem>
			</LinkColumn>
			<LinkColumn>
				<LinkTitle>Email</LinkTitle>
				<LinkItem href="mailto:kristian.g.vassilev@gmail.com">kristian.g.vassilev@gmail.com</LinkItem>
			</LinkColumn>
		</LinkList>
		<SocialIconsContainer>
			<CompanyContainer>
				<Slogan>"Live as if there is no tomorrow. Learn as if you were to live forever."</Slogan>
			</CompanyContainer>
			<SocialIconsContainer>
				<SocialIcons href="https://github.com/k-vassilev" target="_blank" rel="noreferrer">
					<AiFillGithub size="3rem" />
				</SocialIcons>
				<SocialIcons href="https://www.linkedin.com/in/kristian-vassilev-86076227/" target="_blank" rel="noreferrer">
					<AiFillLinkedin size="3rem" />
				</SocialIcons>
			</SocialIconsContainer>
		</SocialIconsContainer>
	</FooterWrapper>
  );
};

export default Footer;
