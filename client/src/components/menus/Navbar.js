import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import Styled from 'styled-components';
import HCDLogo from '../../images/HCDLogo.png';


const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const EachNav = Styled(NavLink)`
  font-size: 1.308em;
  color: black;
  font-weight: bold;
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

const StyledImage = Styled(Image)`
  margin: 0 0 5px 20px;
  max-height: 11.875em;
`


class Navbar extends Component {

  render() {
    return (
      <Container id='NavbarContainer'>
        <Link to={`/`}>
          <StyledImage id='NavbarStyledImage' src={HCDLogo} alt="House Call Doctors' logo" />
        </Link>
        <Nav>
          <EachNav exact to={'/'}>HOME</EachNav>
          <EachNav to={'/about-us'}>ABOUT US</EachNav>
          <EachNav to={'/our-providers'}>OUR PROVIDERS</EachNav>
          <EachNav to={'/our-services'}>OUR SERVICES</EachNav>
          <EachNav to={'/our-privacy-policy'}>OUR PRIVACY POLICY</EachNav>
          <EachNav to={'/contact-us'}>CONTACT US</EachNav>
        </Nav>
      </Container>
    )
  }
}




export default Navbar;
