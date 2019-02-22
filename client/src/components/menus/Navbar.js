import React, { Component } from 'react';
import { Image, Dropdown } from 'semantic-ui-react';
import { NavLink, Link } from 'react-router-dom';
import Styled from 'styled-components';
import HCDLogo from '../../images/HCDLogo.png';


const EachNav = Styled(NavLink)`
  font-size: 17px;
  color: black;
  font-weight: bold;
  transition: all 200ms ease-in-out;
  &:hover,&.active {
    color: #AF3120;
  }
  &.active {
    border-bottom: solid 2px;
  }
`

const Nav = Styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-end;
  margin-right: 25px;

  ${EachNav} {
    margin-left: 20px;
  }
`

const StyledImage = Styled(Image)`
  margin: 0 0 5px 20px;
  max-height: 190px;
`


const styles = {
  container:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  divStyle:{
    margin: '0px 0px 0px 10px'
  },
}

const options1 = [
  { key: 1, text: 'Primary Care', value: 1 },
  { key: 2, text: 'In House Assessments', value: 2 },
]

const options2 = [
  { key: 3, text: 'Primary Care', value: 2 },
  { key: 4, text: 'In House Assessments', value: 3 },
]

class Navbar extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Link to={`/`}>
          <StyledImage src={HCDLogo} alt="House Call Doctors' logo" />
        </Link>
        <Nav>
          <EachNav exact to={'/'}>HOME</EachNav>
          <EachNav to={'/about-us'}>ABOUT US</EachNav>
          <EachNav to={'/our-providers'}><Dropdown text='OUR PROVIDERS' options={options2} icon={false} simple item /></EachNav>
          <EachNav to={'/our-services'}><Dropdown text='OUR SERVICES' options={options1} icon={false} simple item /></EachNav>
          <EachNav to={'/our-privacy-policy'}>OUR PRIVACY POLICY</EachNav>
          <EachNav to={'/contact-us'}>CONTACT US</EachNav>
        </Nav>
      </div>
    )
  }
}




export default Navbar;
