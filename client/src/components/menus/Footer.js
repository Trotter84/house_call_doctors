import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';


const FooterContainer = Styled.div`
  background-color: #1C1C1C;
  height: 100px;
`

const MainContainer = Styled.div`
  max-width: 1250px;
  margin: auto;
`

const Box = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Copyright = Styled.p`
  padding: 25px 0 0 30px;
  color: #878787;
`

const StyledLink = Styled(Link)`
  font-size: 13px;
  color: white;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`

const NavContainer = Styled.div`
  padding-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const Nav = Styled.div`
  margin-right: 25px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;

  ${StyledLink} {
    margin-left: 20px;
  }
`


class Footer extends Component {

  render() {
    return(
      <FooterContainer>
        <MainContainer>
          <Box>
            <Copyright>Copyright © 2019 <StyledLink to={`/`}> &nbsp; House Call Doctors Utah. &nbsp; </StyledLink>All rights reserved.</Copyright>
            <NavContainer>
              <Nav>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'about-us'}>About Us</StyledLink>
                <StyledLink to={'our-providers'}>Our Providers</StyledLink>
                <StyledLink to={'our-services'}>Our Services</StyledLink>
                <StyledLink to={'our-privacy-policy'}>Our Privacy Policy</StyledLink>
                <StyledLink to={'contact-us'}>Contact Us</StyledLink>
              </Nav>
            </NavContainer>
          </Box>
        </MainContainer>
      </FooterContainer>
    )
  }
};

export default Footer;
