import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';



const StyledLink = Styled(Link)`
  font-size: 13px;
  color: white;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
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
      <div id='footerContainer'>
        <div id='footerMainContainer'>
          <div id='footerBox'>
            <p id='footerCopyright'>Copyright © 2019 <StyledLink to={`/`}> &nbsp; House Call Doctors Utah. &nbsp; </StyledLink>All rights reserved.</p>
            <div id='footerNavContainer'>
              <Nav>
                <StyledLink to={'/'}>Home</StyledLink>
                <StyledLink to={'about-us'}>About Us</StyledLink>
                <StyledLink to={'our-providers'}>Our Providers</StyledLink>
                <StyledLink to={'our-services'}>Our Services</StyledLink>
                <StyledLink to={'our-privacy-policy'}>Our Privacy Policy</StyledLink>
                <StyledLink to={'contact-us'}>Contact Us</StyledLink>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Footer;
