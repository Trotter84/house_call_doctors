import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import Styled from 'styled-components';
import HCDLogo from '../../images/HC_Logo.png';
import DROLogo from '../../images/DRO_Logo.png';


const EachNav = Styled(NavLink)`
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #AF3120;
  }
  &.active {
    border-bottom: solid 0.154em;
  }
`


class Navbar extends Component {

  render() {
    return (
      <div id='mainContainer-navBar'>
        <Link to={`/`} className='logo-navBar'>
          <Image id='hcdLogo' src={HCDLogo} alt="House Call Doctors logo" />
        </Link>
        <div id='container-navBar'>
          <EachNav exact='true' to={'/'} className='eachNav-navBar' aria-current='page' end>HOME</EachNav>
          <i className='circle tiny icon grey' />
          <EachNav to={'/about-us'} className='eachNav-navBar' aria-current='page'>ABOUT US</EachNav>
          <i className='circle tiny icon grey' />
          <EachNav to={'/our-providers'} className='eachNav-navBar' aria-current='page'>OUR PROVIDERS</EachNav>
          <i className='circle tiny icon grey' />
          <EachNav to={'/our-services'} className='eachNav-navBar' aria-current='page'>OUR SERVICES</EachNav>
          <i className='circle tiny icon grey' />
          <EachNav to={'/our-privacy-policy'} className='eachNav-navBar' aria-current='page'>OUR PRIVACY POLICY</EachNav>
          <i className='circle tiny icon grey' />
          <EachNav to={'/contact-us'} className='eachNav-navBar' aria-current='page'>CONTACT US</EachNav>
        </div>
        <Link to={`/`} className='logo-navBar'>
          <Image id='droLogo' src={DROLogo} alt="The Doctors Office logo" />
        </Link>
      </div>
    )
  }
}


export default Navbar;
