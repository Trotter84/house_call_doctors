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
          <EachNav exact to={'/'} className='navBarEachNav'>HOME</EachNav>
          <EachNav to={'/about-us'} className='navBarEachNav'>ABOUT US</EachNav>
          <EachNav to={'/our-providers'} className='navBarEachNav'>OUR PROVIDERS</EachNav>
          <EachNav to={'/our-services'} className='navBarEachNav'>OUR SERVICES</EachNav>
          <EachNav to={'/our-privacy-policy'} className='navBarEachNav'>OUR PRIVACY POLICY</EachNav>
          <EachNav to={'/contact-us'} className='navBarEachNav'>CONTACT US</EachNav>
        </Nav>
      </div>
    )
  }
}




export default Navbar;
