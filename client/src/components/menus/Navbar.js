import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import HCDLogo from '../../images/HCDLogo.png';


const Nav = Styled.div`
  width: 800px;
  padding-right: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  justify-content: space-between;
`

const EachNav = Styled.div`
  font-size: 15px;
  color: black;
  font-weight: bold;
  transition: all 200ms ease-in-out;
  :hover {
    color: #AF3120;
    border-bottom: solid 2px;
  }
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

class Navbar extends Component {

  render() {
    return (
      <div style={styles.container}>
        <Link to={`/`}>
          <Image style={styles.divStyle} src={HCDLogo} size='medium' />
        </Link>
        <Nav>
          <Link to={'/'}><EachNav>HOME</EachNav></Link>
          <Link to={'about-us'}><EachNav>ABOUT US</EachNav></Link>
          <Link to={'our-providers'}><EachNav>OUR PROVIDERS</EachNav></Link>
          <Link to={'our-services'}><EachNav>OUR SERVICES</EachNav></Link>
          <Link to={'our-privacy-policy'}><EachNav>OUR PRIVACY POLICY</EachNav></Link>
          <Link to={'contact-us'}><EachNav>CONTACT US</EachNav></Link>
        </Nav>
      </div>
    )
  }
}




export default Navbar;
