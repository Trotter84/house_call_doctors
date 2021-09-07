import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';



const StyledLink = Styled(Link)`
  color: white;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
  }
`


const Nav = Styled.div`
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
            <p id='footerCopyright'>Copyright © 2021 <StyledLink id='footerLinkCopyright' to={`/`}> &nbsp; House Call Doctors Utah. &nbsp; </StyledLink>All rights reserved.</p>
            <div id='footerNavContainer'>
              <Nav id='footerNav'>
                <StyledLink to={'/'} className='footerEachNav' aria-current='Home' alt='Footer home link'>Home</StyledLink>
                <StyledLink to={'about-us'} className='footerEachNav' aria-current='About Us' alt='Footer about us link'>About Us</StyledLink>
                <StyledLink to={'our-providers'} className='footerEachNav' aria-current='Our Providers' alt='Footer our providers link'>Our Providers</StyledLink>
                <StyledLink to={'our-services'} className='footerEachNav' aria-current='Our Services' alt='Footer our services link'>Our Services</StyledLink>
                <StyledLink to={'our-privacy-policy'} className='footerEachNav' aria-current='Our Privacy Policy' alt='Footer our privacy policy link'>Our Privacy Policy</StyledLink>
                <StyledLink to={'contact-us'} className='footerEachNav' aria-current='Contact Us' alt='Footer contact us link'>Contact Us</StyledLink>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Footer;
