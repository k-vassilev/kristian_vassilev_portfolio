import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const ExternalLinks = styled.a`
color: #FFF;
background: none;
border: 1px solid rgba(255, 255, 255, 0.33);
box-sizing: border-box;
border-radius: 999px;
padding: 16px 24px;
font-weight: 600;
font-size: 18px;
line-height: 16px;
width: fit-content;
margin-top: 32px;
margin-bottom: 80px;
cursor: pointer;
transition: 0.4s ease;
&:focus {
  outline: none;
}

&:hover {
  color: #0f1624;
  background: #fff;
  border: 1px solid #fff;
}

&:active {
  background: #e0e4eb;
  border: 1px solid #304169;
  box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
}
`;