import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import Styled from 'styled-components';
import HCDLogo from '../../images/HCDLogo.png';


const EachNav = Styled(NavLink)`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #AF3120;
  }
  &.active {
    border-bottom: solid 0.154em;
  }
`

const Nav = Styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  margin-right: 1.563em;

  ${EachNav} {
    margin-left: 1.250em;
  }
`


class Navbar extends Component {

  render() {
    return (
      <div id='navBarContainer'>
        <Link to={`/`}>
          <Image id='navBarStyledImage' src={HCDLogo} alt="House Call Doctors' logo" />
        </Link>
        <Nav id='navBarNav'>
          <EachNav exact to={'/'} className='navBarEachNav' aria-current='Home'>HOME</EachNav>
          <EachNav to={'/about-us'} className='navBarEachNav' aria-current='About Us'>ABOUT US</EachNav>
          <EachNav to={'/our-providers'} className='navBarEachNav' aria-current='Our Providers'>OUR PROVIDERS</EachNav>
          <EachNav to={'/our-services'} className='navBarEachNav' aria-current='Our Services'>OUR SERVICES</EachNav>
          <EachNav to={'/our-privacy-policy'} className='navBarEachNav' aria-current='Our Privacy Policy'>OUR PRIVACY POLICY</EachNav>
          <EachNav to={'/contact-us'} className='navBarEachNav' aria-current='Contact Us'>CONTACT US</EachNav>
        </Nav>
      </div>
    )
  }
}




export default Navbar;
